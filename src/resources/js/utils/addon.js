import store from '@store'
import {
  UPDATE_ENT_PACK,
  UPDATE_LOG
} from '@store/actions.type'

export async function updateEntPack (matcode, query, product, hash, inventory = {}) {
  if (!query.token) return
  const data = {
    cart_hash: hash,
    product_id: product.id,
    inventory_id: inventory.id
  }
  if (inventory.nas) data.nas_code = inventory.nas
  if (matcode) {
    const packages = product.entertainment_packages
    if (packages.find((e) => e.matcode === matcode)) {
      data.matcode = matcode
    }
  }
  try {
    await store.dispatch(UPDATE_ENT_PACK, {
      tmvhAuth: query.token,
      data
    })
  } catch (e) {
    throw new Error('err-ent-pack')
  }
}

export function computeAddons (query, product) {
  const products = []
  if (query.accs) {
    const accessories = query.accs.split(',')
    if (product.only_one_accessory && accessories.length > 1) return products
    accessories.forEach((accessory) => {
      const accs = computeAddon(accessory, 'accessories', product)
      if (accs) products.push(accs)
    })
  }
  return products
}

export function computeAddon (matcode, key, product) {
  const addon = product[key].find((e) => e.matcode === matcode)
  return addon ? {
    product_id: addon.product_id,
    inventory_id: addon.inventory_id,
    quantity: 1,
    store_id: addon.store_id,
    section: addon.section || 'wemall',
    channel: 'tmh-website'
  } : false
}

export function loggerAddon (data) {
  try {
    const {
      type,
      event,
      status = '',
      productId = '',
      matcode = '',
      quantity = '',
      amount = '',
      discount = '',
      thaiId = '',
      circuitId = '',
      mobileNumber = '',
      tolProductData = [],
      tolPrice = '',
      tolInvoice = '',
      tolEntryFee = '',
      tolAddress = [],
      tolUserAddress = [],
      clmPackageData = [],
      addressData = [],
      clmPrice = '',
      selectedCampId = '',
      advancePayment = '',
      rcDiff = '',
      campName = '',
      clmName = '',
      vasCode = ''
    } = data

    const typhoonGroupType = localStorage.getItem('typhoon-group') || ''
    const campId = localStorage.getItem('clm-camp-id') || ''

    let log = ''

    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const UTM = queryString.includes('utm')
      ? [
          'utm_source',
          'utm_medium',
          'utm_campaign',
          'utm_id',
          'utm_term',
          'utm_content'
        ].map(key => `${key}=${urlParams.get(key)}`).join('&')
      : ''

    switch (type) {
      case 'TOL':
        log = [event, status, tolProductData.join(','), tolPrice, tolInvoice, tolEntryFee, tolAddress.join(','), tolUserAddress.join(','), campId, UTM].join('|')
        break
      case 'TOLVAS':
        log = [event, status, selectedCampId, vasCode, thaiId, circuitId, clmName, encodeURIComponent(clmPackageData.join(',')), UTM].join('|')
        break
      case 'TMVHVAS':
        log = [event, status, selectedCampId, clmPrice, mobileNumber, clmName, encodeURIComponent(clmPackageData.join(',')), UTM].join('|')
        break
      case 'UPPACK':
        log = [event, status, selectedCampId, thaiId, mobileNumber, encodeURIComponent(clmPackageData.join(',')), clmPrice, UTM].join('|')
        break
      default:
        log = [event, status, productId, matcode, quantity, amount, discount, advancePayment, rcDiff, campId, campName, typhoonGroupType, addressData.join(',') || mobileNumber, UTM].join('|')
        break
    }

    return store.dispatch(UPDATE_LOG, { data: log })
  } catch (e) {}
}