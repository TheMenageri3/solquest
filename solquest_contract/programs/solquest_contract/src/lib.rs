use anchor_lang::prelude::*;
use anchor_lang::solana_program::pubkey::PUBKEY_BYTES;
use anchor_lang::system_program::{transfer, Transfer};

declare_id!("C1q7Wna7sMz5CyJmzGhshdsbjEa2ULHEqTpk6gfQYE8x");

#[program]
pub mod solquest_contract {

    use super::*;

    pub fn create_bounty(
        ctx: Context<CreateBountyEscrow>,
        _cuid: String,

        // I don't think it is necessary to store the title?
        title: String,
        member_total: u16,
        amount: u64,
    ) -> Result<()> {
        ctx.accounts
            .create_bounty_escrow(title, member_total, amount)
    }

    pub fn load_member(ctx: Context<LoadMember>) -> Result<()> {
        ctx.accounts.load_member()
    }
}

#[derive(Accounts)]
#[instruction(cuid: String, title: String, member_total: u16)]
pub struct CreateBountyEscrow<'info> {
    #[account(mut)]
    pub creator: Signer<'info>,

    #[account(
        constraint = title.len() < BountyEscrow::MAX_TITLE_LEN,
        init,
        payer = creator,
        space = BountyEscrow::size(member_total as usize),
        seeds = [
            cuid.as_bytes(),
            creator.key().as_ref(),
            BOUNTY_ESCROW_SEED.as_bytes(),
        ],
        bump,
    )]
    pub bounty_escrow: Account<'info, BountyEscrow>,

    pub system_program: Program<'info, System>,
}

impl<'info> CreateBountyEscrow<'info> {
    pub fn create_bounty_escrow(
        &mut self,
        title: String,
        member_total: u16,
        amount: u64,
    ) -> Result<()> {
        self.bounty_escrow
            .init(self.creator.key(), title, member_total, amount);

        transfer(
            CpiContext::new(
                self.system_program.to_account_info(),
                Transfer {
                    from: self.creator.to_account_info(),
                    to: self.bounty_escrow.to_account_info(),
                },
            ),
            amount,
        )?;

        msg!("New Bounty Escrow: {}", self.bounty_escrow.key());

        Ok(())
    }
}

#[derive(Accounts)]
pub struct LoadMember<'info> {
    #[account(
        mut,
        address = bounty_escrow.creator_pubkey,
    )]
    pub authority: Signer<'info>,

    /// CHECKED: dev-member is stored
    pub member: UncheckedAccount<'info>,

    #[account(
        mut,
        constraint = bounty_escrow.is_loadable(),
    )]
    pub bounty_escrow: Box<Account<'info, BountyEscrow>>,
}

impl<'info> LoadMember<'info> {
    pub fn load_member(&mut self) -> Result<()> {
        self.bounty_escrow.load_member(self.member.key());

        Ok(())
    }
}

const BOUNTY_ESCROW_SEED: &str = "bounty-escrow";

pub const DISCRIMINATOR: usize = 8;
pub const BYTE: usize = 1;
pub const U_16: usize = 2;
pub const U_64: usize = 8;

// BountyEscrow | BountyVault
#[account]
pub struct BountyEscrow {
    // authority
    pub creator_pubkey: Pubkey,
    pub member_total: u16,
    pub escrow_balance: u64,
    pub max_reward: u64,

    pub title: String,
    pub allowed_devs: Vec<AllowedDev>,
}

impl BountyEscrow {
    const LEN: usize =
        DISCRIMINATOR + PUBKEY_BYTES + U_16 + U_64 + U_64 + BountyEscrow::MAX_TITLE_LEN;
    const MAX_TITLE_LEN: usize = 256;

    pub fn size(member_total: usize) -> usize {
        BountyEscrow::LEN + member_total * AllowedDev::LEN
    }

    pub fn init(&mut self, creator: Pubkey, title: String, member_total: u16, amount: u64) {
        self.creator_pubkey = creator;
        self.title = title;
        self.member_total = member_total;
        self.max_reward = amount / member_total as u64;

        self.escrow_balance = amount;
    }

    pub fn load_member(&mut self, member: Pubkey) {
        self.allowed_devs.push(AllowedDev {
            dev_pubkey: member,
            reward_paid: 0,
        });

        msg!("Dev-Member Loaded: {}", member);
    }

    pub fn is_loadable(&self) -> bool {
        self.allowed_devs.len() != self.member_total as usize
    }
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct AllowedDev {
    pub dev_pubkey: Pubkey,
    pub reward_paid: u64,
}

impl AllowedDev {
    const LEN: usize = PUBKEY_BYTES + U_64;
}
