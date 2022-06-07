import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth.module'
import products from './products.module'
import address from './address.module'
import placeorder from './placeorder.module'
import tracking from './tracking.module'
import cart from './cart.module'
import balance from './balance.module'
import verify from './verify.module'
import config from './config.module'
import postpaid from './postpaid.module'
import vlearn from './vlearn.module'
import store from './store.module'
import bundle from './bundle.module'
import clm from './clm.module'
import trueonline from './trueonline.module'
import mnp from './mnp.module'
import ekyc from './ekyc.module'
import omise from './omise.module'
import seller from './seller.module'
import sevenStore from './sevenstore.module'
import paymentmethods from './paymentmethods.module'
import vhora from './vhora.module'
import vhoraoffline from './vhoraoffline.module'
import eventOrder from './event.module'
import wishlist from './wishlist.module'
import lva from './lva.module'
import headerbar from './headerbar.module'
import search from './search.module'
import pre2post from './pre2post.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    products,
    address,
    placeorder,
    tracking,
    cart,
    balance,
    verify,
    config,
    postpaid,
    vlearn,
    store,
    bundle,
    clm,
    trueonline,
    mnp,
    ekyc,
    omise,
    sevenStore,
    paymentmethods,
    vhora,
    vhoraoffline,
    eventOrder,
    seller,
    wishlist,
    lva,
    headerbar,
    search,
    pre2post
  }
})
