
import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v0.31.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.90.0/testing/asserts.ts';

Clarinet.test({
    name: "list-item: can't list the same nft twice",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        let block = chain.mineBlock([
      /* 
             * Add transactions with: 
             * Tx.contractCall(...)
            */
        ]);
        assertEquals(block.receipts.length, 0);
        assertEquals(block.height, 2);

        block = chain.mineBlock([
            /* 
             * Add transactions with: 
             * Tx.contractCall(...)
            */
        ]);
        assertEquals(block.receipts.length, 0);
        assertEquals(block.height, 3);
    },
});
