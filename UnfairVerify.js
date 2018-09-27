const eosecc = require('eosjs-ecc');
require('./FairnessVerify');

pvt = '5KeDunNN9mxqdaMjE5Mwnqr7mUhjJJiHFKKtLZtcgSHdvrCNhiT';
pub = 'EOS5MexJExCsLwm29DbSFcVFiTECGHJLoNLmSmsd118NAhRMcSqxF';
seed_hash = '40f2ba9b4bf84dbdb67be2300fd31cfddf5ff3c516676f3f7902fc3e113e46cc';

//Of course can pass
sig = eosecc.signHash(seed_hash, pvt);
console.log('sig: ', sig);
scripts.verifyFairness(sig, seed_hash);

//will pass
sig =
  'SIG_K1_KacE9oJFcdVu5E9PdsZkXeSGVcasoiXGy4cVVqbDcTsRwLNejHFMrNxWdPTn7cp5zS4kpe9yHTEcNj2kYvmZBamizYGfP6';
console.log('sig: ', sig);
scripts.verifyFairness(sig, seed_hash);

//pass again
sig =
  'SIG_K1_KZfJU7LE5NCV9eyEdUrEWar1Rj8VRpPg6Uxc2HKBjqC8iGL3HuaNx5DFrPnXmbDUKHePzoZYgC8Zgoux2RqM55eaP29Tjy';
console.log('sig: ', sig);
scripts.verifyFairness(sig, seed_hash);

//pass aagain
sig =
  'SIG_K1_KhfNuwMHFKdxUXRA65rDrkurxTVcT1DBYwehm4nCo8XwqLcrHU8cj8iLwHMpHCjVcU4wTtVGVd8iiS4xcVe6yckb6f8kjJ';
console.log('sig: ', sig);
scripts.verifyFairness(sig, seed_hash);

//pass aaagain
sig =
  'SIG_K1_KYNyQwWAB7vNQaCGNJJGHymuPRfwDEcB16Vtcy2yZekPDgyrBN47FrcEWvcSQdqqiXpSidR7BbqP2JpSg8NfXzqs2vXHv9';
console.log('sig: ', sig);
scripts.verifyFairness(sig, seed_hash);

//pass aaa.....again
//......
