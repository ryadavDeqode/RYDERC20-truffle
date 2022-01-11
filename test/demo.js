const RYDERC20 = artifacts.require('RYDERC20');

const {expect} = require('chai');

const {BN,constants, expectEvent, expectRevert} = require('@openzeppelin/test-helpers');

const {ZERO_ADDRESS} = constants;




contract('RYDERC20', (accounts) => {

    const [recipient] = accounts;

    const name = 'testToken';
    const symbol = 'RYD';
    const initialSupply = new BN(200);
    const decimal = 18;

    beforeEach(async () => {
        this.token = await RYDERC20.new(initialSupply,name,symbol);
    })


    it('has a name', async () => {
        expect(await this.token.name_()).to.equal(name);
    });


    // have a symbol?
    it('has a symbol', async () => {
        expect(await this.token.symbol_()).to.equal(symbol);
    })

    // have 18 decimals

    it('has 18 decimals', async () => {
        expect(await this.token.decimals_()).to.be.bignumber.equal('18');
    })



    it('owner should not be a zero address', async () => {
        const demo = await RYDERC20.deployed();
        let add = await demo.returnOwnerAddress();

        assert(add != ZERO_ADDRESS);

        // expect(await this.token.returnOwnerAddress()).to.notequal(ZERO_ADDRESS);
    });

    it('spender should not be a zero address', async () => {
        const demo = await RYDERC20.deployed();
        let add = await demo.returnSpenderAddress();

        assert(add != ZERO_ADDRESS);
    });



})