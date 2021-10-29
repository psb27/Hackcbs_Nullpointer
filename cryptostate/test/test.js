const CryptoState = artifacts.require('./CryptoState.sol')


contract(CryptoState, ([deployer, author, tipper]) => {
  let cryptostate

  before(async () => {
    cryptostate = await CryptoState.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await cryptostate.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await cryptostate.nameOf()
      console.log(name)
      assert.equal(name, "Govt of India Cryptostate Poratal")
    })
  })
  })
