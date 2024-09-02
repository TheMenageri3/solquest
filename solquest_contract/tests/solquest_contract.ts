import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SolquestContract } from "../target/types/solquest_contract";

describe("solquest_contract", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const providor = anchor.getProvider()

  const program = anchor.workspace.SolquestContract as Program<SolquestContract>;


  const creator = anchor.web3.Keypair.generate()

  before(async () => {
    const sig = await providor.connection
      .requestAirdrop(creator.publicKey, 1_000_000 * anchor.web3.LAMPORTS_PER_SOL)

    await providor.connection.confirmTransaction(sig)
  })

  it("Create Bounty Escrow!", async () => {

    await program.methods.createBounty(
      "cuid",
      "title string of bounty!",
      20,
      new anchor.BN(1_000_000_000)
    )
      .accounts({
        creator: creator.publicKey,
      })
      .signers([creator])
      .rpc();

  });

  it("Load Member!", async () => {

    const [bountyEscrow] = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from("cuid"),
        creator.publicKey.toBuffer(),
        Buffer.from("bounty-escrow")
      ],
      program.programId
    )

    await program.methods.loadMember()
      .accounts({
        authority: creator.publicKey,
        member: anchor.web3.Keypair.generate().publicKey,
        bountyEscrow
      })
      .signers([creator])
      .rpc();

  });

});
