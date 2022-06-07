// address.module.js
export const FETCH_ADDRESS = 'fetchAddress'
export const GET_USER_ADDRESS = 'getUserAddress'
export const CREATE_USER_ADDRESS = 'createUserAddress'
export const EDIT_USER_ADDRESS = 'editUserAddress'
export const DELETE_USER_ADDRESS = 'deleteUserAddress'
export const SET_DEFAULT_USER_ADDRESS = 'setDefaultUserAddress'
export const GET_SHIPPING_ADDRESS = 'getShippingAddress'
export const CREATE_SHIPPING_ADDRESS = 'createShippingAddress'
export const EDIT_SHIPPING_ADDRESS = 'editShippingAddress'
export const DELETE_SHIPPING_ADDRESS = 'deleteShippingAddress'

// auth.module.js
export const LOGIN = 'login'
export const LOGIN_TOKEN = 'loginToken'
export const REFRESH_TOKEN = 'refreshToken'
export const LOGOUT = 'logout'
export const FETCH_PROFILE = 'fetchProfile'
export const FETCH_TRUECARD = 'fetchTrueCard'

// balance.module.js
export const GET_BALANCE = 'getBalance'

// cart.module.js
export const GENERATE_CART = 'generateCart'
export const FETCH_CART = 'fetchCart'
export const FETCH_PRIVILEGE_CART = 'fetchPrivilegeCart'
export const UPDATE_CART = 'updateCart'
export const POST_UPDATE_CART = 'postUpdateCart'
export const DELETE_CART = 'deleteCart'
export const UPDATE_ENT_PACK = 'updateEntPack'

// placeorder.module.js
export const SET_PLACE_ORDER = 'setPlaceOrder'
export const SET_MNP = 'setMnp'
export const CREATE_PLACEORDER = 'createPlaceorder'
export const CREATE_PRE_EKYC_PLACEORDER = 'createPreEkycPlaceOrder'
export const CREATE_ENT_PACK_PLACEORDER = 'createEntPackPlaceorder'
export const CREATE_PRE2POST_PLACEORDER = 'createPre2postPlaceorder'
export const FETCH_PRE2POST_PLACEORDER = 'fetchPre2postPlaceorder'
export const CREATE_PLACEORDER_OFFLINE = 'createPlaceorderOffline'
export const OFFLINE_THANK_YOU = 'offlineThankYou'
export const SET_CREDIT_CARD_DATA = 'setCreditCardData'

// products.module.js
export const FETCH_PRODUCTS = 'fetchProducts'
export const FETCH_PRODUCT = 'fetchProduct'
export const FETCH_PRODUCT_INFO = 'fetchProductInfo'
export const FETCH_PRODUCT_INFO_DEMO = 'fetchProductInfoDemo'
export const FETCH_PRODUCT_STATUS = 'fetchProductStatus'
export const FETCH_PRODUCT_VERIFY_ESIM = 'fetchProductVerifyEsim'

// tracking.module.js
export const FETCH_TRACKING = 'fetchTracking'
export const FETCH_ORDER_HISTORY = 'fetchOrderHistory'
export const FETCH_TRACKING_SUCCESS = 'fetchTrackingSuccess'
export const FETCH_PDF = 'fetchPdf'
export const ORDER_HISTORY = 'orderHistory'
export const UPDATE_LOG = 'updateLog'
export const FETCH_QR_CODE = 'fetchQrCode'

// verify.module.js
export const VERIFY = 'verify'
export const BUNDLE_CAMPAIGNS_VERIFY = 'bundleCampaignsVerify'
export const SIM_ACTIVATION_VERIFY = 'simActivationVerify'
export const PAYSMOOTH_VERIFY = 'paysmoothVerify'
export const FETCH_OTP = 'fetchOtp'
export const UPLOAD_EKYC = 'uploadEkyc'
export const UPLOAD_EKYC_VHORA = 'updateEkycVhora'
export const GET_TOL_LIST = 'getTolList'
export const ACTIVATE_INSTANT_SIM = 'activeInstantSim'
export const CREATE_INSTANT_SIM = 'createInstantSim'
export const SUBMIT_INSTANT_SIM = 'submitInstantSim'

// config.module.js
export const FETCH_VERIFY_CONFIG = 'fetchVerifyConfig'
export const FETCH_SHOP_CONFIG = 'fetchShopConfig'

