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
  it("putting state on Cryptostate", async () => {
    let listingPrice = await cryptostate.getListingPrice()
    listingPrice = listingPrice.toString();
    const created = await cryptostate.mintCryptoState("goswami  Niwas",
    "agiri5375@gmai.com",
    100,
    "city Bhopal Mp 456333",
    "0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0",
    1,{value:listingPrice}
    );
console.log(created)
  });
  })
