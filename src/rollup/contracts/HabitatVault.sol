// SPDX-License-Identifier: MPL-2.0
pragma solidity >=0.6.2;

import './HabitatBase.sol';

/// @notice A Vault holds assets with a custom (contract) condition to unlock them.
contract HabitatVault is HabitatBase {
  event VaultCreated(bytes32 indexed communityId, address indexed condition, address vaultAddress, string metadata);

  /// @dev Creates a Habitat Vault for a Community.
  function onCreateVault (address msgSender, uint256 nonce, bytes32 communityId, address condition, string calldata metadata) external {
    HabitatBase._commonChecks();
    HabitatBase._checkUpdateNonce(msgSender, nonce);

    address vaultAddress;
    assembly {
      mstore(0, communityId)
      mstore (32, condition)
      vaultAddress := shr(96, keccak256(0, 64))
    }

    require(tokenOfCommunity[communityId] != address(0));
    // xxx:
    // save
    // vaultsOfCommunity[communityId] = vaultAddress;
    //
    // check if `condition` is activated for `communityId`

    emit VaultCreated(communityId, condition, vaultAddress, metadata);
  }
}