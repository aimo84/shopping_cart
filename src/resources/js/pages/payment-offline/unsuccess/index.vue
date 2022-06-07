<template>
    <div class="store-container">
        <div class="payment-container">
            <loading-element v-if="loading" />
            <div class="content-section">
                <div class="payment-content">
                    <div class="payment-details-container">
                        <div class="payment-detail-container">
                            <div class="payment-detail">
                                <div class="title-icon">
                                    <svg width="5" height="26" viewBox="0 0 5 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 21.625V22.75M2.5 0.25V13.75V0.25Z" 
                                            stroke="black" 
                                            stroke-width="4.66667" 
                                            stroke-linecap="round"/>
                                    </svg>
                                </div>
                                <div class="title-fail">
                                    <span class="title-text">
                                        {{ Content.title[$i18n.locale] }}
                                    </span>
                                    <span class="detail-text new-line">
                                        {{ Content.detail_1[$i18n.locale] }}
                                    </span>
                                    <span class="detail-text">
                                        {{ Content.detail_2[$i18n.locale] }}
                                    </span>
                                </div>
                                <div class="download-text-btn">
                                    <button-element class="red-bg-button btn-payment"
                                        @click="goPayment">
                                        {{ Content.back_to_payment[$i18n.locale] }}
                                    </button-element>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
    import Loading from '@components/loading'
    import Content from './content.json'
    import Button from '@components/button'

    export default {
        components: {
            'button-element': Button,
            'loading-element': Loading
        },
        data: () => ({
            Content,
            loading: true,
            data: {},
        }),
        async mounted() {
            try {
                this.loading = false
            } catch (e) {
                console.log(e)
                this.goPayment()
            }
            
        },
        computed: {},
        methods: {
            goPayment() {
                this.$router.push('/payment')
            },
        },
    }
</script>

<style scoped lang="scss" src="./style.scss"></style>
