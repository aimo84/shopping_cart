export function getCLMQueries (queries) {
  if (!queries.length) return false
  const parameter = queries.find((key) => /\bcampid\b/gi.test(key))
  if (!parameter) return false
  return parameter
}

export function getProductQueries (queries) {
  if (!queries.length) return false
  const parameter = queries.find((key) => /\bproductid\b/gi.test(key))
  if (!parameter) return false
  return parameter
}

export function getProductsQueries (queries) {
  if (!queries.length) return false
  const parameter = queries.find((key) => /\bproduct_id\b/gi.test(key))
  if (!parameter) return false
  return parameter
}

export function getMatcodeQueries (queries) {
  if (!queries.length) return false
  const parameter = queries.find((key) => /\bmatcode\b/gi.test(key))
  if (!parameter) return false
  return parameter
}

export function checkPointStatus (data) {
  if (data && data.status === 'active' && data.start_date && data.end_date) {
    const current = Date.now()
    const start = data.start_date.sec * 1000
    const end = data.end_date.sec * 1000
    if (start <= current && current <= end) return true
    return false
  }
  return false
}

export function computeBalance (value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function computePrice (value) {
  const price = Number.parseFloat(value).toFixed(2)
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function validateNumber (e) {
  const keyCode = e.keyCode ? e.keyCode : e.which
  const number = keyCode >= 48 && keyCode <= 57
  const keypad = keyCode >= 96 && keyCode <= 105
  const backspace = keyCode === 8 || keyCode === 46
  const arrow = keyCode >= 37 && keyCode <= 40
  if (number || keypad || backspace || arrow) {
    return true
  } else {
    e.preventDefault()
  }
}

const getEcommerceProductDimensions = (e) => {
  switch (e.product_type) {
    case 'pre_to_post': {
      return {
        dimension30: 'Switch to Postpaid',
        dimension31: '',
        dimension32: parseFloat(e.price - e.discount).toFixed(2),
        dimension33: `${e.title} เปลี่ยนเติมเงินเป็นรายเดือน พร้อมสมัครแพ็กเกจ ${e.existing_campaign.rc} ขึ้นไปชำระค่าบริการล่วงหน้า: ${parseFloat(e.advance_payment).toFixed(2)}฿`,
        metric2: parseFloat(e.advance_payment).toFixed(2)
      }
    }
    case 'device_mnp_bundle': {
      return {
        dimension30: 'Move to Us Online Exclusive',
        dimension31: '',
        dimension32: parseFloat(e.price - e.discount).toFixed(2),
        dimension33: `${e?.bundle?.name} ชำระค่าบริการล่วงหน้า: ${parseFloat(e.advance_payment).toFixed(2)}฿`,
        metric2: parseFloat(e.advance_payment).toFixed(2)
      }
    }
    case 'mnp_two_step': {
      return {
        dimension30: 'Move to Us',
        dimension31: 'ลูกค้าย้ายค่ายเบอร์เดิม พร้อมสมัครแพ็กเกจที่กำหนด ภายใน 30 วัน',
        dimension32: parseFloat(e.price - e.discount).toFixed(2),
        dimension33: `${e.title} ย้ายค่ายเบอร์เดิม พร้อมสมัครแพ็กเกจ ${e.existing_campaign.rc} ขึ้นไป ชำระค่าบริการล่วงหน้า: ${e.existing_campaign.advance_payment.toFixed(2)}฿`,
        metric2: parseFloat(e.advance_payment).toFixed(2)
      }
    }
    case 'mnp_one_step': {
      return {
        dimension30: 'Move to TrueMove H',
        dimension31: '',
        dimension32: parseFloat(e.price - e.discount).toFixed(2),
        dimension33: `${e.bundle.name} ชำระค่าบริการล่วงหน้า: ${parseFloat(e.advance_payment).toFixed(2)}฿`,
        metric2: parseFloat(e.advance_payment).toFixed(2)
      }
    }
    case 'device_bundle_prepaid': {
      return {
        dimension30: 'Device with Free Prepaid SIM',
        dimension32: parseFloat(e.price).toFixed(2),
        metric2: '0.00'
      }
    }
    case 'device_bundle_existing': {
      let dimension33 = ''
      const existing = e.existing_campaign
      const labels = {
        1: 'Only for True Move H Postpaid customers aged over 1 year',
        2: 'Only for True Move H Postpaid customers aged less then 3 months',
        3: 'For existing TMH customer with no contract, no advance payment, and apply for 5G Super Max Speed for iPhone package only'
      }
      if (existing.campaign_type === '3') {
        dimension33 = `${e.title} ลูกค้าปัจจุบัน พร้อมสมัครแพ็กเกจ ${existing.rc} ขึ้นไป ชำระค่าบริการล่วงหน้า: ${existing.advance_payment.toFixed(2)}฿`
      } else {
        dimension33 = `${e.title} ใช้หรือสมัครแพ็กเกจรายเดือน ${existing.rc} ขึ้นไป`
      }
      return {
        dimension30: 'Existing TrueMove H Postpaid',
        dimension31: labels[existing.campaign_type],
        dimension32: parseFloat(e.price - e.discount).toFixed(2),
        dimension33: dimension33,
        metric2: (existing.advance_payment || 0).toFixed(2)
      }
    }
    case 'device_bundle_new_customer': {
      return {
        dimension30: 'New Customer',
        dimension31: '',
        dimension32: parseFloat(e.price - e.discount).toFixed(2),
        dimension33: `${e.bundle.name} ชำระค่าบริการล่วงหน้า: ${parseFloat(e.advance_payment).toFixed(2)}฿`,
        metric2: parseFloat(e.advance_payment).toFixed(2)
      }
    }
    case 'product': {
      return {
        dimension30: 'Handset only',
        dimension31: '',
        dimension32: '',
        dimension33: '',
        metric2: '0.00'
      }
    }
    default: {
      return {}
    }
  }
}

const getEcommerceSimDimensions = (e) => {
  if (e.custom_category !== 'SIM') return {}
  const plan = e.postpaid && e.postpaid.meta && e.postpaid.meta.price_plan
  let result = {
    dimension9: e.product_type === 'prepaid' ? 'Prepaid SIM' : 'Postpaid SIM',
    dimension10: e.title,
    dimension11: plan ? plan.name : '',
    dimension12: plan ? parseFloat(plan.price).toFixed(2) : '',
    dimension22: '', // TODO: Package Download Speed
    dimension24: '', // TODO: Talk Time Allowance
    dimension25: '' // TODO: Mobile Internet Allowance
  }
  if (e.sim_meta && e.sim_meta[0].campaign_type === 'vhora') {
    const meta = e.sim_meta[0]
    result = {
      ...result,
      ...{
        dimension17: meta.birth_date,
        dimension18: meta.birth_time,
        dimension19: meta.timezone,
        dimension20: meta.berfuntong.group_title,
        dimension21: meta.berfuntong.subgroup_title,
        dimension40: meta.berfuntong.grade,
        dimension41: meta.number
      }
    }
  }
  return result
}

export function computeGtagProducts (cart, coupon = {}) {
  const products = Object.keys(cart).map((id) => {
    const e = cart[id]
    if (e.id.includes('-advancepayment')) return
    return {
      name: e.title,
      id: e.id,
      price: parseFloat(e.price).toFixed(2),
      category: e.custom_category === 'SIM' ? 'SIM' : 'device',
      brand: '',
      variant: e.sim_meta && Array.isArray(e.sim_meta) ? e.sim_meta[0].sim_type : e.color,
      quantity: e.quantity,
      dimension6: parseFloat(e.compare_at_price).toFixed(2),
      dimension7: parseFloat(e.price).toFixed(2),
      dimension8: '',
      dimension13: e.capacity || '',
      dimension14: e.status || true,
      ...getEcommerceProductDimensions(e),
      ...getEcommerceSimDimensions(e),
      ...coupon
    }
  })
  return products.filter((e) => e)
}

export function computeGtagProductLabel (products, item) {
  const inventory = products.inventories[item.id]
  let capacity = ''
  let color = ''
  if (products.options['ความจุ'] && inventory.options['ความจุ']) {
    capacity = products.options['ความจุ'][inventory.options['ความจุ']].name
  }
  if (products.options['สี'] && inventory.options['สี']) {
    color = products.options['สี'][inventory.options['สี']].name
  }
  if (capacity && color) return `${products.title}_${capacity}_${color}`
  return item.title
}

export function computeGtagProductDetail (products, item, isSim, type, isBuy, bundleAnalytics) {
  if (isSim) {
    const product = products.inventories[item.id]
    return {
      name: item.title,
      id: item.id,
      price: parseFloat(product.price).toFixed(2),
      category: 'SIM',
      variant: type === 'prepaid' ? 'Prepaid' : 'Postpaid',
      dimension6: parseFloat(product.compare_at_price).toFixed(2),
      dimension7: parseFloat(product.price).toFixed(2),
      dimension9: type === 'prepaid' ? 'Prepaid SIM' : 'Postpaid SIM',
      dimension10: '',
      dimension11: '',
      dimension12: '',
      dimension14: product.quantity > 0
    }
  } else {
    const inventory = products.inventories[item.id]
    let capacity = ''
    let color = ''
    if (products.options['ความจุ'] && inventory.options['ความจุ']) {
      capacity = products.options['ความจุ'][inventory.options['ความจุ']].name
    }
    if (products.options['สี'] && inventory.options['สี']) {
      color = products.options['สี'][inventory.options['สี']].name
    }
    let data = {
      name: products.title,
      id: products.id,
      price: parseFloat(inventory.price).toFixed(2),
      category: 'device',
      brand: '',
      variant: color,
      dimension6: parseFloat(inventory.compare_at_price).toFixed(2),
      dimension7: parseFloat(inventory.price).toFixed(2),
      dimension8: '',
      dimension13: capacity,
      dimension14: inventory.quantity > 0
    }
    if (bundleAnalytics) data = { ...data, ...bundleAnalytics }
    if (isBuy) {
      return { ...data, ...{ quantity: 1 } }
    }
    return data
  }
}

export function fetchCampaignWeomni () {
  try {
    const e = localStorage.getItem('truestore-campaign-weomni')
    const valid = /^([a-zA-Z0-9]{1,});(\d{13})?$/.test(e)
    if (!valid) throw new Error()
    const value = e.split(';')
    if (Date.now() > parseFloat(value[1])) throw new Error()
    return value[0]
  } catch {
    localStorage.removeItem('truestore-campaign-weomni')
  }
}

export function showPayLater (userData) {
  let eligible = false
  try {
    if (userData.pay_later_status.eligible === true && checkIsMobile()) {
      eligible = true
    }
  } catch {}
  return eligible
}

export function checkIsMobile () {
  const userAgent = global.navigator.userAgent || global.navigator.vendor
  if (/android/i.test(userAgent)) return true
  if (/iPhone/.test(userAgent) && !window.MSStream) return true
}

export function setCampaignWeomniQuery () {
  const campaign = new URL(location.href).searchParams.get('campaign')
  if (!campaign) return
  localStorage.setItem('truestore-campaign-weomni', `${campaign};${Date.now() + 6048e5}`)
}

export function clearLocalStorageOffline () {
  localStorage.removeItem('vhora-offline-data')
  localStorage.removeItem('vhora-authen-type')
  localStorage.removeItem('vhora-authen-data-dealer')
  localStorage.removeItem('vhora-authen-data-employee')
  localStorage.removeItem('vhora-authen-data-customer')
  localStorage.removeItem('tmvh_store_offline')
  localStorage.removeItem('web_view')
  localStorage.removeItem('vhora-offline-shop')
}

export function setLocalStorageWithExpire (key, value, lifeTime) {
  const now = new Date()
  const item = {
    value: value,
    expire: now.getTime() + lifeTime
  }
  localStorage.setItem(key, JSON.stringify(item))
}

export function getLocalStorageWithExpire (key) {
  const getItem = localStorage.getItem(key)
  if (!getItem) return

  const item = JSON.parse(getItem)
  const now = new Date()
  if (item.expire > now.getTime()) return item.value

  localStorage.removeItem(key)
  return null
}

export function checkAgentIE () {
  const ua = navigator.userAgent
  return ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1
}

export function clearLocalStoragePaymentSuccess () {
  window.localStorage.removeItem('agreement')
  window.localStorage.removeItem('cart-id')
  window.localStorage.removeItem('cart-v1')
  window.localStorage.removeItem('verify-form')
  window.localStorage.removeItem('verify-result')
  window.localStorage.removeItem('postpaid-ekyc')
  window.localStorage.removeItem('sim-meta')
  window.localStorage.removeItem('sim-meta-postpaid')
  window.localStorage.removeItem('postpaid-data')
  window.localStorage.removeItem('postpaid-sim-data')
  window.localStorage.removeItem('privilege-placeorder')
  window.localStorage.removeItem('family-black-verify-form')
  window.localStorage.removeItem('postpaid-ekyc-data')
  window.localStorage.removeItem('clm-upsell')
  window.localStorage.removeItem('truestore-campaign-weomni')
}

export function smoothScrollToElementInCommon (uniqueClassName, offsetTop) {
  const element = document.getElementsByClassName(uniqueClassName)[0]
  if (!element) return
  if (offsetTop === undefined) offsetTop = 0
  const headerElement = document.getElementsByTagName('HEADER')[0]
  let fixedHeaderOffset = 0
  if (headerElement) fixedHeaderOffset = window.getComputedStyle(headerElement).position === 'fixed' ? headerElement.offsetHeight : 0
  const offsetPos = getTotalOffsetTop(element) - fixedHeaderOffset - offsetTop
  window.scrollTo({ top: offsetPos, behavior: 'smooth' })
}

export function getTotalOffsetTop (element) {
  var totalOffsetTop = 0
  if (element?.offsetParent) {
    do {
      totalOffsetTop += element.offsetTop
    } while (element = element.offsetParent)
    return totalOffsetTop
  }
}
