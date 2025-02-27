import { models } from "@b/db";
import { createError } from "@b/utils/error";

export async function updatePrivateLedger(
  walletId: string,
  index: number,
  currency: string,
  chain: string,
  amount: number,
  transaction?: any // Optional transaction parameter
): Promise<void> {
  const networkEnvVar = `${chain.toUpperCase()}_NETWORK`;
  const network = process.env[networkEnvVar];

  if (!network) {
    throw createError(
      400,
      `Network environment variable for ${chain} is not set`
    );
  }

  const existingLedger = await models.ecosystemPrivateLedger.findOne({
    where: {
      walletId,
      index,
      currency,
      chain,
      network,
    },
    ...(transaction && { transaction }), // Include transaction if provided
  });

  if (existingLedger) {
    await models.ecosystemPrivateLedger.update(
      {
        offchainDifference: existingLedger.offchainDifference + amount,
      },
      {
        where: {
          walletId,
          index,
          currency,
          chain,
          network,
        },
        ...(transaction && { transaction }), // Include transaction if provided
      }
    );
  } else {
    await models.ecosystemPrivateLedger.create(
      {
        walletId,
        index,
        currency,
        chain,
        offchainDifference: amount,
        network,
      },
      transaction ? { transaction } : undefined
    ); // Include transaction if provided
  }
}
