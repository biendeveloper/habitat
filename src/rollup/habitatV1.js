export default {
  types: {
    EIP712Domain: [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
    ],
    // Transactions that can be replayed need nonces.
    // Other transaction types revert if replayed.
    TransferToken: [
      { name: 'nonce', 'type': 'uint256' },
      { name: 'token', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    ExitToken: [
      { name: 'nonce', 'type': 'uint256' },
      { name: 'token', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    ClaimUsername: [
      { name: 'nonce', 'type': 'uint256' },
      { name: 'shortString', type: 'bytes32' },
    ],
    SetDelegate: [
      { name: 'nonce', 'type': 'uint256' },
      { name: 'to', type: 'address' },
    ],
    // community related
    CreateCommunity: [
      { name: 'nonce', 'type': 'uint256' },
      { name: 'governanceToken', type: 'address' },
      { name: 'metadata', type: 'string' },
    ],
    CreateVault: [
      { name: 'nonce', 'type': 'uint256' },
      { name: 'communityId', type: 'bytes32' },
      { name: 'condition', type: 'address' },
      { name: 'metadata', type: 'string' },
    ],
    SubmitModule: [
      // xxx: args
      { name: 'nonce', 'type': 'uint256' },
      { name: 'src', type: 'address' },
    ],
    ActivateModule: [
      { name: 'nonce', 'type': 'uint256' },
      { name: 'communityId', type: 'bytes32' },
      { name: 'condition', type: 'address' },
    ],
    // voting related
    CreateProposal: [
      { name: 'nonce', 'type': 'uint256' },
      { name: 'startDate', 'type': 'uint256' },
      { name: 'vault', type: 'address' },
      { name: 'title', type: 'string' },
      { name: 'actions', type: 'bytes' },
    ],
    VoteOnProposal: [
      // xxx add account because of delegate?
      { name: 'nonce', 'type': 'uint256' },
      { name: 'proposalId', type: 'bytes32' },
      { name: 'signalStrength', type: 'uint8' },
      { name: 'shares', type: 'uint256' },
      { name: 'timestamp', type: 'uint256' },
    ],
    ProcessProposal: [
      { name: 'proposalIndex', type: 'uint256' },
    ],
  },
  domain: {
    name: 'Habitat V1',
    version: '1',
  },
  primaryTypes: [
    'TransferToken',
    'ExitToken',
    'ClaimUsername',
    'SetDelegate',
    'CreateCommunity',
    'CreateVault',
    'SubmitModule',
    'ActivateModule',
    'CreateProposal',
    'VoteOnProposal',
    'ProcessProposal',
  ],
}