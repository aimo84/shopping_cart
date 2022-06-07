<template>
    <div class="level-d grid gap-8">
        <!-- Product Card -->
        <dialog-element
            ref="esim_detail_dialog"
            class="terms-dialog"
            showCloseButton
        >
            <div slot="content">
                <div class="e-sim-detail mt-6">
                    eSIM เป็นซิมการ์ดแบบใหม่ที่ฝั่งมากับเครื่องอุปกรณ์
                    คุณสามารถเปิดใช้งานได้โดยไม่ต้องใช้ SIM card จริง
                    กรุณาตรวจสอบ Device ของท่านว่าสามารถใช้งานคู่กับ eSIM
                    ท่านจะได้รับ QR Code เพื่อทำการเปิดเบอร์ กรณีที่ QR Code สูญหาย สามารถ download QR ได้ที่
                    <a v-if="$i18n.locale && $i18n.locale === `th`" class="text-dark-blue" href="https://iwsheet.truecorp.co.th/esimqr/th/home" target="_blank">คลิก</a>
                    <a v-else href="https://iwsheet.truecorp.co.th/esimqr/en/home" class="text-dark-blue" target="_blank">คลิก</a>
                </div>
            </div>
        </dialog-element>
        <loading-element
            v-if="loading"
            class="bg-white"
        />
        <template v-else>
            <div
                class="container-page lg:grid grid-flow-col gap-4 text-xl justify-start px-3 flex-breadcrumb-mobile text-gray-600 mt-10"
            >
                <router-link
                    to="/"
                    class="text-cyan no-underline"
                >
                    {{ Locale.true_online_store[$i18n.locale] }}
                </router-link>
                <div>></div>
                <router-link
                    :to="`/online-store?category=${categoryList.id}`"
                    class="text-cyan no-underline"
                >
                    {{ categoryList.title }}
                </router-link>
                <div>></div>
                <div class="text-gray-25">{{ productInfo.title[$i18n.locale] || productInfo.title.th }}</div>
            </div>
            <div class="grid lg:grid-col-[4fr-7fr] gap-4 lg:gap-8 grid-4 bg-white p-4 py-8 font-medium mt-22px">
                <!-- Product Image -->
                <div class="stickyProb">
                    <image-element :inventory="inventory" />
                </div>
                <!-- Product Info -->
                <div class="grid gap-4 lg:gap-8 mb-auto">
                    <!-- Section 1: Title, Rating, Price -->
                    <div class="padding-l-12">
                        <devicePrice-element
                            id="device-price-id"
                            :productInfo="productInfo"
                            :maxPrice="maxPrice"
                            :minPrice="minPrice"
                            :Locale="Locale"
                            :isWishlist="isWishlist"
                            :spacialDetail="spacialDetail"
                            :discountPercentage="discountPercentage"
                            :isEntertainmentSIM="isEntertainmentSIM"
                            :startingPriceEntSIM="startingPriceEntSIM"
                        />
                    </div>
                    <div class="divider w-full" v-show="!isSimOnlyFlow" />
                    <!-- Section : benfit-->
                    <div class="product_detail">
                        <div class="product_label"></div>
                        <div class="product_option padding-l-12">
                            <clm-benefit-element
                                v-show="showBenefit && checkShowbenefit"
                                type="bundle"
                                v-model="subModule"
                                :product-type="productInfo.product_type"
                                :product-id="productInfo.id"
                                :promotion="promotion"
                                :matcode="inventory.sku"
                                :promotionType="promotion_type"
                            ></clm-benefit-element>
                        </div>
                    </div>
                    <!-- Section 2: Variants -->
                    <deviceColorCapacity-element
                        :Locale="Locale"
                        :options="options"
                        :selectedOptions="selectedOptions"
                        @changeselectedOption="changeselectedOption"
                    />
                    <!-- Quantity -->
                    <deviceQuantity-element
                        v-show="!isSimOnlyFlow"
                        :Locale="Locale"
                        :quantities="quantity"
                        :promotion="promotion"
                        :inventory="inventory"
                        :productInfo="productInfo"
                        @changeQuantity="changeQuantity"
                    />
                    <div class="divider divider-3 w-full padding-l-divider" />
                    <!-- Section 3: Promos & Packages -->
                    <div class="flex-auto" v-if="!isPrepaidSim">
                        <!-- Section 3.0: Discount Code -->
                        <div class="font-bold text-22 text-black padding-l-13" v-if="coupon && !isPaysmooth">{{ Locale.discount_label[$i18n.locale] }}</div>
                        <div v-if="coupon && !isPaysmooth" class="text-22 padding-l-13">
                            {{ Locale.discount_description.enter_the_code[$i18n.locale] }}
                            <span class="font-bold text-red">{{ coupon.code }}</span>
                            {{ Locale.discount_description.in_order_summary_page_to_get[$i18n.locale] }}
                            <span class="font-bold text-red">{{ coupon.discount }}</span>
                            {{ Locale.discount_description.on_top_discount[$i18n.locale] }}
                        </div>
                        <!-- Section 3.1: Special Promos -->
                        <div v-if="specialPromotions && specialPromotions.length > 0" class="mt-5 lg:mt-0 font-bold text-black">
                            {{ Locale.special_promos[$i18n.locale] }}
                        </div>
                        <deviceSpecialPromotion-element
                            :specialPromotions="specialPromotions"
                            :promotion="promotion"
                            :isSpecialPromotion="isSpecialPromotion"
                            :Locale="Locale"
                            :productInfo="productInfo"
                            @changePromotion="changePromotion"
                        />
                        <!-- Section 3.2: Promotions -->
                        <template v-if="!isSimOnlyFlow">
                            <div
                                v-if="promotions && promotions.length > 0 && productInfo.product_type !== 'mnp'"
                                class="mt-5 lg:mt-0 font-bold text-black"
                            > {{ Locale.promos[$i18n.locale] }}</div>
                            <devicePromotion-element
                                :promotions="promotions"
                                :promotion="promotion"
                                :isSpecialPromotion="isSpecialPromotion"
                                :Locale="Locale"
                                @changePromotion="changePromotion"
                                :productInfo="productInfo"
                            />
                        </template>

                        <verify-device-existing-p2p-element
                            v-if="showVerifyDeviceExistingP2P && !isSaleMode && promotion !== `device_bundle_existing`"
                            :product-id="productInfo.id"
                            :inventory-id="inventory.id.toString()"
                            :promotion-id="promotionId"
                            :promotionName="promotion"
                            :queryString="queryString"
                            :promotionVerifyOtp="promotionVerify"
                            :resultVerify="resultVerify"
                            @changeVerifyOTP="changeVerifyOTP"
                            class="lg:col-start-2 overflow-x-auto"
                        />

                        <template v-if="promotion === `device_bundle_existing` ">
                            <!-- Product remark -->
                            <div v-if="spacialDetail && spacialDetail.promotion_remark" />
                            <div v-if="spacialDetail && spacialDetail.promotion_remark" class="text-xl mobile-mt-4 mt-dec-10px lg:mt-0">
                                {{ spacialDetail.promotion_remark[$i18n.locale] }}
                            </div>

                            <!-- installments -->
                            <div
                                v-if="isInstallments && productInfo.product_type !== 'mnp' && !isPaysmooth"
                                class="mt-5 mb-4 lg:my-0 font-bold text-black flex items-center"
                            >
                                {{ Locale.installment[$i18n.locale] }}
                            </div>
                            <div
                                class="grid scroll-container text-22"
                                v-if="isInstallments && productInfo.product_type !== 'mnp' && !isPaysmooth"
                            >
                                <button
                                    aria-label="Scroll left"
                                    class="hidden lg:grid place-items-center p-1 visible"
                                >
                                    <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.21" d="M10.0562 1L1 14.5L10.0562 28" stroke="black"/>
                                    </svg>
                                </button>
                                <div
                                    v-if="isInstallments"
                                    class="grid gap-4 grid-flow-col justify-start overflow-x-auto overflow-y-hidden hide-scrollbar full-width-scroll full-width-scroll-thick"
                                >
                                    <div class="grid gap-2 grid-flow-col justify-start cursor-pointer flex items-center" v-for="(option) in paymentMethods" :key="option.id" @click="selectedInstallment(option.id)">
                                        <div
                                            class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                                            :class="{
                                                'bg-red-500 border-red-500': selectedPaymentMethod === option.id
                                            }"
                                        >
                                            <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                                                    :fill="`${(selectedPaymentMethod === option.id) ? '#FFF' : '#CCC'}`"
                                                />
                                            </svg>
                                        </div>
                                        <div class="installment-text">
                                            <template v-if="option.id === '1'">{{option.payment_method[$i18n.locale]}}</template>
                                            <template v-else-if="option.id === '2'">
                                                <template v-if="enable2C2P">{{Locale.is_2c2p_payment_method[$i18n.locale]}}</template>
                                                <template v-else>{{option.payment_method[$i18n.locale]}} {{shoMostInstallmentOption.month}} {{ parseInt(shoMostInstallmentOption.month) > 1 ? Locale.months[$i18n.locale]: Locale.month[$i18n.locale] }} {{$i18n.locale === 'en' ? 'at 0% APR' : ''}}</template>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Down Rate -->
                            <div
                                v-if="isPaysmooth && promotions && (promotions.length > 0 || specialPromotions.length > 0)"
                                class="mt-5 lg:mt-0 font-bold text-black"
                            >{{ Locale.paysmooth.down_payment[$i18n.locale] }}</div>
                            <div
                                v-if="isPaysmooth && promotions && (promotions.length > 0 || specialPromotions.length > 0)"
                                class="grid scroll-container "
                            >
                                <button
                                    aria-label="Scroll left"
                                    class="hidden lg:grid place-items-center p-1"
                                    @click="scroll('promotions', -300)"
                                >
                                    <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.21" d="M10.0562 1L1 14.5L10.0562 28" stroke="black"/>
                                    </svg>
                                </button>
                                <div
                                    v-if="promotions && promotions.length > 0 || specialPromotions.length > 0"
                                    class="grid gap-1 grid-flow-col justify-start overflow-x-auto overflow-y-hidden hide-scrollbar full-width-scroll full-width-scroll-thick"
                                    ref="promotions"
                                >
                                    <button
                                        v-for="(item, key) in paysmoothDownrateList"
                                        :key="key"
                                        :data-test-downrate-id="item"
                                        class="rounded-xl w-full"
                                        :class="{'shadow-lg': downrate === item}"
                                        style="width: 150px; padding: 3px;"
                                        @click="downrate = item"
                                    >
                                        <div
                                            class="flex flex-col p-2 rounded-lg text-left shadow-gray-500 h-full"
                                            :class="{'shadow-thick-red-500 ': downrate === item}"
                                        >
                                            <div class="flex justify-between items-end">
                                                <div class="text-3xl font-bold paysmooth-down-text">{{ item }}%</div>
                                                <div
                                                    class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                                                    :class="{'bg-red-500 border-red-500': downrate === item}"
                                                >
                                                    <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                                                            :fill="`${downrate === item ? '#FFF' : '#CCC'}`"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <button
                                    aria-label="Scroll right"
                                    class="hidden lg:grid place-items-center p-1"
                                    @click="scroll('promotions', 300)"
                                >
                                    <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.21" d="M0.943751 1L10 14.5L0.943751 28" stroke="black"/>
                                    </svg>
                                </button>
                            </div>

                            <!-- Packages -->
                            <div
                                id="package-id"
                                v-if="packages"
                                class="mt-5 lg:mt-0 font-bold text-black label-gap"
                            >
                                {{ Locale.packages[$i18n.locale] }}
                            </div>
                            <devicePackage-element
                                :inventory="inventory"
                                :packages="packages"
                                :promotion="promotion"
                                :selectedPackages="selectedPackage"
                                :selectedAgings="selectedAging"
                                :selectedCampaignTypes="selectedCampaignType"
                                :Locale="Locale"
                                @selectPackageItem="selectedPackageItem"
                                @selectPackageItemDetail="selectPackageItemDetail"
                                :isPaysmooth="isPaysmooth"
                                :productInfo="productInfo"
                                :paysmoothPackages="paysmoothPackages"
                                :downrate="downrate"
                                :paysmoothConfig="paysmoothConfig"
                                :IoTPackage="IoTPackage"
                                :selectedPackageIotClouds="selectedPackageIotCloud"
                                :selectedPackageIotDescriptions="selectedPackageIotDescription"
                                :selectedCapacities="selectedCapacities"
                            />

                            <!-- redesign price plan -->
                            <div class="lg:col-start-2 lg:mt-0" v-if="selectedPackage && !isSaleMode">
                                <template v-if="pricePlanParams && isShowing === 'dbe'">
                                    <priceplan-chooser
                                        @updateSelected="setPricePlanSelected"
                                        :product="pricePlanProduct"
                                        :pricePlan="pricePlan"
                                        :checked="checked"
                                    />
                                </template>
                            </div>

                            <verify-device-existing-p2p-element
                                v-if="showVerifyDeviceExistingP2P && !isSaleMode"
                                :product-id="productInfo.id"
                                :inventory-id="inventory.id.toString()"
                                :promotion-id="promotionId"
                                :promotionName="promotion"
                                :queryString="queryString"
                                :promotionVerifyOtp="promotionVerify"
                                :resultVerify="resultVerify"
                                :itemPromotionSelected="this.promotion"
                                @changeVerifyOTP="changeVerifyOTP"
                                class="lg:col-start-2 overflow-x-auto"
                            />

                            <!-- campaign 22 thb message -->
                            <div v-if="isCampaignRedeem || isCampaignRedeemFreeDevice" class="mt-5 lg:mt-0"></div>
                            <div
                                v-if="isCampaignRedeem || isCampaignRedeemFreeDevice"
                                class="font-light text-grey lg:mt-0"
                            >
                                <span v-if="isCampaignRedeemFreeDevice" v-html="productInfo.config_free_device[this.promotion].label_remind[$i18n.locale]"></span>
                                <span v-else>*{{ Locale.campaign_22thb[$i18n.locale] }}</span>
                            </div>
                        </template>

                        <template v-else>
                            <!-- campaign 22 thb message -->
                            <div v-if="isCampaignRedeem || isCampaignRedeemFreeDevice" class="mt-5 lg:mt-0"></div>
                            <div
                                v-if="isCampaignRedeem || isCampaignRedeemFreeDevice"
                                class="font-light text-grey lg:mt-0"
                            >
                                <span v-if="isCampaignRedeemFreeDevice" v-html="productInfo.config_free_device[this.promotion].label_remind[$i18n.locale]"></span>
                                <span v-else>*{{ Locale.campaign_22thb[$i18n.locale] }}</span>
                            </div>

                            <!-- Product remark -->
                            <div v-if="spacialDetail && spacialDetail.promotion_remark" />
                            <div v-if="spacialDetail && spacialDetail.promotion_remark" class="text-xl mobile-mt-4 mt-dec-10px lg:mt-0">
                                {{ spacialDetail.promotion_remark[$i18n.locale] }}
                            </div>

                            <!-- simSourceType option -->
                            <div
                                v-if="isShowSimSourceType"
                                class="mt-5 mb-4 lg:my-0 font-bold text-black flex items-center"
                            >
                                {{ Locale.type_of_sim_wording[$i18n.locale] }}
                            </div>
                            <div
                                v-if="isShowSimSourceType"
                                class="lg:my-0 grid scroll-container text-22"
                            >
                                <div v-if="promotion === 'physical-sim-campaign' || promotion === 'e-sim-campaign' || promotion === 'handset_only'" class="grid gap-4 grid-flow-col justify-start overflow-x-auto overflow-y-hidden hide-scrollbar">
                                    <button
                                        v-for="(simSourceTypeData, simSourceTypeIndex) in simSourceTypeInformation"
                                        :key="simSourceTypeIndex"
                                        class="rounded-xl w-full hover:shadow-lg"
                                        :class="{'shadow-lg' : selectedSimSourceType === simSourceTypeData}"
                                        style="width: 140px; padding: 3px;"
                                        @click="simSourceTypeMethod(simSourceTypeData)"
                                    >
                                        <div
                                        class="flex flex-col p-2 rounded-lg text-left shadow-gray-500 h-full hover:shadow-thick-red-500"
                                        :class="{
                                            'shadow-thick-red-500': selectedSimSourceType === simSourceTypeData
                                        }"
                                        >
                                        <div class="flex-1 text-center text-color-000 text-20">
                                            <template v-if="simSourceTypeData === `physical-sim`">{{ Locale.simTypeLabel_locale_modern.physical[$i18n.locale] }}</template>
                                            <template v-else-if="simSourceTypeData === `e-sim`">{{ Locale.simTypeLabel_locale_modern.esim[$i18n.locale] }}</template>
                                        </div>
                                        <div class="font-light text-20">
                                            {{ Locale.start_at[$i18n.locale]}}
                                        </div>
                                        <div class="flex justify-between items-end">
                                            <div class="text-red text-2xl font-bold">{{ minPrice.toLocaleString() }} {{ Locale.baht[$i18n.locale] }}</div>
                                            <div
                                            class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                                            :class="{'bg-red-500 border-red-500': selectedSimSourceType === simSourceTypeData}"
                                            >
                                            <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                                                :fill="`${(selectedSimSourceType === simSourceTypeData) ? '#FFF' : '#CCC'}`"
                                                />
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                    </button>
                                </div>
                                <div v-else-if="promotion === 'device_bundle_new_customer' " class="grid gap-4 grid-flow-col justify-start overflow-x-auto overflow-y-hidden hide-scrollbar">
                                <div
                                    v-for="(simSourceTypeData, simSourceTypeIndex) in simSourceTypeInformation" :key="simSourceTypeIndex" @click="simSourceTypeMethod(simSourceTypeData)"
                                    class="grid gap-2 grid-flow-col justify-start cursor-pointer flex items-center"
                                >
                                    <div
                                    class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                                    :class="{
                                        'bg-red-500 border-red-500': selectedSimSourceType === simSourceTypeData
                                    }"
                                    >
                                    <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                        d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                                        :fill="`${(selectedSimSourceType === simSourceTypeData) ? '#FFF' : '#CCC'}`"
                                        />
                                    </svg>
                                    </div>
                                    <div class="simSourceType-text text-color-000 text-24">
                                    <template v-if="simSourceTypeData === `physical-sim`">{{ Locale.simTypeLabel_locale_modern.physical[$i18n.locale] }}</template>
                                    <template v-else-if="simSourceTypeData === `e-sim`">
                                        <div class="flex flex-row">
                                        <div>{{ Locale.simTypeLabel_locale_modern.esim[$i18n.locale] }}</div>
                                        <div class="sim-source-type-detail" @click="showEsimDetailDialog">
                                            {{ Locale.e_sim_more_detail_wording[$i18n.locale] }}
                                        </div>
                                        </div>
                                    </template>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <!-- installments -->
                            <div
                                v-if="isInstallments && productInfo.product_type !== 'mnp' && !isPaysmooth && !isSimOnlyFlow "
                                class="mt-5 mb-4 lg:my-0 font-bold text-black flex items-center"
                            >
                                {{ Locale.installment[$i18n.locale] }}
                            </div>
                            <div
                                class="grid scroll-container text-22"
                                v-if="isInstallments && productInfo.product_type !== 'mnp' && !isPaysmooth && !isSimOnlyFlow "
                            >
                                <button
                                    aria-label="Scroll left"
                                    class="hidden lg:grid place-items-center p-1 visible"
                                >
                                    <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.21" d="M10.0562 1L1 14.5L10.0562 28" stroke="black"/>
                                    </svg>
                                </button>
                                <div
                                    v-if="isInstallments"
                                    class="grid gap-4 grid-flow-col justify-start overflow-x-auto overflow-y-hidden hide-scrollbar full-width-scroll full-width-scroll-thick"
                                >
                                    <div class="grid gap-2 grid-flow-col justify-start cursor-pointer flex items-center" v-for="(option) in paymentMethods" :key="option.id" @click="selectedInstallment(option.id)">
                                        <div
                                            class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                                            :class="{
                        'bg-red-500 border-red-500': selectedPaymentMethod === option.id
                      }"
                                        >
                                            <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                                                    :fill="`${(selectedPaymentMethod === option.id) ? '#FFF' : '#CCC'}`"
                                                />
                                            </svg>
                                        </div>
                                        <div class="installment-text text-color-000 text-24">
                                            <template v-if="option.id === '1'">{{option.payment_method[$i18n.locale]}}</template>
                                            <template v-else-if="option.id === '2'">
                                                <template v-if="enable2C2P">{{Locale.is_2c2p_payment_method[$i18n.locale]}}</template>
                                                <template v-else>{{option.payment_method[$i18n.locale]}} {{shoMostInstallmentOption.month}} {{ parseInt(shoMostInstallmentOption.month) > 1 ? Locale.months[$i18n.locale]: Locale.month[$i18n.locale] }} {{$i18n.locale === 'en' ? 'at 0% APR' : ''}}</template>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Down Rate -->
                            <div
                                v-if="isPaysmooth && promotions && (promotions.length > 0 || specialPromotions.length > 0)"
                                class="mt-5 lg:mt-0 font-bold text-black"
                            >{{ Locale.paysmooth.down_payment[$i18n.locale] }}</div>
                            <div
                                v-if="isPaysmooth && promotions && (promotions.length > 0 || specialPromotions.length > 0)"
                                class="grid scroll-container "
                            >
                                <button
                                    aria-label="Scroll left"
                                    class="hidden lg:grid place-items-center p-1"
                                    @click="scroll('promotions', -300)"
                                >
                                    <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.21" d="M10.0562 1L1 14.5L10.0562 28" stroke="black"/>
                                    </svg>
                                </button>
                                <div
                                    v-if="promotions && promotions.length > 0 || specialPromotions.length > 0"
                                    class="grid gap-1 grid-flow-col justify-start overflow-x-auto overflow-y-hidden hide-scrollbar full-width-scroll full-width-scroll-thick"
                                    ref="promotions"
                                >
                                    <button
                                        v-for="(item, key) in paysmoothDownrateList"
                                        :key="key"
                                        :data-test-downrate-id="item"
                                        class="rounded-xl w-full"
                                        :class="{'shadow-lg': downrate === item}"
                                        style="width: 150px; padding: 3px;"
                                        @click="downrate = item"
                                    >
                                        <div
                                            class="flex flex-col p-2 rounded-lg text-left shadow-gray-500 h-full"
                                            :class="{'shadow-thick-red-500 ': downrate === item}"
                                        >
                                            <div class="flex justify-between items-end">
                                                <div class="text-3xl font-bold paysmooth-down-text">{{ item }}%</div>
                                                <div
                                                    class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                                                    :class="{'bg-red-500 border-red-500': downrate === item}"
                                                >
                                                    <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                                                            :fill="`${downrate === item ? '#FFF' : '#CCC'}`"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <button
                                    aria-label="Scroll right"
                                    class="hidden lg:grid place-items-center p-1"
                                    @click="scroll('promotions', 300)"
                                >
                                    <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.21" d="M0.943751 1L10 14.5L0.943751 28" stroke="black"/>
                                    </svg>
                                </button>
                            </div>

                            <!-- Packages -->
                            <div
                                id="package-id"
                                v-if="packages"
                                class="mt-5 lg:mt-0 font-bold text-black label-gap"
                            >
                                {{ Locale.packages[$i18n.locale] }}
                            </div>
                            <devicePackage-element
                                :inventory="inventory"
                                :packages="packages"
                                :promotion="promotion"
                                :selectedPackages="selectedPackage"
                                :selectedAgings="selectedAging"
                                :selectedCampaignTypes="selectedCampaignType"
                                :Locale="Locale"
                                @selectPackageItem="selectedPackageItem"
                                @selectPackageItemDetail="selectPackageItemDetail"
                                :isPaysmooth="isPaysmooth"
                                :productInfo="productInfo"
                                :paysmoothPackages="paysmoothPackages"
                                :downrate="downrate"
                                :paysmoothConfig="paysmoothConfig"
                                :IoTPackage="IoTPackage"
                                :selectedPackageIotClouds="selectedPackageIotCloud"
                                :selectedPackageIotDescriptions="selectedPackageIotDescription"
                                :selectedCapacities="selectedCapacities"
                            />
                        </template>

                        <!-- redesign price plan -->
                        <div class="lg:col-start-2 lg:mt-0" v-if="selectedPackage && !isSaleMode">
                            <template v-if="pricePlanParams && promotion === 'device_bundle_new_customer' && isShowing === 'nc'">
                                <priceplan-chooser
                                    @updateSelected="setPricePlanSelected"
                                    :isNewCustomer="true"
                                    :product="pricePlanProduct"
                                    :pricePlan="pricePlan"
                                    :checked="checked"
                                />
                            </template>
                            <template v-if="pricePlanParams && resultVerify.is_pass && promotion === 'pre2post' && isShowing === 'p2p' && promotion === promotionVerify">
                                <priceplan-chooser
                                    @updateSelected="setPricePlanSelected"
                                    :product="pricePlanProduct"
                                    :pricePlan="pricePlan"
                                    :checked="checked"
                                />
                            </template>
                            <template v-if="pricePlanParams && promotion === 'mnp_bundling_existing' && isShowing === 'mnp'">
                                <priceplan-chooser
                                    @updateSelected="setPricePlanSelected"
                                    :product="pricePlanProduct"
                                    :pricePlan="pricePlan"
                                    :checked="checked"
                                />
                            </template>
                            <template v-if="pricePlanParams && isShowing === 'mnp_bundling'">
                                <priceplan-chooser
                                    @updateSelected="setPricePlanSelected"
                                    :product="pricePlanProduct"
                                    :pricePlan="pricePlan"
                                    :checked="checked"
                                />
                            </template>
                            <!-- redesign price plan -->
                        </div>
                    </div>
                    <!-- Section 4: T&C -->
                    <!-- <div class="grid grid-flow-col justify-end">
            <button class="grid items-center grid-flow-col gap-2">
              <div class="text-red text-xl">*โปรดอ่านเงื่อนไขและข้อกำหนดก่อนการสั่งซื้อ­</div>
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11.5" stroke="#E0E0E0"/>
                <g clip-path="url(#a)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="m12.661 17.104 6.7-6.676a.966.966 0 0 0 0-1.35.966.966 0 0 0-1.35 0L12 15.093 5.984 9.079a.966.966 0 0 0-1.348 0 .966.966 0 0 0 0 1.349l6.675 6.676a.966.966 0 0 0 1.35 0Z" fill="#E0E0E0"/>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" transform="translate(4.363 5.455)" d="M0 0h15.273v15.273H0z"/>
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div> -->
                    <div class="dropdown-gap">
                        <div class="accordion flex flex-col items-end" :class="{'is-closed' : !openCondition}">
                            <div
                                @click="openCondition = !openCondition"
                                class="accordion-header"
                                :class="$i18n.locale === 'th' ? 'mr-16' : 'mr-10'"
                            >
                                <div class="box" style="margin-right: 5px; margin-top: 10px;">
                                    <img src="/images/icons/return-condition.svg" alt="conditionBox">
                                </div>
                                <div class="underline" style="margin-right: 5px;">
                                    {{ Locale.terms_and_conditions_for_return_product[$i18n.locale] }}
                                </div>
                                <div class="arrow">
                                    <img src="/images/icons/arrow.svg" :class="openCondition ? 'open' : 'close'" alt="arrow" >
                                </div>
                            </div>
                            <div class="accordion-content bg-gray-300 font-light text-xl condition-rounded mt-2" style="max-width:550px;">
                                <div>{{ Locale.terms_and_conditions.title[$i18n.locale] }}</div>
                                <ul>
                                    <li>{{ Locale.terms_and_conditions.condition1[$i18n.locale] }}</li>
                                    <li>{{ Locale.terms_and_conditions.condition2[$i18n.locale] }}</li>
                                </ul>
                                <div>{{ Locale.terms_and_conditions.condition_note[$i18n.locale] }}</div>
                            </div>
                        </div>
                        <div v-if="showStepMNP" class="accordion flex flex-col items-end" :class="{'is-closed' : !closeStepMNP}">
                            <div
                                @click="closeStepMNP = !closeStepMNP"
                                class="accordion-header"
                                :class="$i18n.locale === 'th' ? 'mr-16' : 'mr-10'"
                            >
                                <div class="box" style="margin-right: 5px; margin-top: 10px;">
                                    <img src="/images/icons/icon-file.svg" alt="conditionBox">
                                </div>
                                <div class="underline" style="margin-right: 5px;">
                                    ขั้นตอนการย้ายค่ายออนไลน์พร้อมสมาร์ทโฟนราคาพิเศษ
                                </div>
                                <div class="arrow">
                                    <img src="/images/icons/arrow.svg" :class="closeStepMNP ? 'open' : 'close'" alt="arrow" >
                                </div>
                            </div>
                            <div class="accordion-content bg-gray-300 font-light text-xl condition-rounded mt-2" style="max-width:550px;">
                                <img src="/images/icons/MNP-7.5.jpg" :class="closeStepMNP ? 'open' : 'close'" class="image-width-100" alt="arrow" >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Accessories Card -->
            <div
                v-if="productInfo.accessories && !isPaysmooth"
                class="grid gap-4"
            >
                <accessory-element
                    id="accessories-id"
                    :proAccessories="productInfo.accessories"
                    :accessories="accessories"
                    :Locale="Locale"
                />
            </div>

            <!-- CTA -->
            <div
                v-if="!isAllowAddcart"
                class="text-xl border border-red-200 text-red-900 bg-red-100 p-4 rounded-lg mx-4 xl:mx-0"
            >
                {{ Locale.unable_add_cart[$i18n.locale] }}
            </div>
            <!-- <div
        class="grid gap-2 lg:gap-4 px-2 items-center m-auto w-full"
        style="max-width: 520px;"
        :class="`${promotion === 'handset_only' && this.productInfo.product_type !== 'mnp' ? 'grid-cols-2' : 'grid-flow-col'}`"
      >
        <button
          v-if="promotion === 'handset_only' && this.productInfo.product_type !== 'mnp'"
          class="border border-gray-700 rounded-full py-2 w-full m-auto text-gray-500 disabled:bg-gray-500 disabled:border-transparent"
          style="max-width: 250px;"
          @click="trackAnalytics(true); addHandsetOnlyToCart(false)"
          :disabled="inventory.quantity === 0 || !isAllowAddcart"
        >{{ Locale.add_to_cart[$i18n.locale] }}</button>
        <button
          class="border border-transparent rounded-full py-2 w-full m-auto text-white bg-red-pink-gradient disabled:bg-gray-500 disabled:text-gray-500"
          style="max-width: 250px;"
          :id="buyNowBtnId"
          @click="checkBuyMode"
          :disabled="inventory.quantity === 0 || !isAllowAddcart"
        >
          <template v-if="isPrepaidSim">{{ Locale.choose_prepaid_sim[$i18n.locale] }}</template>
          <template v-else-if="isSaleMode">{{ Locale.buy_customer[$i18n.locale] }}</template>
          <template v-else> {{ Locale.buy_now[$i18n.locale] }}</template>
        </button>
      </div> -->
            <popup-element ref="dialog"/>
            <!-- new customer -->
            <selection-number-element
                id="search-number-title-id"
                v-if="selectedPackage &&
                    Object.keys(newCustomerParams).length !== 0 &&
                    (promotion === 'device_bundle_new_customer' || promotion === 'mnp_bundling') &&
                    !isSaleMode"
                :newCustomerParams="newCustomerParams"
                :selectedPackage="selectedPackage"
                :selectedNumberIndex="selectedNumberIndex"
            />

            <!-- Product HTML Card -->
            <productCard-element
                :productInfo="productInfo"
                :Locale="Locale"
                :tab="tab"
            />

            <!-- Sticky Bar -->
            <div
                class="sticky-bar sticky bottom-0 font-bold text-[#404040] clg:w-100vw-minus-scroll rounded-t-[10px]"
                :class="{'collapse': isStickyBarCollapse}"
            >
                <div class="max-w-[1200px] mx-auto ">
                    <div
                        class="arrow-icon h-0 relative mr-arrow duration-300"
                        :class="isStickyBarCollapse ? 'hover:-translate-y-1' : 'hover:translate-y-1 h-[48px] clg:h-0'"
                        @click="isStickyBarCollapse = !isStickyBarCollapse"
                    >
                        <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                             class="absolute right-0 mt-2 cursor-pointer"
                             :class="{'rotate-180' : !isStickyBarCollapse}"
                        >
                            <path d="M21 11.4L11 1L1 11.4" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div
                        class="components clg:flex items-center justify-center px-[15px] clg:px-[10px]"
                        :class="{'max-h-[643px] overflow-y-scroll hide-scrollbar' : accessories.length > 3
            ,'collapse': isStickyBarCollapse}"
                    >
                        <div
                            v-if="!isStickyBarCollapse"
                            class="clg:flex items-center"
                            :class="accessories.length>2 ? 'clg:py-[10px]' : 'clg:pt-[64px]-pb-[56px]'"
                        >
                            <!-- Device Selection -->
                            <div
                                class="device clg:w-[190px] clg:h-[100px] bg-white rounded-[10px] flex clg:flex-col items-center"
                                :class="accessories.length>2 ? 'h-[60px]' : 'h-[60px]'"
                            >
                                <div class="w-[60%] clg:w-auto line-height-18 text-color-000 clg:text-center px-5 clg:px-2 clg:mt-[15px] cursor-pointer" @click="smoothScrollToElement('device-price-id', 32)">
                                    <div class="text-[20px]">
                                        <!-- Device Name -->
                                        {{  productInfo.title[$i18n.locale] ? truncString(productInfo.title[$i18n.locale], 17) : truncString(productInfo.title.th, 17) }}
                                    </div>
                                    <div class="text-[22px]" v-if="!isSimOnlyFlow">
                                        <!-- Device Color / Device Capacity -->
                                        {{ truncString(selectedColor, 18) }} {{selectedCapacity.length > 0 ? '/' : ''}}  {{ truncString(selectedCapacity, 10) }}
                                    </div>
                                </div>
                                <div class="h-full flex items-center px-5 clg:px-2"
                                     :class="`${isCampaignRedeemFreeDevice || isCampaignFreeDevice ? 'h-full' : 'clg:h-auto clg:pt-3'}`">
                                    <div class="flex flex-col clg:flex-row" :class="`${isCampaignRedeemFreeDevice || isCampaignFreeDevice ? 'clg:items-center' : 'items-baseline'}`">
                                        <div class="font-light text-lg text-[#666666] mr-1" v-if="isSimOnlyFlow">
                                            {{ Locale.sim_price_wording[$i18n.locale] }}
                                        </div>
                                        <div class="font-light text-lg text-[#666666] line-height-18 pr-10px" v-else-if="isCampaignRedeemFreeDevice || isCampaignFreeDevice">
                                            <span v-html="productInfo.config_free_device[itemPromotionSelected.id].label_sticky[$i18n.locale]"></span>
                                        </div>
                                        <div class="font-light text-lg text-[#666666] mr-1" v-else>
                                            <span>{{ Locale.mobile_price_wording[$i18n.locale] }}</span>
                                        </div>
                                        <div class="text-[28px] line-height-18 text-color-red"
                                             :class="`${isCampaignRedeemFreeDevice || isCampaignFreeDevice ? 'cmd:pt-1' : ''}`">
                                            {{ this.priceProduct ? this.priceProduct.toLocaleString('en-IN') : 0 }}.-
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- promotion !== 'prepaid_bundle' equivalent buyNowBtnId !== 'device_only' -->
                            <template v-if="productInfo.product_type.toString() !== 'sim' && productInfo.product_type.toString() !== 'postpaid'">
                                <template v-if="promotion !== 'prepaid_bundle' && buyNowBtnId !== 'device_only'">
                                    <div class="plus-icon h-[22px] text-center m-2.5">
                                        <plus-icon-element />
                                    </div>
                                    <!-- Package Selection -->
                                    <div
                                        v-if="(pricePlanSelected || pricePackage !== null) && selectedPackage !== null"
                                        class="package relative clg:w-[190px] clg:h-[100px] bg-white rounded-[10px] flex clg:flex-col items-center"
                                        :class="accessories.length>2 ? 'h-[60px]' : 'h-[60px]'"
                                    >
                                        <div @click="deletePricePlanSelected" class="btn-close absolute w-[34px] h-[34px] flex items-center justify-center rounded-full border-[2px-white] cursor-pointer">
                                            <close-icon-element  />
                                        </div>
                                        <div class="w-[60%] clg:w-auto line-height-18 clg:text-center px-5 clg:px-2 clg:mt-[15px] cursor-pointer" @click="smoothScrollToElement('package-id', 16)">
                                            <div class="text-[20px] text-color-000">
                                                {{ pricePlanSelected ? truncString(pricePlanSelected.name, 12) : '' }}
                                            </div>
                                            <div class="text-[22px] text-color-red">
                                                {{ pricePlanSelected && selectedPackage !== null ? pricePlanSelected.price.toLocaleString(('en-IN')) : '' }} {{pricePlanSelected ? `.-` : ''}} {{ pricePlanSelected ? Locale.month[$i18n.locale] : ''}}
                                            </div>
                                        </div>
                                        <div class="h-full clg:h-auto flex items-center px-5 clg:px-2 clg:pt-3 only-border-l-[#CCCCCC] clg:border-0" @click="smoothScrollToElement('package-id', 16)">
                                            <div class="flex flex-col clg:flex-row items-baseline">
                                                <div class="font-light text-lg text-[#666666] mr-1">
                                                    {{ Locale.advance_payment_wording[$i18n.locale] }}
                                                </div>
                                                <div class="text-[28px] line-height-18 text-color-red ">
                                                    {{ pricePackage && selectedPackage !== null ? parseFloat(pricePackage).toLocaleString() : 0}}.-
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        v-else
                                        class="clg:w-[190px] h-[60px] clg:h-[100px] flex items-center justify-center rounded-[10px] bg-[#EF6996] cursor-pointer"
                                        @click="smoothScrollToElement('package-id', 16)"
                                    >
                                        <div class="font-bold text-[22px] text-white hover-inside-svg">
                                            <span class="w-[24px] h-[24px] inline-flex items-center justify-center rounded-full border-[2px-white]">
                                                <plus-circle-icon-element />
                                            </span>
                                            {{ Locale.select_package[$i18n.locale] }}
                                        </div>
                                    </div>
                                </template>
                                <template v-if="showAcces">
                                    <div class="plus-icon h-[22px] text-center m-2.5">
                                        <plus-icon-element />
                                    </div>
                                    <!-- Accessories Selection -->
                                    <div
                                        v-if="accessories.length > 0"
                                        class="accessories relative bg-white rounded-[10px] clg:flex clg:flex-col items-center clg:justify-center "
                                    >
                                        <div
                                            class="clg:w-[180px] clg:mx-2 cursor-pointer"
                                            @click="smoothScrollToElement('accessories-id', 16)"
                                            :class="{
                          'clg:h-[100px]' : accessories.length > 2,
                          'clg:overflow-y-scroll clg:custom-scrollbar' : accessories.length > 2,
                      }"
                                        >
                                            <div
                                                v-for="(matcode, index) in accessories"
                                                :key="matcode"
                                                class="accessories-item relative clg:w-[158px] flex clg:flex-col items-center clg:justify-center mx-5 clg:mx-[7px]"
                                                :class="{
                            'h-[80px] clg:h-[100px]' : accessories.length === 1,
                            'h-[50px] clg:h-[100px]' : accessories.length === 2,
                            'h-[100px/2] clg:h-[150px/3]' : accessories.length === 3,
                            'h-[45px] clg:h-[190px/3]' : accessories.length > 3,
                            'pt-[10px]' : accessories.length > 1,
                        }"
                                            >
                                                <div
                                                    v-if="accessories.length > 1"
                                                    @click="accessories.splice(index, 1)"
                                                    class="gray-close-icon absolute right-0 cursor-pointer"
                                                >
                                                    <gray-close-icon-element />
                                                </div>
                                                <div class="w-[60%] clg:w-auto leading-[19px] flex items-center">
                                                    <div class="text-[20px] line-height-18 text-color-000">
                                                        <!-- Accessory truncated name -->
                                                        {{ truncString(productInfo.accessories.find((e) => e.matcode === matcode).name, 14) }}
                                                    </div>
                                                </div>
                                                <div class="h-[60px] clg:h-auto flex items-center"
                                                     :class="{
                              'pl-5 clg:pl-0 only-border-l-[#CCCCCC] clg:border-0' : accessories.length === 1,
                          }"
                                                >
                                                    <div
                                                        class="flex items-baseline"
                                                        :class="{'flex-col clg:flex-row' : accessories.length === 1}"
                                                    >
                            <span class="font-light text-lg text-[#666666] mr-1">
                              {{ Locale.price[$i18n.locale] }}
                            </span>
                                                        <span
                                                            class="text-[30px] text-color-red"
                                                            :class="{'text-[38px]' : accessories.length === 1}"
                                                        >
                              <!-- Accessory price -->
                              {{ Math.trunc(productInfo.accessories.find((e) => e.matcode === matcode).price).toLocaleString() }}.-
                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            @click="accessories.splice(0)"
                                            class="btn-close absolute w-[34px] h-[34px] flex items-center justify-center rounded-full border-[2px-white] cursor-pointer"
                                        >
                                            <close-icon-element />
                                        </div>
                                    </div>
                                    <div
                                        v-else
                                        class="clg:w-[190px] h-[100px] clg:h-[130px] flex items-center justify-center rounded-[10px] bg-[#EF6996] cursor-pointer"
                                        @click="smoothScrollToElement('accessories-id', 16)"
                                    >
                                        <div class="font-bold text-[22px] text-white hover-inside-svg">
                      <span class="w-[24px] h-[24px] inline-flex items-center justify-center rounded-full border-[2px-white]">
                        <plus-circle-icon-element />
                      </span>
                                            {{ Locale.select_accessories[$i18n.locale] }}
                                        </div>
                                    </div>
                                </template>
                            </template>
                            <!-- promotion === 'device_bundle_new_customer' equivalent buyNowBtnId === 'new_bundle' -->
                            <template v-if="buyNowBtnId === 'new_bundle' || isShowSelectedNumberStickyBar === true">
                                <div class="plus-icon h-[22px] text-center m-2.5">
                                    <plus-icon-element />
                                </div>
                                <!-- Phone Number Selection -->
                                <div
                                    v-if="!this.isSelectedNumbers"
                                    class="clg:w-[190px] h-[40px] flex items-center justify-center rounded-[10px] bg-[#EF6996] "
                                >
                                    <div class="font-bold text-[22px] text-white hover-inside-svg cursor-pointer" @click="smoothScrollToElement('search-number-title-id', 35)">
                    <span class="w-[24px] h-[24px] inline-flex items-center justify-center rounded-full border-[2px-white] ">
                        <plus-circle-icon-element />
                    </span>
                                        {{ Locale.select_your_number[$i18n.locale] }}
                                    </div>
                                </div>
                                <div v-else
                                     class="package relative clg:w-[190px] h-[40px] bg-white rounded-[10px] flex clg:flex-col items-center py-2.5 cursor-pointer"
                                     @click="smoothScrollToElement('search-number-title-id', 35)"
                                >
                                    <div @click="deleteSelectedNumber" class="btn-close absolute w-[34px] h-[34px] flex items-center justify-center rounded-full border-[2px-white] cursor-pointer">
                                        <close-icon-element  />
                                    </div>
                                    <div class="clg:w-auto leading-[19px] cxt-center px-5 clg:px-2 clg:mt-[15px] select-number-custom"  >
                                        {{ this.selectedNumbers.mobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3') }}
                                    </div>
                                </div>
                            </template>
                            <div class="equal-icon hidden clg:block text-center m-6">
                                <svg width="22" height="9" viewBox="0 0 22 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 1H1" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                    <path d="M21 8H1" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </div>
                        <div class="price-and-btn clg:relative text-align-price" :class="{'collapse': isStickyBarCollapse}">
                            <div
                                class="text-white my-0 clg:flex"
                                @click="isStickyBarCollapse = false"
                            >
                                <span class="font-light text-price-all leading-[60px] price-all"  :class="{'collapse': isStickyBarCollapse}">{{ Locale.total_price_wording[$i18n.locale] }}</span>
                                <span class="text-price ml-[10px] price"  :class="{'collapse': isStickyBarCollapse}">{{ (parseInt(this.priceProduct * this.quantity) + (pricePackage ? parseFloat(pricePackage) : 0) + totalMoneyAccessorie).toLocaleString() }}.-</span>
                                <button
                                    v-if="isStickyBarCollapse"
                                    class="btn-buy-now w-[100px] rounded-full text-red bg-white disabled:bg-gray-500 disabled:text-white mb-[10px] mt-buy-now-btn ml-[20px]"
                                    :class="{'collapse': isStickyBarCollapse}"
                                    @click="checkBuyMode"
                                    :disabled="(this.isDisabledBuyNow && !isSaleMode) || !isAllowAddcart || minPrice === Infinity"
                                >{{ isSaleMode ? Locale.buy_customer[$i18n.locale] : (isMnpPrepaid ? Locale.choose_prepaid_sim[$i18n.locale] : Locale.buy_now[$i18n.locale]) }}
                                </button>
                            </div>
                            <div class="my-0 flex justify-center pb-[5px]">
                                <button
                                    v-if="!isStickyBarCollapse && (this.$route.query.selected_campaign === 'device_only' && productInfo.product_type !== 'mnp')"
                                    class="btn-add-cart margin-right-16 rounded-full text-red bg-white disabled:bg-gray-500 disabled:text-white mb-[30px] py-2"
                                    style="max-width: 250px;"
                                    @click="trackAnalytics(true); addHandsetOnlyToCart(false)"
                                    :disabled="inventory.quantity === 0 || !isAllowAddcart || isSaleMode || minPrice === Infinity"
                                >{{ Locale.add_to_cart[$i18n.locale] }}</button>
                                <button
                                    v-if="!isStickyBarCollapse"
                                    class="btn-buy-now w-[185px] h-[40px] rounded-full text-red bg-white disabled:bg-gray-500 disabled:text-white "
                                    @click="checkBuyMode"
                                    :disabled="(isDisabledBuyNow && !isSaleMode) || !isAllowAddcart || minPrice === Infinity"
                                >{{ isSaleMode ? Locale.buy_customer[$i18n.locale] : (isMnpPrepaid ? Locale.choose_prepaid_sim[$i18n.locale] : Locale.buy_now[$i18n.locale]) }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="buyNowBtnId === 'new_bundle' || isShowSelectedNumberStickyBar === true">
                <back-to-top-button-element :class="isStickyBarCollapse ? 'bottom-129' : 'bottom-back-to-top-select-4'" />
            </div>
            <div v-else-if="promotion !== 'prepaid_bundle' && buyNowBtnId !== 'device_only'">
                <back-to-top-button-element :class="isStickyBarCollapse ? 'bottom-129' : 'bottom-back-to-top-select-3'" />
            </div>
            <div v-else-if="!this.isSelectedNumbers">
                <back-to-top-button-element :class="isStickyBarCollapse ? 'bottom-129' : 'bottom-back-to-top-select-2'" />
            </div>

        </template>
        <script type='application/ld+json'>
            {{jsonDetail}}
        </script>
        <script type='application/ld+json'>
            {{jsonBreadCrumb}}
        </script>
    </div>
</template>

<script>
import qs from 'qs'
import { PromoMixins } from './promotions-modern.js'
import { AnalyticsMixins } from './analytics-modern.js'
import Loading from '@components/loading'
import Image from './image-modern'
import VerifyDevicExistingP2P from './verify-device-bundle-existing-p2p.vue'
import Locale from './Locale-modern.json'
import { COMMON_METADATA_STORE, HOLD_MNP_RANDOM_NUMBER } from '../../../store/actions.type'
import Popup from './popup'

import DevicePackage from './device-package.vue'
import DevicePromotion from './device-promotion.vue'
import DeviceSpecialPromotion from './device-special-promotion.vue'
import DeviceQuantity from './device-quantity.vue'
import DeviceColorCapacity from './device-color-capacity.vue'
import DevicePrice from './device-price.vue'
import ProductCard from './product-card.vue'
import selectionNumber from '../postpaid/new_design/new-design-index.vue'
import Accessories from './accessories.vue'

import PlusIcon from './sticky-bar-components/plus-icon.vue'
import PlusCircleIcon from './sticky-bar-components/plus-circle-icon.vue'
import CloseIcon from './sticky-bar-components/close-icon.vue'
import GrayCloseIcon from './sticky-bar-components/gray-close-icon.vue'
import BackToTopButtonElement from './back-to-top-button.vue'
import ClmBenefit from '@components/clm-benefit'
import Dialog from '@components/dialog'

import {
    FETCH_CART,
    FETCH_PRICE_PLAN,
    FETCH_PRODUCT_VERIFY_ESIM,
    POST_UPDATE_CART,
    UPDATE_BUNDLE_CART,
    VERIFY_MOBILE_NUMBER_DATA,
    VERIFY_RESULT_DATA,
    HOLD_NUMBER,
    VERIFY_PRICE_PLANS_DATA,
    VERIFY_PRODUCT_DATA,
    VERIFY_SELECTED_PRICE_PLAN_DATA,
    GET_WISHLIST,
    ADD_WISHLIST,
    DELETE_WISHLIST
} from '@store/actions.type'

import {
    computeAddon,
    updateEntPack,
    loggerAddon
} from '@utils/addon'

import { setCampaignWeomniQuery } from '@utils/common'

export default {
    components: {
        'clm-benefit-element': ClmBenefit,
        'popup-element': Popup,
        'loading-element': Loading,
        'image-element': Image,
        'devicePackage-element': DevicePackage,
        'devicePromotion-element': DevicePromotion,
        'deviceSpecialPromotion-element': DeviceSpecialPromotion,
        'deviceQuantity-element': DeviceQuantity,
        'deviceColorCapacity-element': DeviceColorCapacity,
        'devicePrice-element': DevicePrice,
        'productCard-element': ProductCard,
        'selection-number-element': selectionNumber,
        'accessory-element': Accessories,
        'plus-icon-element': PlusIcon,
        'plus-circle-icon-element': PlusCircleIcon,
        'close-icon-element': CloseIcon,
        'gray-close-icon-element': GrayCloseIcon,
        'verify-device-existing-p2p-element': VerifyDevicExistingP2P,
        'priceplan-chooser': () => import('./priceplan-chooser'),
        'dialog-element': Dialog,
        BackToTopButtonElement
    },
    mixins: [
        PromoMixins,
        AnalyticsMixins
    ],
    data: () => ({
        promotion_type: '',
        subModule: '',
        loading: true,
        dragged: false,
        dragTimeout: null,
        quantity: 1,
        maxQuantity: 10,
        selectedOptions: {},
        isSpecialPromotion: false,
        specialPromotion: '',
        promotion: '',
        promotionId: '',
        showVerifyDeviceExistingP2P: false,
        selectedBundleId: null,
        selectedPackage: '',
        selectedPackageIotCloud: '',
        selectedPackageIotDescription: '',
        selectedCampaignType: '',
        selectedAging: '',
        accessories: [],
        Locale,
        tab: 'detail',
        jsonDetail: null,
        jsonBreadCrumb: null,
        dataVerifyMore: {},
        metaDatas: {},
        newCustomerParams: {},
        // For Sticky Bar
        selectedCapacity: '',
        isStickyBarCollapse: true,
        selectedColor: '',
        itemPromotionSelected: {},
        queryString: {},
        verifyOTP: true,
        pricePlanParams: {},
        selectedNumbers: {},
        isSelectedNumbers: false,
        isShowing: '',
        selectDefaultPricePlanChooser: null,
        pricePlanSelected: {},
        totalMoneyAccessorie: 0,
        pricePackage: null,
        dataVerify: {},
        resultVerify: {},
        popSelected: 0,
        pricePlanProduct: {},
        pricePlan: [],
        checked: '',
        priceProduct: 0,
        selectedNumberIndex: null,
        postpaidSim: [],
        isDisabledBuyNow: true,
        isMobile: false,
        promotionVerify: '',
        isShowSelectedNumberStickyBar: false,
        quantityInStock: null,
        downrate: 25,
        isWishlist: false,
        paymentMethods: [
            {
                id: '1',
                payment_method: {
                    th: 'ชำระเต็มจำนวน',
                    en: 'Full payment'
                }
            },
            {
                id: '2',
                payment_method: {
                    th: 'ผ่อน 0% สูงสุด',
                    en: 'Pay over'
                }
            }
        ],
        selectedPaymentMethod: '',
        shoMostInstallmentOption: null,
        mnpCode: null,
        openCondition: false,
        isCampaignRedeem: false,
        inventory_id: '',
        simSourceTypeInformation: null,
        selectedSimSourceType: null,
        showStepMNP: false,
        closeStepMNP: false,
        campName: '',
        rcDiff: '',
        showAcces: false,
        isCampaignRedeemFreeDevice: false,
        isCampaignFreeDevice: false
    }),
    metaInfo () {
        return {
            title: this.productInfo.seo.title[this.$i18n.locale] || this.productInfo.seo.title.th,
            description: this.productInfo.seo.description[this.$i18n.locale] || this.productInfo.seo.description.th,
            meta: [
                {
                    property: 'og:title',
                    content: (this.metaDatas && this.metaDatas.title) ? this.metaDatas.title : ''
                },
                {
                    property: 'og:description',
                    content: (this.metaDatas && this.metaDatas.description) ? this.metaDatas.description : ''
                },
                {
                    property: 'og:url',
                    content: (this.metaDatas && this.metaDatas.url) ? this.metaDatas.url : ''
                },
                {
                    property: 'og:image',
                    content: (this.metaDatas && this.metaDatas.image) ? this.metaDatas.image : ''
                }
            ]
        }
    },
    computed: {
        isEntertainmentSIM () {
            const result = this.promotions.find((item) => {
                return (item.id === 'mnp_bundling_existing' && item.packages.find((i) => i.meta === 'entertainment_sim')) || (item.id === 'pre2post' && item.packages.find((i) => i.meta === 'entertainment_sim')) || (item.id === 'device_bundle_new_customer' && item.packages.find((i) => i.privilege_type === 'entertainment_sim'))
            })
            if (result) return true
            return false
        },
        startingPriceEntSIM () {
            if (!this.productInfo.bundles && !this.productInfo.bundle_existing) return
            if ((this.productInfo.bundles && this.productInfo.bundles.length <= 0) && (this.productInfo.bundle_existing && this.productInfo.bundle_existing.length <= 0)) return

            let minPriceBundles = null
            let minPriceExisting = null

            if (this.productInfo.bundles && this.productInfo.bundles.length > 0) minPriceBundles = Math.min(...this.productInfo.bundles.reduce((prev, cur) => cur.campaign_mnp_type !== 'one_step' ? [...prev, parseInt(cur.baseline)] : prev, []))
            if (this.productInfo.bundle_existing && this.productInfo.bundle_existing.length > 0) minPriceExisting = Math.min(...this.productInfo.bundle_existing.reduce((prev, cur) => [...prev, Math.min(...cur.discount_list.reduce((previ, curr) => [...previ, curr.rc], []))], []))
            return Math.min(minPriceExisting, minPriceBundles)
        },
        spacialDetail () {
            return this.productInfo.spacial_detail
        },
        discountPercentage () {
            const result = Math.round((this.maxPrice - this.minPrice) / this.maxPrice * 100)
            if (!result) return false
            return '-' + result + '%'
        },
        isSaleMode () {
            const saleLocalData = JSON.parse(localStorage.getItem('TMH-SALE-DATA'))
            const saleMode = saleLocalData?.sale_mode
            return this.$route.name === 'online-store-detail' && saleMode === '1'
        },
        isPrepaidSim () {
            if (!this.packages) return
            return this.packages.find((e) => e.sim_type === 'prepaid')
        },
        isMnpPrepaid () {
            return this.productInfo?.product_type === 'mnp' && this.isPrepaidSim
        },
        enable2C2P () {
            return window.is_2c2p_v2_pattern
        },
        isInstallments () {
            return this.productInfo.installments && this.productInfo.installments !== null && this.productInfo.installments.length > 0
        },
        cart () {
            return this.$store.state.cart.cart
        },
        user () {
            return this.$store.state.auth.profile.data
        },
        productInfo () {
            if (!this.$store.state.products.productInfo.data) return
            return this.$store.state.products.productInfo.data.record
        },
        categoryInfo () {
            return this.productInfo.category ? this.productInfo.category[0].title.th : ''
        },
        imageInfo () {
            return this.productInfo.images ? this.productInfo.images[0].thumbnail : ''
        },
        brandInfo () {
            if (this.productInfo.features) {
                for (const key in this.productInfo.features) {
                    if (this.productInfo.features.hasOwnProperty(key)) {
                        for (const keyTwo in this.productInfo.features[key].value) {
                            if (this.productInfo.features[key].value.hasOwnProperty(keyTwo)) {
                                return this.productInfo.features[key].value[keyTwo]
                            }
                        }
                    }
                }
            }

            return ''
        },
        config () {
            return this.$store.state.config.verifyConfig
        },
        allowAddcart () {
            return this.$store.state.products.productStatus.data
        },
        inventory () {
            if (!this.productInfo.options) return this.productInfo.inventories[0]
            return this.productInfo.inventories.find((inventory) => {
                return inventory.options
                    .map((e) => this.selectedOptions[e.title.th] === e.values.id)
                    .every(e => e)
            })
        },
        options () {
            if (!this.productInfo.options) return false
            const sortedBy = {
                สี: 2,
                ความจุ: 1
            }
            return this.productInfo.options
                .map((option) => {
                    const inventories = this.productInfo.inventories
                        .map((inventory) => {
                            const item = inventory.options.find((e) => e.title.th === option.title.th)?.values
                            if (this.isPaysmooth && !this.isInventoryHasCampaignPaysmooth(inventory.id, inventory.sku)) return
                            if (!item) return
                            const cond = inventory.options
                                .map((e) => {
                                    if (!this.selectedOptions[e.title.th]) return true
                                    return (option.title.th !== e.title.th) && (this.selectedOptions[e.title.th] === e.values.id)
                                })
                                .filter((e) => e)
                            if (cond.length !== inventory.options.length - 1) return
                            return {
                                ...item,
                                inventory_id: inventory.id,
                                is_hide_device_only: inventory.is_hide_device_only,
                                quantity: this.isPaysmooth ? this.isInventoryHasCampaignPaysmooth(inventory.id, inventory.sku) ? inventory.quantity : 0 : inventory.quantity
                            }
                        })
                        .filter((e) => e)
                        .sort((a, b) => a.position - b.position)
                    return {
                        title: option.title.th,
                        options: inventories
                    }
                })
                .sort((a, b) => (sortedBy[b.title] || 0) - (sortedBy[a.title] || 0))
        },
        minPrice (value) {
            if (value === Infinity) value = 0
            return Math.min(
                ...this.promotions.map((e) => e.min_price),
                ...this.specialPromotions.map((e) => e.min_price)
            )
        },
        maxPrice () {
            return Math.max(
                ...this.promotions.map((e) => e.min_price),
                ...this.specialPromotions.map((e) => e.min_price)
            )
        },
        coupon () {
            const data = this.$store.state.products.productInfo.data
            const couponData = data?.coupon_data_from_bff?.[data.record.id]
            if (!couponData || !couponData.coupon_status) return
            const coupon = couponData.coupon[0]
            const discount = coupon.discount.toLocaleString()
            return {
                code: coupon.code,
                discount: coupon.discount_type === 'percent' ? `${discount}%` : `฿${discount}`
            }
        },
        accs () {
            return this.accessories.length > 0 ? this.accessories.join(',') : undefined
        },
        isAllowAddcart () {
            const addCart = this.allowAddcart.allow_addcart
            if (addCart.shop === false) return false
            if (this.productInfo.store.shipping_method?.PICKUP) return true
            if (this.promotion === 'pre2post') return addCart.ext
            if (this.promotion === 'device_bundle_existing') return addCart.ext
            if (this.promotion === 'mnp_bundling') return addCart.new
            if (this.promotion === 'mnp_bundling_one_step') return addCart.new
            if (this.promotion === 'mnp_bundling_existing') return addCart.new
            if (this.promotion === 'device_bundle_new_customer') return addCart.new
            if (this.promotion === 'prepaid_bundle') return addCart.new
            if (this.selectedSimSourceType === 'e-sim') return addCart.esim
            return addCart.product
        },
        categoryList () {
            const categoryList = this.productInfo.category_list[0]
            let category = {}
            Object.keys(categoryList).forEach(lang => {
                const split = categoryList[lang].split('_')
                category = {
                    ...categoryList,
                    [lang]: categoryList[lang].includes('_') ? split[1] : split[0]
                }
            })
            return category
        },
        buyNowBtnId () {
            if (this.promotion === 'mnp_bundling_one_step') return 'mnp_bundle_special'
            if (this.productInfo.product_type === 'mnp') return 'mnp_sim_only'
            if (this.promotion === 'device_bundle_new_customer') return 'new_bundle'
            if (this.promotion === 'mnp_bundling') return 'mnp_bundle'
            if (this.promotion === 'pre2post') return 'p2p_bundle'
            if (this.promotion === 'device_bundle_existing') return 'existing_bundle'
            if (this.promotion === 'prepaid_bundle') return 'prepaid_bundle'
            if (this.promotion === 'handset_only') return 'device_only'
            if (this.promotion === 'mnp_bundling_existing') return 'buy_now_mnp_test'
            return 'buy_now'
        },
        selectPromotion () {
            const promotionSummary = {}
            if (this.promotions) {
                this.promotions.map((value) => {
                    if (this.promotion === value.id) {
                        promotionSummary.title = value.title
                        promotionSummary.promoId = value?.promoId
                        if (value.packages && value.packages.length > 0) {
                            value.packages.map(e => {
                                if (this.selectedPackage === e.id) {
                                    promotionSummary.active = e.active ? e.active : ''
                                    promotionSummary.start_date = e.start_date ? e.start_date : ''
                                    promotionSummary.end_date = e.end_date ? e.end_date : ''
                                }
                            })
                        }
                    }
                })
            }
            return promotionSummary
        },
        isPaysmooth () {
            return this.productInfo.is_pay_smooth && this.productInfo.is_paysmooth_tmvh_token && this.productInfo.paysmooth_verified_info && this.productInfo.paysmooth_verified_info?.pay_smooth_verify_result?.response?.is_pass
        },
        paysmoothPromotion () {
            return ['mnp_bundling_existing', 'device_bundle_existing', 'device_bundle_new_customer']
        },
        paysmoothCredit () {
            return this.productInfo.paysmooth_verified_info.pay_smooth_verify_result.response.credit
        },
        selectedPromotionInfo () {
            const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
            const promotionInfo = promotions.filter(item => item.id === this.promotion)
            return promotionInfo.length > 0 ? promotionInfo[0] : {}
        },
        paysmoothDownrateList () {
            const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
            const packages = promotions.find((e) => e.id === this.promotion)?.packages
            if (!packages) return []
            const flatPackages = this.promotion === 'device_bundle_existing' ? packages[0].discount_list : packages
            const campaignExistDownrate = flatPackages.reduce((prev, curr) => [parseInt(curr.down_payment_rate) || parseInt(curr.bundle_campaign_student_loan.down_payment_rate), ...prev], [])
            return this.paysmoothConfig.down_payment_rate.filter(item => this.paysmoothCredit / 100 >= this.selectedPromotionInfo.min_price * (100 - item) / 100).filter(item => campaignExistDownrate.includes(item))
        },
        paysmoothConfig () {
            return this.productInfo.pay_smooth
        },
        paysmoothPackages () {
            const packages = this.promotion === 'device_bundle_existing' ? this.packages?.[0]?.discount_list : this.packages
            if (!packages) return
            return [...packages].sort((a, b) => {
                if ((a.tenor || a.bundle_campaign_student_loan?.tenor) && (b.tenor || b.bundle_campaign_student_loan?.tenor)) {
                    return ((a.tenor || a.bundle_campaign_student_loan.tenor) > (b.tenor || b.bundle_campaign_student_loan.tenor)) ? 1 : (((b.tenor || b.bundle_campaign_student_loan.tenor) > (a.tenor || a.bundle_campaign_student_loan.tenor)) ? -1 : 0)
                }
                return 0
            })
        },
        selectedCapacities () {
            if (this.options && this.inventory.options) {
                return this.options.find(item => item.title === 'ความจุ') ? this.inventory.options.find(item => item.code === 'ความจุ')?.values?.title?.th : ''
            }
        },
        IoTPackage () {
            return this.productInfo.is_iot
        },
        isShowSimSourceType () {
            return this.productInfo.product_sim_source_type && this.productInfo.product_sim_source_type === true && this.simSourceTypeInformation && this.simSourceTypeInformation.length > 1 && this.promotion === 'device_bundle_new_customer' && !this.IoTPackage
        },
        checkShowbenefit () {
            const getBenefit = localStorage.getItem('clm-offering-bean-list')
            if (this.inventory.sku && getBenefit) {
                return getBenefit.split(',').find(item => item === this.inventory.sku)
            }
            return false
        },
        showBenefit () {
            return this.promotion === 'handset_only'
        },
        isHaveConfigFreeDevice () {
            return typeof this.productInfo.config_free_device !== 'undefined' && typeof this.productInfo.config_free_device[this.promotion] !== 'undefined'
        },
        isShowSimSourceType () {
            if ((this.promotion === 'physical-sim-campaign' || this.promotion === 'e-sim-campaign' || this.promotion === 'handset_only') && !this.IoTPackage) {
            // PHYSICAL-SIM && E-SIM SIM_ONLY_CASE
            return this.productInfo.product_sim && this.productInfo.product_sim.sim_source_type && this.simSourceTypeInformation && !this.IoTPackage
            } else if (this.promotion === 'device_bundle_new_customer') {
            // BUNDLE_NEW_CASE
            return this.productInfo.product_sim_source_type &&
                this.simSourceTypeInformation &&
                this.simSourceTypeInformation.length > 1 &&
                !this.IoTPackage
            } else {
            return false
            }
        },
        isSimOnlyFlow () {
            if (this.promotion === 'physical-sim-campaign' || this.promotion === 'e-sim-campaign' || this.promotion === 'handset_only') {
            return this.productInfo.product_sim && this.productInfo.product_sim.sim_source_type
            } else {
            return false
            }
        },
    },
    watch: {
        user () {
            this.getWishlist()
        },
        promotionType (value) {
            this.promotion_type = value
        },
        isStickyBarCollapse () {
            this.displayChatShop()
        }
    },
    async mounted () {
        try {
            this.$nextTick(function () {
                this.displayChatShop()
            })
            window.localStorage.removeItem('iot-package')
            if (this.productInfo && this.productInfo.is_addon) this.$router.push('/online-store')
            this.detectDevice()
            this.setProductVariant()
            if (this.isPaysmooth) this.setFirstOptions()
            this.setPromotion()
            if (this.isPaysmooth) this.downrate = this.paysmoothDownrateList[0]
            this.setPackage()
            this.trackAnalytics()
            this.getWishlist()
            this.setInstallment()
            this.mostInstallmentOption()
            this.setStatusButtonBuyNow()
            if (this.isPaysmooth) this.setFirstPackage()
            setCampaignWeomniQuery()
            if (isNaN(this.$route.query.rc)) this.updateURLQuery('rc', undefined)
            this.loading = false
            const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
            const selectedPackageObj = promotions?.find((e) => e.id === this.promotion).packages?.find((e) => e.id === this.selectedPackage)
            if (this.promotion === 'device_bundle_new_customer' || (this.promotion === 'mnp_bundling' && selectedPackageObj.is_typhoon)) this.getNewCustomerParams()
            if (['pre2post', 'device_bundle_existing', 'mnp_bundling_existing', 'device_bundle_new_customer', 'mnp_bundling'].includes(this.promotion)) this.getPricePlanParams(this.promotion)

            this.$watch('options', (options) => {
                if (this.isPaysmooth) {
                    const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
                    if (!promotions.find((e) => e.id === this.promotion)) {
                        this.promotion = promotions[0].id
                    }
                    this.downrate = this.paysmoothDownrateList[0]
                }
            })
            this.$watch('promotions', (promotions) => {
                if (this.isSpecialPromotion) return
                const promo = promotions.find((e) => e.id === this.promotion)
                if (promo) return
                if (promotions.length > 0) {
                    this.promotion = promotions[0].id
                    return
                }
                if (this.specialPromotions.length > 0) {
                    this.isSpecialPromotion = true
                    this.promotion = this.specialPromotions[0].id
                }
            })
            this.$watch('specialPromotions', (specialPromotions) => {
                if (!this.isSpecialPromotion) return
                const promo = specialPromotions.find((e) => e.id === this.promotion)
                if (promo) return
                if (specialPromotions.length > 0) {
                    this.promotion = specialPromotions[0].id
                    return
                }
                if (this.promotions.length > 0) {
                    this.isSpecialPromotion = false
                    this.promotion = this.promotions[0].id
                }
            })
            this.$watch('promotion', () => {
                this.resultVerify = {}
                this.selectedPackage = null
                if (this.isPaysmooth) this.downrate = this.paysmoothDownrateList[0]
                if (this.promotion !== 'handset_only') {
                    this.quantity = 1
                }
                if (this.promotion !== 'device_bundle_new_customer') {
                    this.newCustomerParams = {}
                }
                this.inShowings()
                this.setFirstPackage()
                const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
                const promotion = promotions.find((e) => e.id === this.promotion)
                this.updateURLQuery('selected_campaign', promotion.url)
                if (this.promotion === 'handset_only') {
                    this.pricePackage = 0
                    this.updateURLQuery('rc', undefined)
                    this.trackAnalytics()
                }
                if (this.promotion === 'prepaid_bundle') this.trackAnalytics()
                if (this.promotion === 'device_bundle_existing') {
                    // this.selectedPackage = null
                    this.checked = null
                    this.deleteItemPlanSelected()
                }
                if (this.promotion === 'mnp_bundling' || this.promotion === 'pre2post') {
                    this.pricePlanSelected = null
                }
                if (this.promotion === 'device_bundle_new_customer' && !this.IoTPackage) {
                    this.setSelectedSimSourceType()
                    this.getCurrentBundleId()
                    if (this.simSourceTypeInformation === null && this.productInfo.product_sim_source_type && this.productInfo.product_sim_source_type === true && this.selectedBundleId) {
                        this.fetchSimSourceTypeInformation(this.selectedBundleId)
                    }
                }
                this.priceProduct = this.itemPromotionSelected?.min_price
            })
            this.$watch('isSpecialPromotion', () => {
                if (this.isPaysmooth) this.downrate = this.paysmoothDownrateList[0]
                this.setFirstPackage()
                this.updateURLQuery('trueblack', this.isSpecialPromotion ? true : undefined)
            })
            this.$watch('inventory.id', () => {
                this.setFirstPackage()
                this.updateURLQuery('matcode', this.inventory?.sku)
                if (this.promotion === 'handset_only') this.trackAnalytics()
            })
            this.$watch('selectedPackageIotCloud', () => {
                if (localStorage.getItem('iot-package')) {
                    const iotPackage = JSON.parse(localStorage.getItem('iot-package'))
                    iotPackage.cloud = this.selectedPackageIotCloud
                    localStorage.setItem('iot-package', JSON.stringify(iotPackage))
                }
            })
            this.$watch('selectedPackageIotDescription', () => {
                if (localStorage.getItem('iot-package')) {
                    const iotPackage = JSON.parse(localStorage.getItem('iot-package'))
                    iotPackage.cloud_description = this.selectedPackageIotDescription
                    localStorage.setItem('iot-package', JSON.stringify(iotPackage))
                }
            })
            this.$watch('selectedPackage', () => {
                this.resultVerify = {}
                this.isCampaignRedeem = false
                this.isCampaignRedeemFreeDevice = false
                this.isCampaignFreeDevice = false
                this.setStatusButtonBuyNow()
                this.setStatusShowSelectedNumber()
                const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
                this.showStepMNP = false
                this.showVerifyDeviceExistingP2P = false
                if (this.selectedPackage !== null && this.selectedAging !== null) {
                    if (this.promotion === 'device_bundle_existing') {
                        this.handleSelectDeviceBundleExisting()
                        if (this.selectedCampaignType === '3' || this.selectedCampaignType === '1') {
                            this.showVerifyDeviceExistingP2P = true
                        }
                        if (this.selectedCampaignType === '3') {
                            const selectedAging = this.selectedAging?.toString() || '0'
                            const selectedPackageObj = promotions
                                .find((e) => e.id === this.promotion).packages
                                .find((e) => e.campaign_type === this.selectedCampaignType && e.aging === selectedAging).discount_list
                                .find((e) => e.id === this.selectedPackage)
                            if (selectedPackageObj?.meta === 'campaign_redeem') {
                                this.isCampaignRedeem = true
                            } else if (selectedPackageObj?.meta === 'campaign_redeem_free_device' && this.isHaveConfigFreeDevice) {
                                this.isCampaignRedeemFreeDevice = true
                            } else if ( selectedPackageObj?.meta === 'campaign_free_device' && this.isHaveConfigFreeDevice) {
                                this.isCampaignFreeDevice = true
                            }

                            this.updateURLQuery('rc', selectedPackageObj?.rc)
                            this.updateURLQuery('type', this.selectedCampaignType)
                            this.updateURLQuery('aging', selectedAging)
                            this.setVerifyData(selectedPackageObj)
                            if (selectedPackageObj) this.getPricePlanParams(this.promotion)
                            this.trackAnalytics()
                            return
                        } else {
                            if (this.selectedCampaignType) {
                                const selectedPackageObj = promotions
                                    .find((e) => e.id === this.promotion).packages
                                    .find((e) => e.campaign_type === this.selectedCampaignType)?.discount_list
                                    .find((e) => e.id === this.selectedPackage)

                                if (selectedPackageObj) {
                                    if (selectedPackageObj?.meta === 'campaign_free_device' && this.isHaveConfigFreeDevice) {
                                        this.isCampaignFreeDevice = true
                                    }
                                    this.updateURLQuery('rc', selectedPackageObj?.rc)
                                    this.updateURLQuery('type', this.selectedCampaignType)
                                    this.updateURLQuery('aging', undefined)
                                    this.setVerifyData(selectedPackageObj)
                                    if (selectedPackageObj) this.getPricePlanParams(this.promotion)
                                }

                                this.trackAnalytics()
                                return
                            }
                        }
                    }
                    if (this.promotion === 'mnp_bundling' || this.promotion === 'mnp_bundling_existing') {
                        this.showStepMNP = true
                    }
                    if (this.productInfo.product_type === 'mnp') return
                    const selectedPackageObj = promotions
                        .find((e) => e.id === this.promotion).packages
                        .find((e) => e.id === this.selectedPackage)
                    let rc = Math.floor(selectedPackageObj?.baseline).toString()
                    if (this.promotion === 'mnp_bundling_existing') rc = selectedPackageObj.rc

                    if ((selectedPackageObj?.meta === 'campaign_free_device' || selectedPackageObj?.privilege_type === 'campaign_free_device') && this.isHaveConfigFreeDevice) {
                        this.isCampaignFreeDevice = true
                    }

                    if (this.promotion === 'pre2post') {
                        rc = selectedPackageObj.rc
                        this.handleSelectPre2post()
                        this.showVerifyDeviceExistingP2P = true
                    }

                    isNaN(rc) ? this.updateURLQuery('rc', undefined) : this.updateURLQuery('rc', rc)
                    if (this.promotion === 'device_bundle_new_customer') {
                        this.rcDiff = this.$route.query.rc
                        this.logVisit()
                    }
                    this.updateURLQuery('type', undefined)
                    this.updateURLQuery('aging', undefined)
                    this.setVerifyData(selectedPackageObj)
                    if (this.promotion === 'handset_only') return
                    if (this.promotion === 'prepaid_bundle') return
                    this.trackAnalytics()
                    if (this.promotion === 'device_bundle_new_customer' || (this.promotion === 'mnp_bundling' && selectedPackageObj.is_typhoon)) this.getNewCustomerParams()
                    if (['pre2post', 'device_bundle_existing', 'device_bundle_new_customer', 'mnp_bundling_existing', 'mnp_bundling'].includes(this.promotion) && selectedPackageObj) this.getPricePlanParams(this.promotion)

                    if (this.promotion === 'device_bundle_new_customer' && !this.IoTPackage) {
                        this.setSelectedSimSourceType()
                        const oldCurrentBundleId = this.selectedBundleId
                        this.getCurrentBundleId()
                        const newCurrentBundleId = this.selectedBundleId
                        if (this.productInfo.product_sim_source_type && this.productInfo.product_sim_source_type === true && this.selectedBundleId) {
                            if (oldCurrentBundleId !== newCurrentBundleId) {
                                this.fetchSimSourceTypeInformation(this.selectedBundleId)
                            }
                        }
                    }
                    if (selectedPackageObj?.meta === 'campaign_redeem' || selectedPackageObj?.privilege_type === 'campaign_redeem') {
                        this.isCampaignRedeem = true
                    } else if ((selectedPackageObj?.meta === 'campaign_redeem_free_device' || selectedPackageObj?.privilege_type === 'campaign_redeem_free_device') && this.isHaveConfigFreeDevice) {
                        this.isCampaignRedeemFreeDevice = true
                    }
                } else {
                    if (this.promotion == 'handset_only' && this.isHaveConfigFreeDevice) {
                        this.isCampaignFreeDevice = true
                    }
                }
            })
            this.$watch('selectedPackage', (selectedPackage) => {
                this.pricePackage = 0
                if (selectedPackage !== null) {
                    this.initInfoStickyBar(selectedPackage)
                    if (this.promotion !== 'device_bundle_existing') {
                        const result = this.packages?.find(item => item.id === selectedPackage)
                        this.pricePackage = result ? result.advance_payment : 0
                    }
                    this.setStatusButtonBuyNow()
                }
            })
            this.$watch('accessories', (accessories) => {
                const data = this.productInfo
                let total = 0
                accessories.forEach(function (item) {
                    total += parseInt(data.accessories.find((e) => e.matcode === item).price)
                })
                this.totalMoneyAccessorie = total
            })
            this.$watch('pricePlanSelected', () => {
                this.setStatusButtonBuyNow()
            })
            this.$watch('resultVerify', () => {
                this.setStatusButtonBuyNow()
            })
            this.$watch('packages', () => {
                this.setStatusButtonBuyNow()
            })
            this.$watch('selectedNumbers', () => {
                this.setStatusButtonBuyNow()
            })
            this.$watch('pricePlan', () => {
                this.setPricePlan()
            })
            this.$watch('resultVerify', () => {
                this.setPricePlan()
            })
            this.$watch('checked', () => {
                this.setPricePlan()
            })
            this.$watch('downrate', () => {
                this.setFirstPackage()
            })
            if (this.productInfo.product_type === 'mnp' && this.packages) this.setMNPCode(this.packages[0])
            this.jsonDetail = {
                '@context': 'https://www.schema.org',
                '@type': 'Product',
                // "logo": this.logo,
                name: this.productInfo.title.th ? this.productInfo.title.th : '',
                image: this.imageInfo ? this.imageInfo : '',
                url: this.productInfo.id ? window.url.MIX_APP_URL + `/online-store/item/${this.productInfo.id}` : '',
                category: this.categoryInfo ? this.categoryInfo : '',
                brand: {
                    '@type': 'Brand',
                    name: this.brandInfo ? this.brandInfo.title.th : '',
                    url: window.url.MIX_APP_URL + `/online-store?brand=${this.brandInfo.id}`
                },
                materialCode: this.inventory ? this.inventory.sku : '',
                description: this.productInfo.seo.description.th ? this.productInfo.seo.description.th : '',
                color: this.colorText ? this.colorText : '',
                capacity: this.capacityText ? this.capacityText : '',
                model: this.productInfo.title.th + ' ' + this.capacityText + ' ' + this.colorText,
                promotion: this.selectPromotion,
                offers: {
                    '@type': 'AggregateOffer',
                    availability: 'https://schema.org/InStock',
                    url: this.productInfo.id ? window.url.MIX_APP_URL + `/online-store/item/${this.productInfo.id}` : '',
                    seller: {
                        '@type': 'Organization',
                        name: this.productInfo ? this.productInfo.store.title.th : ''
                    },
                    priceCurrency: 'THB',
                    offerCount: this.inventory.quantity ? this.inventory.quantity : '',
                    lowPrice: this.minPrice.toLocaleString() ? this.minPrice.toLocaleString() : '',
                    highPrice: this.maxPrice.toLocaleString() ? this.maxPrice.toLocaleString() : ''
                }
            }
            this.jsonBreadCrumb = {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: Locale.true_online_store[this.$i18n.locale],
                        item: window.url.MIX_APP_URL + '/online-store'
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: this.categoryList.title ? this.categoryList.title : '',
                        item: this.categoryList.id ? window.url.MIX_APP_URL + `/online-store?category=${this.categoryList.id}` : ''
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: this.productInfo.title ? this.productInfo.title[this.$i18n.locale] : '' || this.productInfo.title.th ? this.productInfo.title.th : ''
                    }
                ]
            }
            this.metaData()
            // For Sticky Bar
            this.updateSelectedColor()
            if (this.promotion && this.selectedPackage) {
                if (this.promotion === 'device_bundle_existing') {
                    this.handleSelectDeviceBundleExisting()
                    this.showVerifyDeviceExistingP2P = true
                } else if (this.promotion === 'pre2post') {
                    this.handleSelectPre2post()
                    this.showVerifyDeviceExistingP2P = true
                } else if (this.promotion === 'mnp_bundling' || this.promotion === 'mnp_bundling_existing') {
                    this.showStepMNP = true
                }
            }
            this.priceProduct = this.itemPromotionSelected.min_price
            this.updateSelectedCapacity()
            this.initItemPromotionSelect()
            this.initItemPlanSelected()
            this.initPricePackage()
            this.ShowSelectAccessory()
            this.initInfoStickyBar(this.selectedPackage)
            this.setStatusShowSelectedNumber()
            this.initQuantityInStock()
            if (this.promotion === 'device_bundle_new_customer') {
                this.rcDiff = this.$route.query.rc
            }
            this.logVisit()
            if (this.promotion && this.promotion === 'device_bundle_new_customer' && !this.IoTPackage) {
                this.setSelectedSimSourceType()
                this.getCurrentBundleId()
                if (this.productInfo.product_sim_source_type && this.productInfo.product_sim_source_type === true && this.selectedBundleId) {
                    this.fetchSimSourceTypeInformation(this.selectedBundleId)
                }
            }
            if (this.productInfo.product_sim && this.productInfo.product_sim.sim_source_type && (this.promotion === 'physical-sim-campaign' || this.promotion === 'e-sim-campaign' || this.promotion === 'handset_only')) {
                this.simSourceTypeInformation = this.productInfo.product_sim.sim_source_type
                this.setSelectedSimSourceType(this.simSourceTypeInformation[0])
            }

            if (this.productInfo.product_sim && this.productInfo.product_sim.sim_source_type && !this.$route.query.nas_code) {
                if (this.productInfo.sim_data.sim_type === 'postpaid') {
                    const subStringProductId = this.productInfo.id.toString().substring(1)
                    this.$router.push(`/packages?type=${this.productInfo.sim_data.sim_type}&product_id=${subStringProductId}`)
                } else {
                    this.updateURLQuery('nas_code', this.productInfo.sim_data.propo_code)
                }
            }
        } catch (e) {
            this.$router.push('/online-store/error')
        }
    },
    methods: {
        ShowSelectAccessory () {
            if (this.productInfo.accessories) {
                this.showAcces = true
            } else {
                this.showAcces = false
            }
        },
        logVisit () {
            const campId = localStorage.getItem('clm-camp-id')
            if (campId) {
                this.campName = localStorage.getItem('clm-camp-name')
                localStorage.removeItem('clm-camp-name')
            }
            loggerAddon({
                event: 'Visit product',
                productId: this.productInfo.id,
                matcode: this.inventory?.sku,
                campName: this.campName,
                rcDiff: this.rcDiff
            })
        },
        checkBuyMode () {
            if (this.isSaleMode) {
                this.showpopup()
            } else {
                this.buyNow()
            }
        },
        showpopup () {
            this.$refs.dialog.open()
        },
        initQuantityInStock () {
            if (this.options) {
                const firstOption = this.options[0]
                this.quantityInStock = firstOption.options.find(item =>
                    item.id === this.selectedOptions[firstOption.title]
                )?.quantity
                return
            }
            this.quantityInStock = this.productInfo.inventories[0]?.quantity || 0
        },
        /*
       * Set status for show selected number in sticky bar case mnp_bundling
       */
        setStatusShowSelectedNumber () {
            if (this.promotion === 'mnp_bundling') {
                const packageSelected = this.packages.find(item => item.id === this.selectedPackage)
                this.isShowSelectedNumberStickyBar = packageSelected.is_typhoon === true
            }
        },
        /*
       * set price plan in sticky bar
       */
        setPricePlan () {
            if (this.promotion === 'pre2post' || this.promotion === 'device_bundle_existing') {
                if (this.resultVerify.is_pass) {
                    this.pricePlanSelected = this.pricePlan.find(item => item.id === this.checked)
                } else {
                    this.pricePlanSelected = null
                }
            } else {
                this.pricePlanSelected = this.pricePlan?.find(item => item.id === this.checked)
            }
        },
        /*
       * handle detect device
       */
        detectDevice () {
            this.isStickyBarCollapse = window.matchMedia('only screen and (max-width: 760px)').matches
        },
        /*
       * set status button buy now in sticky bar
       */
        setStatusButtonBuyNow () {
            let type = ''
            if (this.promotion === 'device_bundle_existing') {
                type = Number(this.promotions.find(e => e.id === this.promotion)?.packages[0].campaign_type)
            }
            switch (this.promotion) {
                case 'handset_only': case 'truemoveh': case 'trueonline': case 'prepaid_bundle': case 'physical-sim-campaign': case 'e-sim-campaign':
                    this.isDisabledBuyNow = false
                    break
                case 'device_bundle_existing':
                    if (type === 1) {
                        this.isDisabledBuyNow = (!(this.selectedPackage && this.resultVerify.is_pass === true && this.quantityInStock > 0))
                        break
                    }
                    this.isDisabledBuyNow = (!(this.selectedPackage && this.pricePlanSelected && this.resultVerify.is_pass === true && this.quantityInStock > 0))
                    break
                case 'mnp_bundling_existing':
                    this.isDisabledBuyNow = (!(this.selectedPackage && this.pricePlanSelected && this.quantityInStock > 0))
                    break
                case 'mnp_bundling':
                    if (this.isShowSelectedNumberStickyBar) {
                        this.isDisabledBuyNow = (!(this.selectedPackage && this.isSelectedNumbers && this.quantityInStock > 0))
                    } else {
                        this.isDisabledBuyNow = !(this.selectedPackage && this.quantityInStock > 0)
                    }
                    break
                case 'pre2post':
                    this.isDisabledBuyNow = (!(this.selectedPackage && this.pricePlanSelected && this.resultVerify.is_pass === true && this.quantityInStock > 0))
                    break
                case 'device_bundle_new_customer':
                    this.isDisabledBuyNow = (!(this.selectedPackage && this.isSelectedNumbers && this.pricePlanSelected && this.quantityInStock > 0))
                    break
            }
        },

        /*
       * Reset info for sticky bar
       */
        initInfoStickyBar (selectedPackage) {
            let resultPackage = null
            let result = null
            switch (this.promotion) {
                case 'device_bundle_existing':
                    for (const index in this.packages) {
                        for (const i in this.packages[index].discount_list) {
                            if (this.packages[index].discount_list[i].id === selectedPackage) {
                                resultPackage = this.packages[index].discount_list[i]
                                break
                            }
                        }
                    }
                    if (resultPackage) {
                        this.priceProduct = this.inventory.price - resultPackage.discount
                    }
                    if (!resultPackage) {
                        if (this.isSpecialPromotion) {
                            resultPackage = this.specialPromotions.find(item => item.id === this.promotion)
                            this.priceProduct = resultPackage?.min_price
                        } else {
                            resultPackage = this.promotions.find(item => item.id === this.promotion)
                            this.priceProduct = resultPackage?.min_price
                        }
                    }
                    result = resultPackage
                    break
                case 'pre2post':
                case 'mnp_bundling_existing':
                    result = this.packages?.find(item => item.id === selectedPackage)
                    this.priceProduct = this.inventory.price - result?.discount

                    break
                case 'handset_only':
                    this.priceProduct = this.itemPromotionSelected?.min_price
                    break
                default:
                    result = this.packages?.find(item => item.id === selectedPackage)
                    // this.pricePackage = result ? result.price_after_discount_device_bundle_new_customer : null
                    this.pricePackage = result ? result.advance_payment : 0
                    resultPackage = this.packages?.find(item => item.id === selectedPackage)
                    if (resultPackage) {
                        this.priceProduct = resultPackage ? resultPackage.price_after_discount_device_bundle_new_customer : 0
                    }
                    if (!resultPackage) {
                        if (this.isSpecialPromotion) {
                            resultPackage = this.specialPromotions.find(item => item.id === this.promotion)
                            this.priceProduct = resultPackage.min_price
                        } else {
                            resultPackage = this.promotions.find(item => item.id === this.promotion)
                            this.priceProduct = resultPackage?.min_price
                        }
                    }
                    break
            }
            this.pricePackage = result ? result.advance_payment : 0
        },
        /*
       * set Selected
       */
        setSelected () {
            this.selected = this.popSelected
        },
        /*
       * get price plan product info
       */
        async fetchProduct () {
            window.localStorage.removeItem('sim_family_info')
            this.pricePlanProduct = this.productInfo
            if (this.pricePlanProduct.sim_family_info) window.localStorage.setItem('sim_family_info', JSON.stringify(this.pricePlanProduct.sim_family_info.sim_family_info))
        },
        /*
       * get price plan
       */
        async fetchPricePlan () {
            this.pricePlan = []
            const params = {
                nas_code: this.pricePlanParams.nas_code || this.luckyNas,
                token: this.$route.query.token,
                product_id: this.pricePlanParams.id
            }
            if (this.isShowing === 'nc' || this.isShowing === 'mnp_bundling') {
                params.bundle_propo_code = this.pricePlanParams.bundle_propo_code
            }
            if (this.$route.name.includes('drlucky-zodiac-verify')) {
                params.sim_type = this.$route.query.sim_type || 'postpaid'
            }
            const data = await this.$store.dispatch(FETCH_PRICE_PLAN, {
                params,
                headers: { 'tmvh-token': this.$route.query.token }
            })

            if (data.status_code !== 0) return
            this.pricePlan = data.data.record
            this.checked = this.pricePlan ? this.pricePlan[0].id.toString() : ''
            return this.checked ? this.initItemPlanSelected() : null
        },
        /*
       * delete price plan
       */
        deletePricePlanSelected () {
            this.selectedPackage = null
            this.checked = null
            this.pricePlanSelected = null
            this.pricePackage = 0
            this.showVerifyDeviceExistingP2P = false
            this.selectedCampaignType = null
            // this.initItemPlanSelected()
        },
        /*
       * get data of price plan
       */
        // async getDataPricePlan () {
        //   const params = {
        //     nas_code: this.pricePlanParams.nas_code || this.luckyNas,
        //     token: this.$route.query.token,
        //     product_id: this.pricePlanParams.id
        //   }
        //   const data = await this.$store.dispatch(FETCH_PRICE_PLAN, {
        //     params,
        //     headers: { 'tmvh-token': this.$route.query.token }
        //   })
        //   return data.data.record
        // },
        /*
       * set price plan selected
       */
        setPricePlanSelected (item) {
            this.checked = item.id
            this.pricePlanSelected = item
        },
        /*
       * set value init price package
       */
        initPricePackage () {
            // handset_only dont have packages
            if (this.packages) {
                const itemPackage = this.packages.find(item => item.id === this.selectedPackage)
                this.pricePackage = itemPackage ? itemPackage.advance_payment : 0
            }
        },
        deleteItemPlanSelected () {
            this.priceProduct = this.itemPromotionSelected?.min_price
            this.pricePlanSelected = null
            this.pricePackage = 0
        },
        /*
       * set value init for item plan selected
       */
        initItemPlanSelected () {
            if (this.promotion === 'mnp_bundling' || this.promotion === 'pre2post') {
                this.pricePlanSelected = null
            } else {
                this.pricePlanSelected = this.pricePlan.find(item => item.id === this.checked)
            }
        },
        /*
       * set value init for item promotion select
       */
        initItemPromotionSelect () {
            const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
            this.itemPromotionSelected = promotions.find(item => item.id === this.promotion)
            this.priceProduct = this.itemPromotionSelected?.min_price
        },
        getPricePlanParams (promotion) {
            const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
            const selectedPackageObj = promotions.find((e) => e.id === this.promotion).packages
            let nasCode = ''
            let bundlePropoCode = ''
            switch (promotion) {
                case 'pre2post':
                    nasCode = selectedPackageObj.find((e) => e.id === this.selectedPackage).proposition_nas_code.toString()
                    this.isSelectedNumbers = false
                    this.isShowing = 'p2p'
                    this.pricePlanParams = {
                        nas_code: nasCode,
                        id: this.$route.params.id
                    }
                    break
                case 'mnp_bundling_existing':
                    nasCode = selectedPackageObj.find((e) => e.id === this.selectedPackage).proposition_nas_code.toString()
                    this.isSelectedNumbers = false
                    this.isShowing = 'mnp'
                    this.pricePlanParams = {
                        nas_code: nasCode,
                        id: this.$route.params.id
                    }
                    break
                case 'mnp_bundling':
                    nasCode = selectedPackageObj.find((e) => e.id === this.selectedPackage).proposition_mobile[0].nas_code.toString()
                    bundlePropoCode = selectedPackageObj.find((e) => e.id === this.selectedPackage).propo_code
                    this.isSelectedNumbers = false
                    this.isShowing = 'mnp_bundling'
                    this.pricePlanParams = {
                        nas_code: nasCode,
                        id: this.$route.params.id,
                        bundle_propo_code: bundlePropoCode
                    }
                    break
                case 'device_bundle_existing':
                    nasCode = selectedPackageObj.find((e) => e.discount_list.find((x) => x.id === this.selectedPackage)).discount_list
                        .find((e) => e.id === this.selectedPackage).proposition_nas_code.toString()
                    this.isSelectedNumbers = false
                    this.isShowing = 'dbe'
                    this.pricePlanParams = {
                        nas_code: nasCode,
                        id: this.$route.params.id
                    }
                    break
                case 'device_bundle_new_customer':
                    nasCode = selectedPackageObj.find((e) => e.id === this.selectedPackage).proposition_mobile[0].nas_code.toString()
                    bundlePropoCode = selectedPackageObj.find((e) => e.id === this.selectedPackage).propo_code
                    this.pricePlanParams = {
                        nas_code: nasCode,
                        id: this.$route.params.id,
                        bundle_propo_code: bundlePropoCode
                    }
                    this.isShowing = 'nc'
                    break
                default:
                    this.pricePlanParams = {}
                    break
            }
            this.setSelected()
            this.fetchProduct()
            this.fetchPricePlan()
        },
        selectedPackageItem (packageItem) {
            if (this.selectedPackage !== packageItem) {
                this.selectedPackage = packageItem
            }
        },
        selectPackageItemDetail (packageItem, item, dKey) {
            const findedPackage = item.discount_list[dKey]
            this.pricePackage = findedPackage.advance_payment
            this.priceProduct = (this.inventory.price - findedPackage.discount)
        },
        getNewCustomerParams () {
            const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
            const selectedPackageObj = promotions
                .find((e) => e.id === this.promotion).packages
                .find((e) => e.id === this.selectedPackage)
            const nas = selectedPackageObj ? selectedPackageObj.proposition_mobile[0].nas_code.toString() : null
            this.newCustomerParams = {
                id: this.productInfo.id,
                bundle: selectedPackageObj ? selectedPackageObj.id.toString() : null,
                nas
            }
        },
        deleteSelectedNumber () {
            this.selectedNumberIndex = null
            this.isSelectedNumbers = false
            this.selectedNumbers = {}
        },
        setVerifyData (selectedPackageObj) {
            this.dataVerifyMore = {
                advance_payment: selectedPackageObj?.advance_payment,
                contract: selectedPackageObj?.contract
            }
        },
        handleSelectDeviceBundleExisting () {
            this.queryString = {}
            const config = Object.values(this.config.campaigns).find((e) => e.json_name === 'device_bundle_existing')
            this.promotionId = config.id.toString()

            if (this.selectedCampaignType) {
                this.queryString = {
                    type: this.selectedCampaignType.toString(),
                    accs: this.accs,
                    token: this.$route.query.token,
                    camptype: 'device_bundle_existing',
                    paysmooth_token: this.$route.query.paysmooth_token
                }
            }

            if (this.selectedCampaignType === '3') {
                const selectedAging = this.selectedAging?.toString() || '0'
                const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
                const selectedPackageObj = promotions
                    .find((e) => e.id === this.promotion).packages
                    .find((e) => e.campaign_type === this.selectedCampaignType && e.aging === selectedAging).discount_list
                    .find((e) => e.id === this.selectedPackage)
                this.queryString.aging = selectedAging
                this.queryString.pp = selectedPackageObj?.id.toString()
                this.setVerifyData(selectedPackageObj)
            }

            this.queryString.advance_payment = this.dataVerifyMore?.advance_payment
            this.queryString.contract = this.dataVerifyMore?.contract
        },
        handleSelectPre2post () {
            this.promotionId = this.selectedPackage.toString()
            this.queryString.type = '5'
            this.queryString.camptype = 'pre2post'
            this.queryString.accs = this.accs
            this.queryString.token = this.$route.query.token
            this.queryString.paysmooth_token = this.$route.query.paysmooth_token
        },
        async metaData () {
            const param = []
            param.code = 'Truestore_metadata_level_d'
            const metaDatas = await this.$store.dispatch(COMMON_METADATA_STORE, {
                params: param
            })
            if (metaDatas.data?.record) {
                metaDatas.data.record.sections.map(element => {
                    element.contents.map(value => {
                        let response = value.custom_fields.metadata.replace(/(<p>|<\/p>)/g, '')
                        response = JSON.parse(response)
                        this.metaDatas = response
                    })
                })
            }
        },
        setMNPCode (item) {
            this.selectedPackage = item.id
            this.mnpCode = item.code
        },
        scroll (ref, offset) {
            const reference = Array.isArray(this.$refs[ref]) ? this.$refs[ref][0] : this.$refs[ref]
            reference.scrollBy({ left: offset, behavior: 'smooth' })
        },
        setInstallment () {
            window.localStorage.removeItem('installments')
            this.selectedPaymentMethod = '1'
        },
        mostInstallmentOption () {
            if (!this.productInfo.installments) return
            const bank = []
            for (let i = 0; i < this.productInfo.installments.length; i++) {
                bank.push({ bank_id: this.productInfo.installments[i].bank_id, month: Math.max(...this.productInfo.installments[i].month) })
            }

            const mostVal = bank.sort(function (a, b) {
                return b.month - a.month
            })

            this.shoMostInstallmentOption = mostVal[0]
        },
        selectedInstallment (id) {
            this.selectedPaymentMethod = id
            if (this.isInstallments && id === '2') {
                window.localStorage.setItem('installments', true)
            } else {
                window.localStorage.removeItem('installments')
            }
        },
        setPackage () {
            try {
                if (!this.$route.query.rc) throw new Error('no-rc-found')
                const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
                if (this.promotion === 'device_bundle_existing') {
                    if (!this.$route.query.type) throw new Error('no-type-found')
                    if (this.$route.query.type === '3') {
                        if (!this.$route.query.aging) throw new Error('no-aging-found')
                        const selectedPackage = promotions
                            .find((e) => e.id === this.promotion).packages
                            .find((e) => e.campaign_type === this.$route.query.type && e.aging === this.$route.query.aging).discount_list
                            .find((e) => e.rc.toString() === this.$route.query.rc)
                        if (!selectedPackage) throw new Error('no-package-found')
                        this.selectedPackage = selectedPackage.id
                        this.selectedCampaignType = selectedPackage.campaign_type
                        this.selectedAging = selectedPackage.aging || '0'
                        if (selectedPackage.meta === 'campaign_redeem') {
                            this.isCampaignRedeem = true
                        } else if (selectedPackage?.meta === 'campaign_redeem_free_device' && this.isHaveConfigFreeDevice) {
                            this.isCampaignRedeemFreeDevice = true
                        } else if (selectedPackage?.meta === 'campaign_free_device' && this.isHaveConfigFreeDevice) {
                            this.isCampaignFreeDevice = true
                        }

                        if (this.IoTPackage) {
                            this.selectedPackageIotCloud = selectedPackage.cloud_campaign.campaign[0].cloud
                            this.selectedPackageIotDescription = selectedPackage.cloud_campaign.campaign[0].title
                            const IoTPackageInfo = {
                                cloud: this.selectedPackageIotCloud,
                                cloud_description: this.selectedPackageIotDescription,
                                iot_type: this.productInfo.iot_type
                            }
                            localStorage.removeItem('iot-package')
                            localStorage.setItem('iot-package', JSON.stringify(IoTPackageInfo))
                        }

                        this.setVerifyData(selectedPackage)
                        return
                    } else {
                        const selectedPackage = promotions
                            .find((e) => e.id === this.promotion).packages
                            .find((e) => e.campaign_type === this.$route.query.type).discount_list
                            .find((e) => e.rc.toString() === this.$route.query.rc)
                        if (!selectedPackage) throw new Error('no-package-found')
                        if (selectedPackage?.meta === 'campaign_free_device' && this.isHaveConfigFreeDevice) {
                            this.isCampaignFreeDevice = true
                        }
                        this.selectedPackage = selectedPackage.id
                        this.selectedCampaignType = selectedPackage.campaign_type
                        this.selectedAging = selectedPackage.aging

                        if (this.IoTPackage) {
                            this.selectedPackageIotCloud = selectedPackage.cloud_campaign.campaign[0].cloud
                            this.selectedPackageIotDescription = selectedPackage.cloud_campaign.campaign[0].title
                            const IoTPackageInfo = {
                                cloud: this.selectedPackageIotCloud,
                                cloud_description: this.selectedPackageIotDescription,
                                iot_type: this.productInfo.iot_type
                            }
                            localStorage.removeItem('iot-package')
                            localStorage.setItem('iot-package', JSON.stringify(IoTPackageInfo))
                        }

                        this.setVerifyData(selectedPackage)
                        return
                    }
                }
                const selectedPackage = promotions
                    .find((e) => e.id === this.promotion).packages
                    .find((e) => {
                        if (this.promotion === 'device_bundle_new_customer' || this.promotion === 'mnp_bundling_one_step' || this.promotion === 'mnp_bundling') {
                            const rcbaseline = Math.floor(e?.baseline).toString()
                            return rcbaseline ? rcbaseline === this.$route.query.rc : e.rc.toString() === this.$route.query.rc
                        }
                        if (this.promotion === 'pre2post') return e.rc.toString() === this.$route.query.rc
                        if (this.promotion === 'mnp_bundling_existing') return e.rc.toString() === this.$route.query.rc
                        return Math.floor(e?.baseline).toString() === this.$route.query.rc
                    })
                if (!selectedPackage) throw new Error('no-package-found')
                this.selectedPackage = selectedPackage.id
                this.selectedCampaignType = selectedPackage.campaign_type
                this.selectedAging = selectedPackage.aging
                if (selectedPackage.meta === 'campaign_redeem' || selectedPackage.privilege_type === 'campaign_redeem') {
                    this.isCampaignRedeem = true
                } else if ((selectedPackage?.meta === 'campaign_redeem_free_device' || selectedPackage?.privilege_type === 'campaign_redeem_free_device') && this.isHaveConfigFreeDevice) {
                    this.isCampaignRedeemFreeDevice = true
                } else if ((selectedPackage?.meta === 'campaign_free_device' || selectedPackage?.privilege_type === 'campaign_free_device') && this.isHaveConfigFreeDevice) {
                    this.isCampaignFreeDevice = true
                }

                if (this.IoTPackage && selectedPackage.cloud_campaign) {
                    this.selectedPackageIotCloud = selectedPackage.cloud_campaign.campaign[0].cloud
                    this.selectedPackageIotDescription = selectedPackage.cloud_campaign.campaign[0].title
                    const IoTPackageInfo = {
                        cloud: this.selectedPackageIotCloud,
                        cloud_description: this.selectedPackageIotDescription,
                        iot_type: this.productInfo.iot_type
                    }
                    localStorage.removeItem('iot-package')
                    localStorage.setItem('iot-package', JSON.stringify(IoTPackageInfo))
                }

                this.setVerifyData(selectedPackage)
            } catch (e) {
                this.setFirstPackage()
            }
        },
        setFirstPackage () {
            const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
            const promo = promotions.find((e) => e.id === this.promotion)
            if (!promo?.packages) return
            const firstPackage = this.isPaysmooth ? this.paysmoothPackages[0] : promo.packages[0]
            if (this.promotion === 'device_bundle_existing') {
                if (this.isPaysmooth) {
                    this.selectedCampaignType = this.packages[0].campaign_type
                    this.selectedPackage = firstPackage.id
                    this.selectedAging = this.packages[0].aging
                    this.downrate = parseInt(firstPackage.bundle_campaign_student_loan.down_payment_rate)
                    this.updateURLQuery('rc', firstPackage.rc)
                    this.updateURLQuery('aging', this.packages[0].aging)
                    const selectedPackageObj = firstPackage
                    this.setVerifyData(selectedPackageObj)
                    return
                }
                const firstPackageDV = promo?.packages?.find((e) => e.campaign_type === this.$route.query.type)
                this.selectedCampaignType = firstPackageDV ? firstPackageDV.campaign_type : firstPackage.campaign_type
                this.selectedPackage = firstPackageDV ? firstPackageDV.discount_list[0].id : firstPackage.discount_list[0].id
                this.selectedAging = firstPackageDV ? firstPackageDV.aging : firstPackage.aging

                if (this.IoTPackage && firstPackage.discount_list[0].cloud_campaign.campaign[0]) {
                    this.selectedPackageIotCloud = firstPackageDV ? firstPackageDV.discount_list[0].cloud_campaign.campaign[0].cloud : firstPackage.discount_list[0].cloud_campaign.campaign[0].cloud
                    this.selectedPackageIotDescription = firstPackageDV ? firstPackageDV.discount_list[0].cloud_campaign.campaign[0].title : firstPackage.discount_list[0].cloud_campaign.campaign[0].title
                    const IoTPackageInfo = {
                        cloud: this.selectedPackageIotCloud,
                        cloud_description: this.selectedPackageIotDescription,
                        iot_type: this.productInfo.iot_type
                    }
                    localStorage.removeItem('iot-package')
                    localStorage.setItem('iot-package', JSON.stringify(IoTPackageInfo))
                }

                this.updateURLQuery('rc', firstPackageDV ? firstPackageDV.discount_list[0].rc : firstPackage.discount_list[0].rc)
                this.updateURLQuery('aging', firstPackageDV ? firstPackageDV.aging : firstPackage.aging)
                const selectedPackageObj = firstPackageDV ? firstPackageDV.discount_list[0] : firstPackage.discount_list[0]
                this.setVerifyData(selectedPackageObj)
                return
            }
            this.selectedPackage = firstPackage.id
            this.selectedCampaignType = firstPackage.campaign_type
            this.selectedAging = firstPackage.aging

            if (this.IoTPackage && firstPackage.cloud_campaign) {
                this.selectedPackageIotCloud = firstPackage.cloud_campaign.campaign[0].cloud
                this.selectedPackageIotDescription = firstPackage.cloud_campaign.campaign[0].title
                const IoTPackageInfo = {
                    cloud: this.selectedPackageIotCloud,
                    cloud_description: this.selectedPackageIotDescription,
                    iot_type: this.productInfo.iot_type
                }
                localStorage.removeItem('iot-package')
                localStorage.setItem('iot-package', JSON.stringify(IoTPackageInfo))
            }
            if ((firstPackage?.meta === 'campaign_free_device' || firstPackage?.privilege_type === 'campaign_free_device') && this.isHaveConfigFreeDevice) {
                this.isCampaignFreeDevice = true
            }

            this.setVerifyData(firstPackage)
            let rc = Math.floor(firstPackage?.baseline).toString()
            if (this.promotion === 'mnp_bundling_existing') rc = firstPackage.rc
            if (this.promotion === 'pre2post') rc = firstPackage.rc
            isNaN(rc) ? this.updateURLQuery('rc', undefined) : this.updateURLQuery('rc', rc)
            this.updateURLQuery('aging', firstPackage.aging)
            if (this.promotion === 'mnp_bundling_existing') this.updateURLQuery('aging', undefined)
        },
        updateURLQuery (key, value) {
            if (value !== 'physical-sim-campaign' && value !== 'e-sim-campaign') {
                const query = this.$route.query
                query[key] = value
                const newurl = `${window.location.origin}${window.location.pathname}?${qs.stringify(query)}`
                window.history.replaceState({ path: newurl }, '', newurl)
            }
        },
        setProductVariant () {
            try {
                if (!this.$route.query.matcode) throw new Error('no-matcode')
                let inventory = this.productInfo.inventories.find((e) => e.sku === this.$route.query.matcode && !e.is_hide_device_only)
                if (!inventory) throw new Error('no-inventory')
                // Fallback: Select other inventory if it's out of stock
                if (!inventory.quantity && this.productInfo.inventories.length > 1) {
                    const availableInventory = this.productInfo.inventories.find((e) => e.quantity > 0)
                    if (availableInventory) inventory = availableInventory
                }
                inventory.options.forEach((e) => this.$set(this.selectedOptions, e.title.th, e.values.id))
                this.updateURLQuery('matcode', this.inventory?.sku)
            } catch (e) {
                if (!this.productInfo.options) {
                    this.updateURLQuery('matcode', this.inventory?.sku)
                    return
                }
                const inventory = this.productInfo.inventories.find((e) => e.quantity > 0 && !e.is_hide_device_only)
                if (inventory) {
                    inventory.options.forEach((e) => this.$set(this.selectedOptions, e.title.th, e.values.id))
                } else {
                    this.productInfo.options.forEach((e) => {
                        this.$set(this.selectedOptions, e.title.th, Object.values(e.options)[0].id)
                    })
                }
                this.updateURLQuery('matcode', this.inventory?.sku)
            }
        },
        setFirstOptions () {
            if (this.options) {
                if (this.options.find(item => item.title === 'สี')) {
                    if (!this.options.find(item => item.title === 'สี')?.options.find(item => item.id === this.selectedOptions['สี'])) {
                        this.selectedOptions['สี'] = this.options.find(item => item.title === 'สี').options[0].id
                    }
                }
                if (this.options.find(item => item.title === 'ความจุ')) {
                    if (!this.options.find(item => item.title === 'ความจุ').options.find(item => item.id === this.selectedOptions['ความจุ'])) {
                        this.selectedOptions['ความจุ'] = this.options.find(item => item.title === 'ความจุ').options[0].id
                    }
                }
            }
        },
        setPromotion () {
            try {
                const selectedCampaign = this.$route.query.selected_campaign
                const isTrueBlack = this.$route.query.trueblack === 'true'
                if (!selectedCampaign) throw new Error('no-selected-campaign')
                const promotion = this.promotions.find((e) => e.url === selectedCampaign)
                const specialPromotion = this.specialPromotions.find((e) => e.url === selectedCampaign)
                if (isTrueBlack && !specialPromotion) {
                    this.updateURLQuery('trueblack', this.isSpecialPromotion ? true : undefined)
                    this.updateURLQuery('selected_campaign', this.specialPromotions ? this.specialPromotions[0].url : promotion.url)
                }
                if (!promotion && !specialPromotion) throw new Error('no-promotion')
                this.isSpecialPromotion = isTrueBlack
                this.promotion = this.isSpecialPromotion ? specialPromotion.id : promotion.id
                this.updateURLQuery('selected_campaign', this.isSpecialPromotion ? specialPromotion.url : promotion.url)
                this.updateURLQuery('trueblack', this.isSpecialPromotion ? true : undefined)
                if (this.promotion === 'device_bundle_existing') {
                    const promoExisting = promotion.packages.find((e) => e.campaign_type === this.$route.query.type)
                    this.updateURLQuery('type', promoExisting ? promoExisting.campaign_type : promotion.packages[0].campaign_type)
                }
                if (this.promotion === 'handset_only') {
                    this.updateURLQuery('rc', undefined)
                    if (this.isHaveConfigFreeDevice) {
                        this.isCampaignFreeDevice = true
                    }
                }
            } catch (e) {
                const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
                const haveOnlySpecial = (this.isPaysmooth && !this.isSpecialPromotion && !promotions.length && this.specialPromotions.length)
                if (promotions.length) {
                    this.promotion = promotions[0].id
                    this.updateURLQuery('selected_campaign', promotions[0].url)
                } else if (haveOnlySpecial) {
                    this.isSpecialPromotion = true
                    this.promotion = this.specialPromotions[0].id
                }
                this.updateURLQuery('trueblack', this.isSpecialPromotion ? true : undefined)
            }
        },
        isInventoryHasCampaignPaysmooth (id, sku) {
            return this.productInfo.bundles.find(item => item.inventory_id === id) || this.productInfo.bundle_existing.filter(item => ['3', '4', '5'].includes(item.campaign_type)).map(item => item.discount_list.find(e => e.product_code === sku)).find(item => item !== undefined)
        },
        trackAnalytics (action, e) {
            let label = ''
            window.dataLayer = window.dataLayer || []
            if (action === 'select_number_failed') label = 'invalid_number'
            if (action === 'select_number') {
                const regex = e.length === 10 ? /(\d{3})(\d{3})(\d{4})/ : /(\d{2})(\d{3})(\d{4})/
                label = e.replace(regex, '$1-$2-$3')
            }
            window.dataLayer.push({
                event: 'track_event',
                event_category: 'search_mobile_number',
                event_action: action,
                event_label: label
            })
        },
        async holdNumber (id) {
            try {
                this.trackAnalytics('select_number', id)
                const nas = this.$route.query.nas_code || this.newCustomerParams.nas
                const data = await this.$store.dispatch(HOLD_NUMBER, {
                    id,
                    nas_code: nas
                })

                if (this.postpaidSim) {
                    localStorage.setItem('postpaid-sim-data', JSON.stringify(data.data))
                } else {
                    localStorage.setItem('postpaid-data', JSON.stringify(data.data))
                }
                window.dispatchEvent(new Event('check-postpaid'))
                if (data.data.mobile) {
                    this.selectedNumbers = { mobile: data.data.mobile }
                    this.loading = false
                } else {
                    this.loading = false
                }
            } catch (e) {
                this.trackAnalytics('select_number_failed')
                this.isSelectedNumbers = false
                this.selectedNumberIndex = null
                // this.$refs.dialog.open(number)
            }
        },
        async buyNow () {
            this.trackAnalytics(true)
            const promotions = this.isSpecialPromotion ? this.specialPromotions : this.promotions
            if (this.isPaysmooth) {
                localStorage.removeItem('cart-id')
                localStorage.removeItem('cart-length')
            }
            if (this.productInfo.product_type === 'mnp') {
                this.$router.push({
                    name: 'mnp-verify',
                    params: {
                        id: this.$route.params.id,
                        code: this.mnpCode
                    },
                    query: {
                        token: this.$route.query.token
                    }
                })
                return
            }
            switch (this.promotion) {
                case 'mnp_bundling': {
                    this.$store.dispatch(VERIFY_SELECTED_PRICE_PLAN_DATA, this.pricePlanSelected)
                    const bundleData = this.productInfo.bundles.find(bundle => (
                        bundle.id === this.selectedPackage.toString()
                    ))
                    const query = {
                        accs: this.accs,
                        token: this.$route.query.token,
                        camptype: 'mnp_bundling'
                    }

                    window.dataLayer = window.dataLayer || []
                    window.dataLayer.push({
                        event: 'track_event',
                        event_category: 'choose_the_package',
                        event_action: 'verify',
                        event_label: `${this.pricePlanSelected.name} ${this.pricePlanSelected.price} Baht`
                    })
                    const isOneStep = bundleData.campaign_mnp_type === 'one_step'
                    const route = isOneStep ? 'checklist' : 'otp'
                    window.localStorage.setItem('route', route)

                    const selectedPackageObj = promotions
                        .find((e) => e.id === this.promotion).packages
                        .find((e) => e.id === this.selectedPackage)

                    if (selectedPackageObj.is_typhoon) {
                        this.trackAnalytics('select_number', this.selectedNumbers.mobile)
                        const mnpNumberData = await this.holdMnpNumber(bundleData)
                        query.reserve_hash = mnpNumberData.number_random_ticket_hash
                        query.mobile_number = this.selectedNumbers.mobile
                    }

                    this.$router.push({
                        name: 'mnp-bundle-verify',
                        params: {
                            id: this.productInfo.id,
                            inventory: this.inventory.id.toString(),
                            bundle: this.selectedPackage.toString()
                        },
                        query
                    })
                    break
                }
                case 'mnp_bundling_existing': {
                    if (this.isPaysmooth) {
                        const selectedPackageObj = promotions
                            .find((e) => e.id === this.promotion).packages
                            .find((e) => e.id === this.selectedPackage)
                        localStorage.setItem('paysmooth-data', JSON.stringify({
                            paysmooth_token: this.$route.query.paysmooth_token,
                            token: this.$route.query.token,
                            down_amount: ((this.inventory.price - selectedPackageObj.discount) * parseInt(selectedPackageObj.bundle_campaign_student_loan.down_payment_rate) / 100).toLocaleString().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                            down_rate: selectedPackageObj.bundle_campaign_student_loan.down_payment_rate,
                            tenor: selectedPackageObj.bundle_campaign_student_loan.tenor,
                            installment_amount: (((this.inventory.price - selectedPackageObj.discount) * (100 - this.downrate) / 100 +
                                    (this.inventory.price - selectedPackageObj.discount) * (100 - this.downrate) / 100 * (this.paysmoothConfig.interest) / 100 / 12 * parseInt(selectedPackageObj.bundle_campaign_student_loan.tenor)) /
                                parseInt(selectedPackageObj.bundle_campaign_student_loan.tenor)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                        }))
                    }
                    this.$store.dispatch(VERIFY_SELECTED_PRICE_PLAN_DATA, this.pricePlanSelected)

                    this.$router.push({
                        name: 'online-store-trueidbox-verify',
                        params: {
                            product: this.productInfo.id,
                            inventory: this.inventory.id.toString(),
                            promotion: this.selectedPackage.toString()
                        },
                        query: {
                            accs: this.accs,
                            token: this.$route.query.token,
                            type: '4',
                            camptype: 'mnp_bundling_existing',
                            paysmooth_token: this.$route.query.paysmooth_token
                        }
                    })
                    break
                }
                case 'device_bundle_new_customer': {
                    this.$store.dispatch(VERIFY_PRODUCT_DATA, this.productInfo)
                    this.$store.dispatch(VERIFY_PRICE_PLANS_DATA, this.pricePlan)
                    this.$store.dispatch(VERIFY_SELECTED_PRICE_PLAN_DATA, this.pricePlanSelected)
                    const selectedPackageObj = promotions
                        .find((e) => e.id === this.promotion).packages
                        .find((e) => e.id === this.selectedPackage)
                    const nas = selectedPackageObj.proposition_mobile[0].nas_code.toString()
                    if (this.isPaysmooth) {
                        localStorage.setItem('paysmooth-data', JSON.stringify({
                            paysmooth_token: this.$route.query.paysmooth_token,
                            token: this.$route.query.token,
                            down_amount: (selectedPackageObj.price_after_discount_device_bundle_new_customer * parseInt(selectedPackageObj.down_payment_rate) / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                            down_rate: selectedPackageObj.down_payment_rate,
                            tenor: selectedPackageObj.tenor,
                            installment_amount: ((selectedPackageObj.price_after_discount_device_bundle_new_customer * (100 - parseInt(selectedPackageObj.down_payment_rate)) / 100 +
                                    (selectedPackageObj.price_after_discount_device_bundle_new_customer * (100 - parseInt(selectedPackageObj.down_payment_rate)) / 100 * (this.paysmoothConfig.interest) / 100) / 12 * parseInt(selectedPackageObj.tenor)) /
                                parseInt(selectedPackageObj.tenor)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                        }))
                    }

                    if (this.isSelectedNumbers && this.pricePlanSelected) {
                        await this.holdNumber(this.selectedNumbers.mobile)
                        this.$router.push({
                            name: 'online-store-bundle-verify',
                            params: {
                                id: this.productInfo.id,
                                nas: this.newCustomerParams.nas || nas,
                                number: this.selectedNumbers.mobile,
                                bundle: this.newCustomerParams.bundle,
                                propo: this.pricePlanParams.bundle_propo_code,
                                inventory_id: this.inventory_id
                            },
                            query: {
                                accs: this.accs,
                                token: this.$route.query.token,
                                paysmooth_token: this.$route.query.paysmooth_token,
                                pp: this.pricePlanSelected.id,
                                source_type: this.selectedSimSourceType,
                                camptype: 'device_bundle_new_customer',
                            }
                        })
                    }
                    break
                }
                case 'device_bundle_existing': {
                    this.$store.dispatch(VERIFY_MOBILE_NUMBER_DATA, this.dataVerify.mobile_number)
                    this.$store.dispatch(VERIFY_RESULT_DATA, this.resultVerify)

                    const config = Object.values(this.config.campaigns).find((e) => e.json_name === 'device_bundle_existing')
                    const query = {
                        type: this.selectedCampaignType.toString(),
                        accs: this.accs,
                        token: this.$route.query.token,
                        paysmooth_token: this.$route.query.paysmooth_token,
                        camptype: 'device_bundle_existing',
                        mobileNumber: this.dataVerify.mobile_number
                    }
                    if (this.selectedCampaignType === '3') {
                        this.$store.dispatch(VERIFY_SELECTED_PRICE_PLAN_DATA, this.pricePlanSelected)

                        const selectedAging = this.selectedAging?.toString() || '0'
                        const selectedPackageObj = promotions
                            .find((e) => e.id === this.promotion).packages
                            .find((e) => e.campaign_type === this.selectedCampaignType && e.aging === selectedAging).discount_list
                            .find((e) => e.id === this.selectedPackage)
                        query.aging = selectedAging
                        query.pp = selectedPackageObj.id.toString()
                        this.setVerifyData(selectedPackageObj)
                    } else {
                        query.campaign_redeem = this.isCampaignFreeDevice? 'free': 'normal'
                    }
                    query.advance_payment = this.dataVerifyMore?.advance_payment
                    query.contract = this.dataVerifyMore?.contract

                    if (this.isPaysmooth) {
                        const selectedPackageObj = promotions
                            .find((e) => e.id === this.promotion).packages.filter(item => item.campaign_type === '3')[0].discount_list
                            .find((e) => e.id === this.selectedPackage)
                        localStorage.setItem('paysmooth-data', JSON.stringify({
                            paysmooth_token: this.$route.query.paysmooth_token,
                            token: this.$route.query.token,
                            down_amount: ((this.inventory.price - selectedPackageObj.discount) * parseInt(selectedPackageObj.bundle_campaign_student_loan.down_payment_rate) / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                            down_rate: selectedPackageObj.bundle_campaign_student_loan.down_payment_rate,
                            tenor: selectedPackageObj.bundle_campaign_student_loan.tenor,
                            installment_amount: (((this.inventory.price - selectedPackageObj.discount) * (100 - this.downrate) / 100 +
                                    (this.inventory.price - selectedPackageObj.discount) * (100 - this.downrate) / 100 * (this.paysmoothConfig.interest) / 100 / 12 * parseInt(selectedPackageObj.bundle_campaign_student_loan.tenor)) /
                                parseInt(selectedPackageObj.bundle_campaign_student_loan.tenor)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                        }))
                    }

                    if (this.IoTPackage) {
                        if (this.selectedPackageIotCloud !== '' && this.selectedPackageIotDescription !== '') {
                            const IoTPackageInfo = {
                                cloud: this.selectedPackageIotCloud,
                                cloud_description: this.selectedPackageIotDescription,
                                iot_type: this.productInfo.iot_type
                            }
                            localStorage.removeItem('iot-package')
                            localStorage.setItem('iot-package', JSON.stringify(IoTPackageInfo))
                        }
                    }

                    if ((this.selectedCampaignType === '1' && this.resultVerify.is_pass) ||
                        (this.selectedCampaignType === '3' && this.resultVerify.is_pass && this.pricePlanSelected)) {
                        this.$router.push({
                            name: 'online-store-trueidbox-verify',
                            params: {
                                product: this.productInfo.id,
                                inventory: this.inventory.id.toString(),
                                promotion: config.id.toString()
                            },
                            query
                        })
                    }
                    break
                }
                case 'pre2post': {
                    if (this.pricePlanSelected && this.resultVerify.is_pass) {
                        this.$store.dispatch(VERIFY_SELECTED_PRICE_PLAN_DATA, this.pricePlanSelected)
                        this.$router.push({
                            name: 'online-store-trueidbox-verify',
                            params: {
                                product: this.productInfo.id,
                                inventory: this.inventory.id.toString(),
                                promotion: this.selectedPackage.toString()
                            },
                            query: {
                                type: '5',
                                camptype: 'pre2post',
                                accs: this.accs,
                                mobile: this.$route.query.mobile,
                                token: this.$route.query.token
                            }
                        })
                    }
                    break
                }
                case 'truemoveh' :
                case 'trueonline': {
                    this.$router.push({
                        name: 'online-store-trueidbox-verify',
                        params: {
                            product: this.productInfo.id,
                            inventory: this.inventory.id.toString(),
                            promotion: (this.selectPromotion?.promoId || '').toString()
                        },
                        query: {
                            type: this.promotion,
                            accs: this.accs,
                            token: this.$route.query.token
                        }
                    })
                    break
                }
                case 'prepaid_bundle': {
                    this.addPrepaidBundleToCart()
                    break
                }
                case 'handset_only': {
                    this.addHandsetOnlyToCart(true)
                    break
                }
                case 'physical-sim-campaign':
                case 'e-sim-campaign': {
                    if (this.productInfo.product_sim && this.productInfo.product_sim.sim_type === 'prepaid') {
                        if (this.selectedSimSourceType === 'e-sim' || (this.productInfo.product_sim.sim_source_type.length === 1 && this.productInfo.product_sim.sim_source_type[0] === 'physical-sim')) {
                            this.$router.push({
                                name: 'online-store-prepaid',
                                params: {
                                    id: this.productInfo.id
                                },
                                query: {
                                    nas_code: this.$route.query.nas_code,
                                    rc: this.$route.query.rc,
                                    token: this.$route.query.token,
                                    source_type: this.selectedSimSourceType
                                }
                            })
                        } else {
                            this.addHandsetOnlyToCart(true)
                        }
                    } else {
                        this.$router.push({
                            name: 'online-store-postpaid',
                            params: {
                                id: this.productInfo.id
                            },
                            query: {
                                nas_code: this.$route.query.nas_code,
                                rc: this.$route.query.rc,
                                token: this.$route.query.token,
                                source_type: this.selectedSimSourceType
                            }
                        })
                    }
                    break
                }
            }
        },
        async addHandsetOnlyToCart (redirect) {
            this.loading = true
            window.scrollTo(0, 0)
            const hash = window.localStorage.getItem('cart-id')
            const data = [{
                product_id: this.productInfo.id,
                inventory_id: this.inventory.id,
                quantity: this.quantity,
                store_id: this.productInfo.store_id,
                section: this.productInfo.section,
                token_coupon: this.productInfo.token_coupon,
                channel: 'tmh-website',
                pickup: this.productInfo.store.shipping_method?.PICKUP
            }]
            if (this.IoTPackage) {
                data.meta = {
                    cloud: this.selectedPackageIotCloud,
                    cloud_description: this.selectedPackageIotDescription,
                    iot_type: this.productInfo.iot_type
                }
            }
            if (this.isCampaignFreeDevice) {
                if (data[0]?.meta) {
                    data.meta.free_device = this.productInfo.config_free_device[this.promotion];
                } else {
                    data[0].meta = {
                        free_device: this.productInfo.config_free_device[this.promotion]
                    }
                }
            }

            if (this.isSimOnlyFlow) {
                data[0].meta = {
                    sim_source_type: this.selectedSimSourceType
                }
                data[0].sim_meta = [{
                    sim_type: this.productInfo.product_sim.sim_type,
                    sim_source_type: this.selectedSimSourceType
                }]
            }
            
            if (!this.productInfo.only_one_accessory) {
                this.accessories.forEach((accessory) => {
                    const accs = computeAddon(accessory, 'accessories', this.productInfo)
                    if (accs) data.push(accs)
                })
            } else if (this.accessories) {
                const accs = computeAddon(this.accessories, 'accessories', this.productInfo)
                if (accs) data.push(accs)
            }
            await updateEntPack(null, this.$route.query, this.productInfo, hash, { id: this.inventory.id })
            await this.updateCart(data, POST_UPDATE_CART, redirect)
            if (redirect) return
            await this.$store.dispatch(FETCH_CART, { id: hash })
            const totalQuantity = this.cart.data.record.reduce((result, item) => result + item.total_quantity, 0)
            window.dispatchEvent(new CustomEvent('cart-updated', {
                detail: { cart: totalQuantity }
            }))
            this.loading = false
        },
        async addPrepaidBundleToCart () {
            this.loading = true
            window.scrollTo(0, 0)
            const bundle = this.promotions.find((e) => e.id === this.promotion).packages[0]
            const hash = window.localStorage.getItem('cart-id')
            const main = bundle.inventories.find((e) => e.product_type === 'main_item' && e.inventory_id === this.inventory.id)
            const binding = bundle.inventories.find((e) => e.product_type === 'binding_item')
            const data = {
                hash,
                bundle_channel: 'tmvh-official-website',
                products: [
                    {
                        product_id: main.product_id,
                        inventory_id: main.inventory_id,
                        quantity: 1,
                        store_id: this.productInfo.store_id,
                        lang: 'th',
                        section: 'wemall',
                        user_id: '0',
                        bundle_hash: bundle.id,
                        bundle_ref_code: bundle.ref_code,
                        channel: 'tmh-website',
                        sku: this.inventory.sku
                    },
                    {
                        product_id: binding.product_id,
                        inventory_id: binding.inventory_id,
                        quantity: 1,
                        store_id: this.productInfo.store_id,
                        lang: 'th',
                        section: 'wemall',
                        user_id: '0',
                        bundle_hash: bundle.id,
                        bundle_ref_code: bundle.ref_code,
                        channel: 'tmh-website',
                        sim_meta: [
                            {
                                sim_type: 'prepaid',
                                product_info: {
                                    product_id: binding.product_id.replace(/\D/g, ''),
                                    product_type: 'sim',
                                    store_id: this.productInfo.store_id,
                                    inventory_id: binding.inventory_id,
                                    propo_code: bundle.proposition_data.api_output.nas_code
                                },
                                proposition: {
                                    term_short: bundle.proposition_data.api_output.term_short,
                                    id: bundle.proposition_data.api_output.id,
                                    name: bundle.proposition_data.api_output.name
                                }
                            }
                        ]
                    }
                ],
                user_id: '0',
                section: 'wemall'
            }

            if (this.IoTPackage) {
                data.products[0].meta = {
                    cloud: this.selectedPackageIotCloud,
                    cloud_description: this.selectedPackageIotDescription,
                    iot_type: this.productInfo.iot_type
                }
            }

            if (this.isCampaignFreeDevice) {
                if (data.products[0]?.meta) {
                    data.products[0].meta.free_device = this.productInfo.config_free_device[this.promotion];
                } else {
                    data.products[0].meta = {
                        free_device: this.productInfo.config_free_device[this.promotion]
                    }
                }
            }

            this.accessories.forEach((accessory) => {
                const accs = computeAddon(accessory, 'accessories', this.productInfo)
                if (accs) data.products.push(accs)
            })
            await this.updateCart(data, UPDATE_BUNDLE_CART)
        },
        async updateCart (data, action = POST_UPDATE_CART, redirect = true) {
            try {
                const result = await this.$store.dispatch(action, {
                    id: window.localStorage.getItem('cart-id'),
                    data
                })
                window.localStorage.setItem('cart-id', result.cart_hash)
                if (!redirect) return
                if (this.productInfo.store.shipping_method.PICKUP) {
                    this.$router.push('/pickup')
                } else {
                    this.$router.push(`/address?id=${result.cart_hash}`)
                }
            } catch (e) {
                if (e?.message === 'err-ent-pack') {
                    this.$router.push('/cart?error=030')
                } else if (e?.message?.en === 'prepaid_quantity_limit') {
                    this.$router.push(`/cart?error=013&pql_pid=${e.product_id}&pql_iid=${e.inventory_id}`)
                } else if (e?.message?.en === 'sku_limit') {
                    this.$router.push('/cart?error=020')
                } else if (e?.message?.en === 'pickup_at_seven_quantity_limit') {
                    this.$router.push('/cart?error=040')
                } else if (e?.message?.en === 'pickup_at_seven_product_in_cart') {
                    this.$router.push('/cart?error=040')
                } else {
                    this.loading = false
                }
            }
        },
        getWishlist () {
            if (this.user) {
                this.$store.dispatch(GET_WISHLIST, { user_id: this.user.user_id }).then(data => {
                    if (data.data[this.productInfo.id]) {
                        this.isWishlist = true
                    }
                })
            }
        },
        addWishlist () {
            if (this.user) {
                this.$store.dispatch(ADD_WISHLIST, { user_id: this.user.user_id, product_id: this.productInfo.id }).then(data => {
                    this.isWishlist = true
                })
            }
        },
        deleteWishlist () {
            if (this.user) {
                this.$store.dispatch(DELETE_WISHLIST, { user_id: this.user.user_id, product_id: this.productInfo.id }).then(data => {
                    this.isWishlist = false
                })
            }
        },
        /**
         * Handle after select promotion
         * @param {Object} data
         */
        changePromotion (data) {
            this.promotion = data.promotion
            this.isSpecialPromotion = data.isSpecialPromotion
            this.itemPromotionSelected = data.item
            this.toggeVerify()
        },
        changeQuantity (data) {
            this.quantity = data
        },
        changeselectedOption (data) {
            this.selectedOptions[data.title] = data.item
            this.quantityInStock = data.quantity
            if (this.itemPromotionSelected) {
                this.itemPromotionSelected = this.promotions.find(item => item.id === this.itemPromotionSelected.id) || this.promotions[0] || []
            }
            // For Sticky Bar
            this.initInfoStickyBar(this.selectedPackage)
            this.updateSelectedColor()
            this.updateSelectedCapacity()
        },
        // For Sticky Bar
        updateSelectedColor () {
            if (this.options[0]) {
                this.options[0].options.forEach((item) => {
                    if (item.id === this.selectedOptions[this.options[0].title]) {
                        this.selectedColor = item.title.th || item.title[$i18n.locale]
                    }
                })
            }
        },
        changeVerifyOTP (data) {
            this.result = data
        },
        updateSelectedCapacity () {
            if (this.options[1]) {
                this.options[1].options.forEach((item) => {
                    if (item.id === this.selectedOptions[this.options[1].title]) {
                        this.selectedCapacity = item.title.th || item.title[$i18n.locale]
                    }
                })
            }
        },
        smoothScrollToElement (id, offsetTop) {
            if (offsetTop === undefined) offsetTop = 0
            const headerElement = document.getElementsByTagName('HEADER')[0]
            const fixedHeaderOffset = window.getComputedStyle(headerElement).position === 'fixed' ? headerElement.offsetHeight : 0
            const element = document.getElementById(id)
            const offsetPos = this.getTotalOffsetTop(element) - fixedHeaderOffset - offsetTop
            window.scrollTo({ top: offsetPos, behavior: 'smooth' })
            this.setStickyBarCollapseWhenScreenSizeUnder(1221)
        },
        getTotalOffsetTop (element) {
            let totalOffsetTop = 0
            if (element && element.offsetParent) {
                do {
                    totalOffsetTop += element.offsetTop
                } while (element === element.offsetParent)
                return totalOffsetTop
            }
        },
        setStickyBarCollapseWhenScreenSizeUnder (maxWidth) {
            if (window.innerWidth < maxWidth) this.isStickyBarCollapse = true
        },
        truncString (str, maxLength) {
            if (str.length > maxLength) {
                return str.slice(0, maxLength - 1) + '...'
            } else {
                return str
            }
        },
        toggeVerify () {
            this.verifyOTP = true
            if (this.promotionVerify === this.promotion) {
                this.verifyOTP = false
            }
        },
        inShowings () {
            if (this.promotion === 'pre2post') {
                this.isShowing = 'p2p'
            } else if (this.promotion === 'device_bundle_existing') {
                this.isShowing = 'dbe'
            } else if (this.promotion === 'mnp_bundling_existing') {
                this.isShowing = 'mnp'
            } else if (this.promotion === 'device_bundle_new_customer') {
                this.isShowing = 'nc'
            } else if (this.promotion === 'mnp_bundling') {
                this.isShowing = 'mnp_bundling'
            } else {
                this.isShowing = ''
            }
        },
        async holdMnpNumber (bundleData) {
            return this.$store.dispatch(HOLD_MNP_RANDOM_NUMBER, {
                nas_code: bundleData.proposition_mobile[0].nas_code,
                mobile_number: this.selectedNumbers.mobile
            })
        },
        async fetchSimSourceTypeInformation (bundleId) {
            if (bundleId) {
                const filteredBundleForSimSourceType = this.productInfo.bundles[bundleId].inventories.find(inventory => inventory.product_type === 'binding_item')
                const simSourceTypeResult = await this.$store.dispatch(FETCH_PRODUCT_VERIFY_ESIM, { id: filteredBundleForSimSourceType.product_id })
                if (simSourceTypeResult.status_code === 200) {
                    this.simSourceTypeInformation = simSourceTypeResult.data.sim_source_type
                }
            }
        },
        simSourceTypeMethod (data) {
            this.selectedSimSourceType = data
        },
        setSelectedSimSourceType () {
            this.selectedSimSourceType = 'physical-sim'
        },
        showEsimDetailDialog () {
            this.$refs.esim_detail_dialog.open()
        },
        getCurrentBundleId () {
            if (this.productInfo && this.productInfo.bundles) {
                this.productInfo.bundles.forEach((bundle, index) => {
                    if (bundle.id === this.selectedPackage.toString()) {
                        this.selectedBundleId = index
                    }
                })
            }
        },
        displayChatShop () {
            const chatShop = $('.fixed-chatshop')
            const assistBox = $('.assist-modal-box')

            if (this.isStickyBarCollapse) {
                chatShop.removeClass('chat-shop-bottom-140')
                chatShop.removeClass('chat-shop-hide')
                assistBox.removeClass('chat-shop-hide')
            } else {
                chatShop.addClass('chat-shop-bottom-140')
                chatShop.addClass('chat-shop-hide')
                assistBox.addClass('chat-shop-hide')
            }
        }
    }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
