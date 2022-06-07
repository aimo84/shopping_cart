<template>
    <div class="store-container">
        <div class="qr-container">
            <loading-element v-if="loading" />
            <div class="content-section">
                <div class="payment-content">
                    <div class="qr-details-container">
                        <div v-if="showQR" class="qr-detail-container">
                            <div class="qr-detail-header">
                                PromptPay
                                <div class="arrow" />
                            </div>
                            <div class="qr-detail">                                
                                <div class="qr-image">
                                    <img :src="qrCode"/>
                                </div>
                                <div class="payment-ref">
                                    <span>{{ Content.ref_no[$i18n.locale] }}: {{ referenceCode }}</span>
                                </div>
                            </div>
                            <div class="qr-remark">
                                <div class="payment-info-text">
                                    <span>{{ Content.payment_info_1[$i18n.locale] }}</span>
                                </div>
                                <div class="payment-info-text">
                                    <span>{{ Content.payment_info_2[$i18n.locale] }}</span>
                                </div>
                            </div>
                        </div>
                        <div v-if="showSaveQR" class="qr-detail-container saved">
                            <div class="qr-detail">
                                <div class="saved-detail">
                                    <div class="success-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                            <path d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#fff" />
                                        </svg>
                                    </div>
                                    <span class="saved-text">
                                        {{ Content.title_saved_qr[$i18n.locale] }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="showQR" class="payment-details">
                        <div class="payment-details-container">
                            <div class="payment-detail-bank-info">
                                <div class="payment-info-bank-text">
                                    <span>{{ Content.payment_info_bank_1[$i18n.locale] }}</span>
                                </div>
                                <div class="payment-info-bank-text">
                                    <span>{{ Content.payment_info_bank_2[$i18n.locale] }}</span>
                                </div>
                            </div>
                            <div class="payment-detail">
                                <div class="bank-info-image">
                                    <img src="/images/qr/bank_infox2.png" />
                                </div>
                            </div>
                            <div class="payment-detail line-bottom">
                                <div class="payment-label">
                                    {{ Content.pay_to[$i18n.locale] }}
                                </div>
                                <div class="payment-info pay-to">
                                    <span>True Store</span>
                                </div>
                            </div>
                            <div class="payment-detail line-bottom pay-amount">
                                <div class="payment-label">
                                    {{ Content.pay_amount[$i18n.locale] }}
                                </div>
                                <div class="payment-info pay-amount">
                                    <div class="currency">
                                        {{ '฿' }}&nbsp;
                                    </div>
                                    <span class="amount">
                                        {{ computePrice(data.price).split('.')[0] }}
                                    </span>
                                    <span class="digit">
                                        {{ '.' + computePrice(data.price).split('.')[1] }}
                                    </span>
                                </div>
                            </div>
                            <div class="payment-detail line-bottom payment-expire">
                                <div class="payment-info payment-text-expire">
                                    {{ Content.expire_qr[$i18n.locale] }}&nbsp;
                                </div>
                                <div class="payment-info payment-date-expire">
                                    {{ generateExpireAt()}}
                                </div>
                            </div>
                            <div class="payment-detail btn-qr-download">
                                <div class="download-text-btn">
                                    <button-element class="red-bg-button btn-qr"
                                        @click="downloadQR(true)">
                                        {{ Content.download[$i18n.locale] }}
                                    </button-element>
                                </div>
                                <div class="download-text">
                                    <a href="javascript:void(0);" 
                                        :alt="referenceCode" 
                                        @click="downloadQR(false)">
                                        {{ Content.download[$i18n.locale] }} >
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="showSaveQR" class="how-to-containers-saved">
                        <div class="how-to-container saved">
                            <div class="how-to-content">
                                    <div class="how-to-header saved">
                                        {{ Content.how_to_pay_saved_header[$i18n.locale] }}
                                        <div class="slanted-container">
                                            <div class="slanted" />
                                        </div>        
                                    </div>
                                <div class="how-to-detail-container">
                                    <div class="how-to-detail">
                                        <div class="how-to-label">
                                            {{ '1. '}}
                                        </div>
                                        <div class="how-to-text">
                                            {{ Content.how_to_pay_saved_1[$i18n.locale] }}
                                        </div>
                                    </div>
                                    <div class="how-to-detail bank">
                                        <img src="/images/qr/bank_infox2.png" />
                                    </div>
                                    <div class="how-to-detail">
                                        <div class="how-to-label">
                                            {{ '2. '}}
                                        </div>
                                        <div class="how-to-text">
                                            {{ Content.how_to_pay_saved_2[$i18n.locale] }}
                                        </div>
                                    </div>
                                    <div class="how-to-detail">
                                        <div class="how-to-label">
                                            {{ '3. '}}
                                        </div>
                                        <div class="how-to-text">
                                            {{ Content.how_to_pay_saved_3[$i18n.locale] }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="download-text-btn saved">
                            <button-element class="red-bg-button btn-qr"
                                @click="goLanding">
                                {{ Content.btn_saved[$i18n.locale] }}
                            </button-element>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
        <div v-if="showQR" class="suggestion-container">
            <div class="suggestion-detail red">
                {{ Content.suggestion_1[$i18n.locale] }}
            </div>
            <div class="suggestion-detail">
                {{ Content.suggestion_2[$i18n.locale] }}
            </div>
        </div>
        <div v-if="showQR" class="how-to-container">
            <div class="how-to-content">
                    <div class="how-to-header">
                        {{ Content.how_to_pay_header[$i18n.locale] }}
                        <div class="slanted-container">
                            <div class="slanted" />
                        </div>        
                    </div>
                <div class="how-to-detail-container">
                    <div class="how-to-detail header">
                        {{ Content.how_to_pay_title[$i18n.locale] }}
                    </div>
                    <div class="how-to-detail">
                        <div class="how-to-label">
                            {{ '1. '}}
                        </div>
                        <div class="how-to-text">
                            {{ Content.how_to_pay_detail_1[$i18n.locale] }}
                        </div>
                    </div>
                    <div class="how-to-detail bank">
                        <img src="/images/qr/bank_infox2.png" />
                    </div>
                    <div class="how-to-detail">
                        <div class="how-to-label">
                            {{ '2. '}}
                        </div>
                        <div class="how-to-text">
                            {{ Content.how_to_pay_detail_2[$i18n.locale] }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showQR" class="btn-previous">
            <span @click="historyBack()">
                {{ Content.back_to_payment[$i18n.locale] }}
            </span>
        </div>

    </div>    
</template>

<script>
    import Loading from '@components/loading'
    import Content from './content.json'
    import Button from '@components/button'
    import {
        FETCH_TRACKING_SUCCESS,
        FETCH_EVENT_ORDER,
        FETCH_QR_CODE,
    } from '@store/actions.type'
    import { 
        computePrice,
        clearLocalStoragePaymentSuccess
    } from '@utils/common'

    export default {
        components: {
            'button-element': Button,
            'loading-element': Loading
        },
        data: () => ({
            Content,
            loading: true,
            data: {},
            qrCode: null,
            expiresAt: null,
            referenceCode: null,
            saved: false,
            statusNotsuccess: ['FAILED', 'EXPIRED'],
            orderNotsuccess: ['002', '003'],
            statusSuccess: ['SUCCESS'],
            intervalId: null,
        }),
        async mounted() {
            try {
                const code = this.$route.query.order_code
                if (!code) {
                    throw new Error('order_code not found')
                    return   
                }

                const order = await this.$store.dispatch(FETCH_TRACKING_SUCCESS, code)
                this.data   = order.body.data?.[0]

                if (!this.data) {
                    throw new Error('data not found')
                    return
                }
                if (this.data.payment_method !== 'OMISEPROMPTPAY') {
                    throw new Error('Invalid payment_method')
                    return
                }
                if (this.statusNotsuccess.includes(this.data.omise_status)) {
                    this.goExpire()
                    return   
                }
                if (this.orderNotsuccess.includes(this.data.status)) {
                    this.goExpire()
                    return
                }
                if (this.statusSuccess.includes(this.data.omise_status)) {
                    this.goLanding()
                    return
                }

                let qrCode = this.data.order_omise.qr_code
                if (!qrCode) {
                    throw new Error('qr_code not found')
                    return
                }
                
                let dataQR = await this.$store.dispatch(FETCH_QR_CODE, {
                        url: qrCode
                    });
                this.qrCode = await this.svgStringToImage(
                    dataQR.replace('<svg', '<svg width="498" height="707"')
                    , 498, 707, 'png');

                if (this.qrCode) {
                    this.expiresAt     = this.data.order_omise.expires_at
                    this.referenceCode = this.data.order_omise.charge_id
                    this.loading       = false
                    this.triggerPaymentStatus();
                }
            } catch (e) {
                this.goExpire()
            }
            
        },
        computed: {
            showQR() {
                return !this.loading && !this.saved
            },
            showSaveQR() {
                return !this.loading && this.saved
            }
        },
        methods: {
            computePrice,
            triggerPaymentStatus() {
                this.intervalId = setInterval(async () => {
                    const now    = new Date().getTime()
                    const expire = new Date(this.expiresAt.replace(/\s/, 'T')).getTime() 

                    if (now > expire) {
                        this.goExpire()
                    }

                    const eventOrder = await this.$store.dispatch(FETCH_EVENT_ORDER, 
                        {
                            order_code: this.$route.query.order_code,
                            v: now
                        }
                    );
                    let omiseStatus = eventOrder.data?.status;

                    if (omiseStatus === true) {
                        this.goPaymentSuccess()
                    } else if (omiseStatus === false){
                        this.goExpire()
                    }

                }, 5000);
            },
            generateExpireAt() {
                const dateFormat = this.dateObj();
                let dateExpire   = '';

                dateExpire = `${dateFormat.day}/${dateFormat.month}/${dateFormat.year}, ${dateFormat.time}`;

                if (this.$i18n.locale.toLowerCase() == 'th') {
                    dateExpire = dateExpire + ` น.`
                } 

                return '(' + dateExpire + ')';
            },
            dateObj () {
                let date         = new Date(this.expiresAt.replace(/\s/, 'T'))
                let hours        = date.getHours();
                const dateExpire = this.expiresAt.split(' ')[0]
                let time         = this.expiresAt.split(' ')[1]
                time             = time.split(':')
                time             = `${hours}.${time[1]}`
                let year         = Number(dateExpire.split('-')[0])
                let month        = dateExpire.split('-')[1]
                const day        = dateExpire.split('-')[2]

                if (this.$i18n.locale.toLowerCase() == 'th') year = parseInt(year + 543)

                return { 
                    year, 
                    month, 
                    day,
                    time
                }
            },
            async downloadQR(option = false) {
                try {
                    if (option) this.loading = true;

                    let data           = this.qrCode;
                    const filename     = `${this.referenceCode}.png`
                    const link         = document.createElement('a')
                    link.href          = data
                    link.setAttribute('id', `link_${this.referenceCode}`)
                    link.setAttribute('title', filename)
                    link.setAttribute('download', filename)
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                    this.loading = false;
                    this.flushInterval()
                    this.flushCart()
                    if (option) this.saved = true    
                } catch (error) {
                    this.loading = false;
                    this.goPayment()
                }
            },
            async svgStringToImage(svgString, width, height, format) {
                return new Promise((resolve, reject) => {
                    format        = format ? format : 'png';
                    let svgData   = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
                    let canvas    = document.createElement('canvas');
                    let context   = canvas.getContext('2d');
                    canvas.width  = width;
                    canvas.height = height;
                    let image     = new Image();
                    image.onload  = () => { 
                        context.clearRect(0, 0, width, height);
                        context.drawImage(image, 0, 0, width, height);
                        resolve(canvas.toDataURL('image/'+ format))
                    }; 
                    image.src         = svgData
                    image.crossOrigin = 'anonymous'
                });
            },
            flushInterval() {
                clearInterval(this.intervalId)
            },
            historyBack() {
                this.goPayment()
            },
            goLanding() {
                this.flushInterval()
                this.$router.push('/online-store')
            },
            goPayment() {
                this.flushInterval()
                this.$router.push('/payment')
            },
            goExpire() {
                this.flushInterval()
                this.$router.push(`/payment-offline/unsuccess`)
            },
            goPaymentSuccess() {
                this.flushInterval()
                this.loading = true
                this.$router.push(`/success?success_code=${this.$route.query.order_code}&ft=true`)
            },
            flushCart() {
                clearLocalStoragePaymentSuccess()
                window.localStorage.removeItem('cart-length')
            }
        },
    }
</script>

<style scoped lang="scss" src="./style.scss"></style>
