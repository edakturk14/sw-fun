'use client'

import { useAccount, useDisconnect } from 'wagmi'
import { BlueCreateWalletButton } from './components/BlueCreateWalletButton';


function App() {
  const account = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <>
      <div>

        <h2>Account</h2>
        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status != 'connected' && <BlueCreateWalletButton />}

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}

      </div>
    </>
  )
}

export default App