// postpaid.module.js
export const FETCH_POSTPAID = 'fetchPostpaid'
export const FETCH_PACKAGES = 'fetchPackages'
export const FETCH_PACKAGE = 'fetchPackage'
export const FETCH_PACKAGE_DEMO = 'fetchPackageDemo'
export const SEARCH_NUMBER = 'searchNumber'
export const CHECK_NUMBER = 'checkNumber'
export const FETCH_NUMBER = 'fetchNumber'
export const FETCH_HOROSCOPES = 'fetchHoroscopes'
export const HOLD_NUMBER = 'holdNumber'
export const FETCH_PRICE_PLAN = 'fetchPricePlan'
export const FETCH_NUMBER_PATTERN = 'fetchNumberPattern'
export const FETCH_LUCKY9999_CONFIG = 'fetchLucky9999Config'
export const FECTH_POSTPAID_BANNER = 'fecthPostpaidBanner'
export const FECTH_PACKAGES_LIST = 'fecthPackagesList'

// vlearn.module.js
export const FETCH_UNIVERSITY = 'fetchUniversity'
export const VERIFY_VLEARN = 'verifyVlearn'

// store.module.js
export const FETCH_STORE_BANNER = 'fetchStoreBanner'
export const FETCH_STORE_CONTENT = 'fetchStoreContent'
export const FETCH_STORE_FILTER = 'fetchStoreFilter'
export const SEARCH_STORE = 'searchStore'
export const SEARCH_STORE_SLUG = 'searchStoreSlug'
export const COMMON_METADATA_STORE = 'commonMetaDataStore'
export const VERIFY_PRODUCT_DATA = 'verifyProductData'
export const VERIFY_PRICE_PLANS_DATA = 'verifyPricePlansData'
export const VERIFY_SELECTED_PRICE_PLAN_DATA = 'verifySelectedPricePlanData'
export const VERIFY_MOBILE_NUMBER_DATA = 'verifyMobileNumberData'
export const VERIFY_RESULT_DATA = 'verifyResultData'
export const FETCH_PARTNERS = 'fetchParners'

// bundle.module.js
export const UPDATE_BUNDLE_CART = 'updateBundleCart'
export const UPDATE_POSTPAID_CART = 'updatePostpaidCart'

// clm.module.js
export const VERIFY_OTP = 'verifyOTP'
export const VERIFY_OTP_MOBILE_ONLY = 'VERIFY_OTP_MOBILE_ONLY'
export const VERIFY_CLM_VAS = 'verifyClmVas'
export const GET_BENEFIT_ON_TOP = 'GET_BENEFIT_ON_TOP'
export const GET_BENEFIT_ON_TOP_DEMO = 'GET_BENEFIT_ON_TOP_DEMO'
export const GET_CURRENT_PACKAGE = 'getCurrentPackage'
export const GET_CURRENT_PACKAGE_DEMO = 'getCurrentPackageDemo'
export const GET_LIST_PACKAGE = 'getListPackage'
export const GET_LIST_PACKAGE_DEMO = 'getListPackageDemo'
export const GET_VAS_LIST_PACKAGE = 'getVasListPackage'
export const GET_VAS_LIST_PACKAGE_DEMO = 'getVasListPackageDemo'
export const POST_CLM_VAS_CONFIRM_PACKAGE = 'postClmVasConfirmPackage'
export const ORDER_NEW_PACKAGE = 'orderNewPackage'
export const POST_CLM_SUCCESS = 'postCLMSuccess'
export const POST_CLM_CALLBACK = 'postClmCallback'
export const UPDATE_CLM_CAMP_ID = 'updateClmCampId'
export const UPDATE_CLM_MOBILE_NO = 'updateClmMobileNo'
export const GET_INSTANT_BENEFIT = 'GET_INSTANT_BENEFIT'

// trueonline.module.js
export const FETCH_TOL_PRODUCTS = 'fetchTolProducts'
export const FETCH_TOL_PRODUCTS_DEMO = 'fetchTolProductsDemo'
export const FETCH_TOL_PRODUCT = 'fetchTolProduct'
export const FETCH_TOL_PRODUCT_DEMO = 'fetchTolProductDemo'
export const FETCH_TOL_ADDRESS = 'fetchTolAddress'
export const FETCH_TOL_TIMESLOT = 'fetchTolTimeslot'
export const TOL_REGISTER = 'tolRegister'
export const FETCH_TOL_APPOINTMENT = 'fetchTolAppointment'
export const FETCH_TOL_OTP_STATUS = 'fetchTolOtpStatus'
export const FETCH_TOL_NEW_TIMESLOT = 'fetchTolNewTimeslot'
export const UPDATE_TOL_TIMESLOT = 'updateTolTimeslot'

