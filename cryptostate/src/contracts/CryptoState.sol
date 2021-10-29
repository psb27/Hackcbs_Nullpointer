// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
pragma solidity >=0.4.22 <0.9.0;

contract CryptoState is ERC721, Ownable, ReentrancyGuard {
    string public nameOf = "Govt of India  Cryptostate  Poratal";

    // this is contract's token collection name
    string public collectionName;
    // this is the contract's token symbol
    string public collectionNameSymbol;

    // total number of collection that to be created
    Counters.Counter private cryptoStateCouter;
    //listing price
    uint256 listingPrice = 0.1 ether;

     struct CryptoState {
        uint256 tokenId;
        string tokenName;
        string tokenURI;
        address payable mintedBy;
        address payable currentOwner;
        address payable perviousOwner;
        uint256 price;
        bool forSale;
        string placeAddress;
    }
       event CryptoStateItemCreate(
        uint256 tokenId,
        string tokenName,
        string tokenURI,
        address payable mintedBy,
        address payable currentowner,
        address payable oldowenr,
        uint256 price
    );
      // map cryptoStata's token id to cryptostate
    mapping(uint256 => CryptoState) public allCryptostate;
    // token validation
    mapping(string => bool) private tokenNameExists;
    //check if the token URI exists
    mapping(string => bool) private tokenURIExists;

    constructor() ERC721("CryptoState", "IND") {
        collectionName = name();
        collectionNameSymbol = symbol();
    }

    // create new cryptoState 
    // creation
    function mintCryptostate (
         string memory _name,
        string memory _tokenURI,
        uint256 _price,
        string memory _placeAddress,
        address _owner,
        bool _forSell
    ) public payable onlyOwner nonReentrant{
          // address should to be valide
        require(msg.sender != address(0));
        // price must be grater then 0
        require(_price > 0, "Price must be at least 1 wei");
        // listing price should to be equal
        require(
            msg.value >= listingPrice,
            "Price must be equal to listing price"
        );

        //token URI must be uniqe
        require(!tokenURIExists[_tokenURI]);
        // token name must be uniqe
        require(!tokenNameExists[_name]);
        // increament the counter of cryptostate
        cryptoStateCouter.increment();
        //getting the current count
        uint256 tokenId = cryptoStateCouter.current();
        // mint the token
        _mint(_owner, tokenId);
        // set token URI (bind token id with the passed in token URI)
        // _setTokenURI(tokenId, _tokenURI);
        tokenURIExists[_tokenURI] = true;
        tokenNameExists[_name] = true;
        // creat a new crypto state (struct) and pass in new values
        CryptoState memory newCryptoState = CryptoState(
            tokenId,
            _name,
            _tokenURI,
            payable(msg.sender),
            payable(_owner),
            payable(address(0)),
            _price,
            _forSell,
            _placeAddress
        );
        // adding to the allCrypto state array
        allCryptostate[tokenId] = newCryptoState;
        // emit event
        emit CryptoStateItemCreate(
            tokenId,
            _name,
            _tokenURI,
            payable(msg.sender),
            payable(_owner),
            payable(address(0)),
            _price
        );
    }
}