// mnp.module.js
export const CHECK_MNP_OTP = 'checkMnpOtp'
export const CHECK_MNP_PIN = 'checkMnpPin'
export const CHECK_MNP_INFO = 'checkMnpInfo'
export const CREATE_MNP_PLACEORDER = 'createMnpPlaceorder'
export const HOLD_MNP_RANDOM_NUMBER = 'holdMnpRandomNumber'

// ekyc.module.js
export const CREATE_NEW_EKYC = 'createNewEkyc'
export const FETCH_EKYC_STATUS = 'fetchEkycStatus'

// omise.module.js
export const GET_TOGGLE_OMISE = 'getToggleOmise'
export const FETCH_PRE_TO_POST_EKYC = 'fetchPreToPostEkyc'

// sevenstore.module.js
export const FETCH_NEAR_ME_SEVEN_STORE = 'fetchNearMeSevenStore'

// paymentmethods.module.js
export const GET_PAYMENT_METHODS = 'getPaymentMethods'

// vhora.module.js
export const REQUEST_VHORA_OTP = 'requestVhoraOtp'
export const VERIFY_VHORA = 'verifyVhora'
export const POST_VHORA_PERSONALIZE_FUNTONG = 'postVhoraPersonalizeFuntong'
export const POST_VHORA_MOBILE = 'postVhoraMobile'
export const POST_VHORA_ZODIAC_MOBILE = 'postVhoraZodiacMobile'
export const FETCH_FORTUNE_FUNTONG = 'getFortuneFuntong'
export const POST_VHORA_FUNTONG = 'postVhoraFuntong'
export const POST_VHORA_RESEND_EMAIL = 'postVhoraResendEmail'
export const POST_PROPHECY = 'postProphecy'

// vhoraoffline.module.js
export const FETCH_OFFLINE_AUTHENTICATION = 'fetchOfflineAuthentication'
export const FETCH_OFFLINE_DEALER_INFO = 'fetchOfflineDealerInfo'
export const VERIFY_SIM_OFFLINE = 'verifySimOffline'
export const FETCH_OFFLINE_CHANNEL = 'fetchOfflineChannel'

// event.module.js
export const FETCH_EVENT_ORDER = 'fetchEventOrder'
export const FETCH_C_CAMPAIGN = 'fetchCCampaign'
export const FETCH_FLASHSALE = 'fetchFlashsale'

// seller.module.js
export const SEND_SMS = 'sendSMS'
export const SALE_SHOP_DATA = 'saleShopData'
export const SHOP_CONFIG_DATA = 'shopConfigData'
export const SHOP_CONFIG_ALIAS = 'shopConfigAlias'
export const CREATE_QR = 'createQR'
export const VALIDATE_SHOP_CODE = 'validateShopCode'

// wishlist.module.js
export const GET_WISHLIST = 'getWishlist'
export const ADD_WISHLIST = 'addWishlist'
export const DELETE_WISHLIST = 'deleteWishlist'

// profile.module.js
export const UPDATE_PROFILE = 'updateProfile'

// lva.module.js
export const FETCH_CMS_CONTENT = 'fetchCMSContent'
export const FETCH_LVA_PRODUCT_LIST = 'fetchLvaProductList'
export const FECTH_LVA_POP_UP_ADVERTISEMENT = 'fetchLvaPopupAdvertisement'
export const FETCH_PARTNER_CONTENT = 'fetchPartnerContent'
export const FETCH_ALL_CONTENT = 'fetchAllContent'

// headerbar.modile.js
export const FETCH_HEADER_BAR = 'fetchHeaderBar'
export const FETCH_MIDDLE_BAR = 'fetchMiddleBar'
export const FETCH_TOP_BAR = 'fetchTopBar'

// search.module.js
export const GET_HISTORY_SEARCH = 'getHistorySearch'
export const CLEAR_HISTORY_SEARCH = 'clearHistorySearch'
export const GET_SEARCH_SUGGEST = 'getSearchSuggest'
export const SET_HISTORY_SEARCH = 'setHistorySearch'

// pre2post module.js
export const FETCH_Q_A_CONTENT = 'fetchQAContent'