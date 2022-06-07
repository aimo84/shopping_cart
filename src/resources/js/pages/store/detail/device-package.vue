<template>
    <div
        v-if="packages"
        class="grid scroll-container"
    >
        <button
            aria-label="Scroll left"
            class="hidden lg:grid place-items-center p-1"
            @click="scroll('packages', -300)"
        >
            <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.21" d="M10.0562 1L1 14.5L10.0562 28" stroke="black"/>
            </svg>
        </button>
        <!-- Paysmooth Package -->
        <div
            v-if="packages && isPaysmooth"
            class="grid gap-2 grid-flow-col items-start justify-start overflow-x-auto overflow-y-hidden hide-scrollbar full-width-scroll full-width-scroll-thick"
            ref="packages"
        >
            <button
                class="h-full rounded-xl cursor-default"
                :style="'padding: 3px;'"
            >
                <!-- selected red border -->
                <div
                    class="flex flex-col rounded-lg shadow-gray-500 h-full overflow-hidden"
                    :class="{
                      'shadow-thick-red-500': (
                        (paysmoothPackages.find(item => item.id === selectedPackage))),
                    }"
                >
                    <!-- PAYSMOOTH HEAD -->
                    <div
                      class="bg-red-pink-gradient text-white text-4xl  p-4 py-2"
                    >
                        <div style="font-size: 24px;">
                            {{ productInfo.title[$i18n.locale] || productInfo.title.th }} {{ selectedCapacities }} <span class="font-bold yellow-text">{{ Locale.paysmooth.down[$i18n.locale] }} {{ downrate }}%</span>
                        </div>
                        <div style="font-size: 16px;">{{ Locale.paysmooth.down_amount[$i18n.locale] }} {{
                            promotion === 'device_bundle_new_customer' ?
                            (packages[0].price_after_discount_device_bundle_new_customer*(downrate)/100).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2 }) : promotion === 'device_bundle_existing' ?
                            ((inventory.price - packages[0].discount_list[0].discount)*(downrate)/100).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ((inventory.price - packages[0].discount)*(downrate)/100).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2 })
                        }} {{ Locale.paysmooth.baht[$i18n.locale] }} {{ Locale.paysmooth.min_credit[$i18n.locale] }} {{
                            promotion === 'device_bundle_new_customer' ?
                            (packages[0].price_after_discount_device_bundle_new_customer*(100-downrate)/100).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2 }) : promotion === 'device_bundle_existing' ?
                            ((inventory.price - packages[0].discount_list[0].discount)*(100-downrate)/100).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ((inventory.price - packages[0].discount)*(100-downrate)/100).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2 })
                        }} {{ Locale.paysmooth.baht[$i18n.locale] }}
                        </div>
                    </div>
                    <div class="flex flex-col gap-1 p-2 flex-1" style="padding-left: 0px">
                      <!-- PAYSMOOTH DES -->
                      <div
                        class="grid gap-1 grid-flow-col divide-x divide-gray-600 items-start flex-1"
                      >
                        <div
                          v-for="(list, dKey) in paysmoothPackages"
                          :key="dKey"
                          class="flex flex-col grid gap-1 h-full min-w-package cursor-pointer"
                          :class="{'min-w-m-package' : $i18n.locale === 'en'}"
                          @click="handleSelectPaysmoothPackages(promotion, list)"
                        >
                          <div class="text-center pt-3">
                            <div class="text-2xl font-bold px-2">{{ Locale.paysmooth.installment[$i18n.locale] }} {{
                                promotion === 'device_bundle_new_customer' ?
                                list.tenor : promotion === 'device_bundle_existing' ?
                                list.bundle_campaign_student_loan.tenor : list.bundle_campaign_student_loan.tenor
                                }} {{ Locale.paysmooth.month[$i18n.locale] }}</div>
                            <div class="text-2xl px-2">{{ Locale.paysmooth.installment_period[$i18n.locale] }}</div>
                            <div class="text-2xl font-bold text-red pt-2"> {{
                                promotion === 'device_bundle_new_customer' ?
                                ((list.price_after_discount_device_bundle_new_customer*(100-downrate)/100 +
                                            (list.price_after_discount_device_bundle_new_customer*(100-downrate)/100 * (paysmoothConfig.interest)/100) /12 * parseInt(list.tenor) )
                                            /parseInt(list.tenor)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2 }) : promotion === 'device_bundle_existing' ?
                                (((inventory.price - list.discount)*(100-downrate)/100 +
                                            ((inventory.price - list.discount)*(100-downrate)/100 * (paysmoothConfig.interest)/100) /12 * parseInt(list.bundle_campaign_student_loan.tenor ))
                                            /parseInt(list.bundle_campaign_student_loan.tenor)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2 }) :
                                (((inventory.price - list.discount)*(100-downrate)/100 +
                                            (inventory.price - list.discount)*(100-downrate)/100 * (paysmoothConfig.interest)/100 /12 * parseInt(list.bundle_campaign_student_loan.tenor))
                                            /parseInt(list.bundle_campaign_student_loan.tenor)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2 })
                                }} {{ Locale.paysmooth.baht[$i18n.locale] }}
                            </div>
                          </div>
                          <div
                            class="flex justify-between items-end pt-4"
                          >
                            <div />
                            <div
                              class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                              :class="{
                                'bg-red-500 border-red-500': selectedPackage === list.id || (promotion === 'device_bundle_existing' && (selectedPackage === list.id))
                              }"
                            >
                              <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                                  :fill="`${(selectedPackage === list.id) || (promotion === 'device_bundle_existing' && (selectedPackage === list.id)) ? '#FFF' : '#CCC'}`"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="flex justify-between items-end"
                      >
                        <div />
                      </div>
                    </div>
                </div>
            </button>
        </div>
        <div
            v-else-if="packages && productInfo.product_type === 'mnp'"
            class="grid gap-2 grid-flow-col items-start justify-start overflow-x-auto overflow-y-hidden hide-scrollbar full-width-scroll full-width-scroll-thick"
            ref="packages"
        >
            <button
                v-for="(item, key) in packages"
                :key="key"
                :data-test-package-id="item.id"
                 class="h-full rounded-xl"
                 :class="{'shadow-lg': promotion !== 'device_bundle_existing' && selectedPackage === item.id}"
                 style="'padding: 3px; width: 198px;'"
                 @click="setMNPCode(item)"
            >
                <div
                  class="flex flex-col rounded-lg shadow-gray-500 h-full overflow-hidden "
                  :class="{'shadow-thick-red-500': promotion !== 'device_bundle_existing' && selectedPackage === item.id}"
                  >
                  <div
                      v-if="productInfo.product_type === 'mnp'"
                       class="bg-red-pink-gradient text-white text-4xl font-bold p-4 py-3"
                    >
                      {{ Locale.apply_now[$i18n.locale] }}
                  </div>
                  <div class="flex flex-col gap-1 p-2 flex-1">
                  <div
                    class="my-0 text-left text-xl font-light flex-1"
                    style="min-width: 180px; max-width: 240px;"
                  >
                      <div  class="my-0 text-center text-2xl font-bold flex-1 " :class="{'text-gray-22' : productInfo.product_type === 'mnp'}">
                        {{ item.name }}
                      </div>
                    </div>
                  <div class="flex justify-between items-end">
                    <div></div>
                    <div
                      class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                      :class="{
                            'bg-red-500 border-red-500':
                              (promotion !== 'device_bundle_existing' && selectedPackage === item.id)
                          }"
                    >
                      <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                        :fill="`${promotion !== 'device_bundle_existing' && selectedPackage === item.id ? '#FFF' : '#CCC'}`"
                            />
                      </svg>
                    </div>
                  </div>
                  </div>
                </div>
            </button>
        </div>
        <template
            v-else-if="packages && productInfo.product_type !== 'mnp'"
            ref="packages"
        >
            <template v-if="promotion === 'device_bundle_existing' && IoTPackage">
                <div
                    v-for="(item, key) in packages"
                    :key="key"
                    class="grid gap-2 grid-flow-col items-start justify-start overflow-x-auto overflow-y-hidden hide-scrollbar full-width-scroll full-width-scroll-thick"
                    ref="packages"
                >
                    <button
                        v-for="(itemDiscountList, itemDiscountListKey) in item.discount_list"
                        :key="itemDiscountListKey"
                        :data-test-package-id="item.id"
                        class="h-full rounded-xl"
                        :class="{
                            'shadow-lg': promotion === 'device_bundle_existing' && selectedPackage === itemDiscountList.id,
                            'cursor-default': IoTPackage
                        }"
                        :style="(promotion === 'device_bundle_existing' || IoTPackage) ? item.cloud_campaign === null ? 'padding: 0px;' : 'padding: 3px;' : 'padding: 3px; width: 198px;' "
                        @click="handleSelectPackage (promotion, item)"
                    >
                        <template v-if="itemDiscountList !== null">
                            <div
                                class="flex flex-col rounded-lg shadow-gray-500 h-full overflow-hidden"
                                :class="{
                                    'shadow-thick-red-500': promotion === 'device_bundle_existing' && selectedPackage === itemDiscountList.id
                                }"
                            >
                                <div
                                    class="bg-red-pink-gradient text-white text-3xl font-bold p-4 py-3"
                                >
                                    <div v-if="IoTPackage && itemDiscountList !== null">
                                        <div style="margin-bottom: 5px">VAT {{ (inventory.price - itemDiscountList.discount).toLocaleString() }}.-</div>
                                        <div>{{ itemDiscountList.cloud_campaign.header[$i18n.locale] }}</div>
                                    </div>
                                </div>

                                <div class="flex flex-col gap-1 p-2 flex-1" style="padding-left: 0px">
                                    <div class="grid gap-1 grid-flow-col divide-x divide-gray-600 items-start flex-1">
                                        <div
                                            v-for="(itemCloudCampaignDiscountList, itemCloudCampaignDiscountListKey) in itemDiscountList.cloud_campaign.campaign"
                                            :key="itemCloudCampaignDiscountListKey"
                                            class="flex flex-col grid gap-1"
                                            :class="{'cursor-pointer': IoTPackage}"
                                            style="min-width: 160px;"
                                            @click="handleSelectIoTPackage(itemDiscountList.id, itemCloudCampaignDiscountList.cloud, itemCloudCampaignDiscountList.title)"
                                        >
                                            <template v-if="itemCloudCampaignDiscountList">
                                                <ul class="my-0 text-left text-xl font-light flex-1">
                                                    <li>{{ itemCloudCampaignDiscountList.title[$i18n.locale] }}</li>
                                                    <li>{{ Locale.againg_package_1[$i18n.locale] }} {{ itemDiscountList.rc }} {{ Locale.againg_package_2[$i18n.locale] }}</li>
                                                    <li>
                                                    <template v-if="itemDiscountList.contract">
                                                        {{ Locale.contract[$i18n.locale] }}
                                                        {{ itemDiscountList.contract }}
                                                        {{ parseInt(itemDiscountList.contract) > 1 ? Locale.months[$i18n.locale]: Locale.month[$i18n.locale] }}
                                                    </template>
                                                    <template v-else> {{ Locale.no_contract[$i18n.locale] }}</template>
                                                    </li>
                                                    <li v-if="itemDiscountList.advance_payment">
                                                    {{ Locale.advance_payment[$i18n.locale] }}:
                                                    {{ parseFloat(itemDiscountList.advance_payment).toLocaleString() }}฿
                                                    </li>
                                                </ul>
                                                <div
                                                    class="flex justify-between items-end"
                                                >
                                                    <div />
                                                    <div
                                                        class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                                                        :class="{
                                                            'bg-red-500 border-red-500': (selectedPackageIotCloudInDevicePackageComponent === itemCloudCampaignDiscountList.cloud)
                                                        }"
                                                    >
                                                        <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                            d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                                                            :fill="`${( selectedPackageIotCloudInDevicePackageComponent === itemCloudCampaignDiscountList.cloud ) ? '#FFF' : '#CCC'}`"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </button>
                </div>
            </template>
            <template v-else>
                <div class="grid gap-2 grid-flow-col items-start justify-start overflow-x-auto overflow-y-hidden hide-scrollbar full-width-scroll full-width-scroll-thick" ref="packages">
                    <button
                        v-for="(item, key) in packages"
                        :key="key"
                        :data-test-package-id="item.id"
                        class="h-full rounded-xl hover:shadow-lg"
                        :class="{
                            'shadow-lg': (
                                (promotion !== 'device_bundle_existing' && selectedPackage === item.id) ||
                                (promotion === 'device_bundle_existing' && item.campaign_type !== '3' && selectedPackage === item.discount_list[0].id) ||
                                (promotion === 'device_bundle_existing' && item.campaign_type === '3' && item.discount_list.find((e) => e.id === selectedPackage) && selectedAging === (item.aging || '0'))
                                ),
                            'cursor-default': item.campaign_type === '3' || IoTPackage
                        }"
                        :style="(promotion === 'device_bundle_existing' || IoTPackage) ? item.cloud_campaign === null ? 'padding: 0px;' : 'padding: 3px;' : 'padding: 3px; width: 198px;' "
                        @click="handleSelectPackage (promotion, item)"
                    >
                        <template v-if="item.cloud_campaign !== null">
                            <div
                                class="flex flex-col rounded-lg shadow-gray-500 h-full overflow-hidden"
                                :class="{
                                    'shadow-thick-red-500': (
                                    (promotion !== 'device_bundle_existing' && selectedPackage === item.id) ||
                                    (promotion === 'device_bundle_existing' && item.campaign_type !== '3' && selectedPackage === item.discount_list[0].id) ||
                                    (promotion === 'device_bundle_existing' && item.campaign_type === '3' && item.discount_list.find((e) => e.id === selectedPackage) && selectedAging === (item.aging || '0'))
                                    ),
                                }"
                            >
                                <div
                                    v-if="promotion === 'device_bundle_existing'"
                                    class="grid place-items-center bg-red-pink-gradient text-white text-xl p-4 py-2 mw-[350px] h-[100px]"
                                >
                                    <template v-if="parseInt(item.aging) !== 365 && parseInt(item.aging) !== 90">
                                    {{ Locale.campaign_name[item.campaign_type][$i18n.locale] }}
                                    </template>
                                    <template v-if="item.campaign_type === '3'">
                                    <template v-if="parseInt(item.aging) === 365">
                                        {{ Locale.aging_365_days[$i18n.locale] }}
                                    </template>
                                    <template v-else-if="parseInt(item.aging) === 90">
                                        {{ Locale.aging_90_days[$i18n.locale] }}
                                    </template>
                                    <template v-else>
                                        <template v-if="parseInt(item.aging)">/ {{ Locale.aging[$i18n.locale] }} {{ item.aging }} {{ Locale.days[$i18n.locale] }}</template>
                                        <template v-else>/ {{ Locale.no_aging[$i18n.locale] }}</template>
                                    </template>
                                    </template>
                                </div>
                                <div
                                    v-else-if="
                                        promotion === 'mnp_bundling_existing' ||
                                        promotion === 'pre2post' ||
                                        promotion === 'device_bundle_new_customer' && item.privilege_type === 'entertainment_sim'
                                    "
                                    class="bg-red-pink-gradient text-white text-3xl font-bold p-4 py-3"
                                    :class="{'grid place-items-center mw-[185px] h-[70px]' : (promotion === 'device_bundle_new_customer' && item.privilege_type === 'entertainment_sim') || item.meta === 'entertainment_sim'}"
                                >
                                    <div v-if="IoTPackage && item.cloud_campaign !== null">
                                        <div style="margin-bottom: 5px">VAT {{ (inventory.price - item.discount).toLocaleString() }}.-</div>
                                        <div> {{ item.cloud_campaign.header[$i18n.locale] }} </div>
                                    </div>
                                    <div v-else-if="item.meta === 'entertainment_sim'" class="text-26">{{item.package_name}}</div>
                                    <div v-else-if="promotion === 'device_bundle_new_customer' && item.privilege_type === 'entertainment_sim'" class="text-26">{{item.proposition_mobile[0].package_name}}</div>
                                    <div v-else class="text-44"> {{ (inventory.price - item.discount).toLocaleString() }}.-</div>
                                </div>
                                <div
                                    v-else
                                    class="bg-red-pink-gradient text-white text-3xl font-bold p-4 py-3"
                                >
                                    <template v-if="item.price_after_discount_device_bundle_new_customer">
                                        <div v-if="IoTPackage && item.cloud_campaign !== null">
                                            <div style="margin-bottom: 5px">VAT {{ item.price_after_discount_device_bundle_new_customer.toLocaleString() }}.-</div>
                                            <div> {{item.cloud_campaign.header[$i18n.locale] }} </div>
                                        </div>
                                        <div v-else class="text-44">{{ item.price_after_discount_device_bundle_new_customer.toLocaleString() }}.-</div>
                                    </template>
                                </div>
                                <div class="flex flex-col gap-1 flex-1" style="padding-left: 0px">
                                    <div
                                        v-if="promotion === 'device_bundle_existing' && !IoTPackage"
                                        class="grid grid-flow-col divide-x divide-gray-600 items-start flex-1"
                                    >
                                        <div
                                            v-for="(list, dKey) in item.discount_list"
                                            :key="dKey"
                                            class="flex flex-col grid h-full text-20 font-light justify-between"
                                            :class="{'cursor-pointer': item.campaign_type === '3'}"
                                            :style="`min-width:192px`"
                                            @click="handleSelectPackageDetail(list, item, dKey)"
                                        >
                                            <template v-if="!IoTPackage">
                                                <div>
                                                    <div class="text-center text-3xl text-red font-bold pt-2">
                                                        {{ (inventory.price - list.discount).toLocaleString() }}.-
                                                    </div>
                                                    <div style="padding: 0.5rem 0.5rem 2px 0.5rem">
                                                    <span v-if="(list.meta == 'campaign_redeem_free_device' || list.meta == 'campaign_free_device') && typeof productInfo.config_free_device !== 'undefined' && typeof productInfo.config_free_device[promotion] !== 'undefined'">
                                                      <span v-html="productInfo.config_free_device[promotion].label_package[$i18n.locale]"></span> {{ (inventory.price - list.discount).toLocaleString() }}.-
                                                      <br/>
                                                    </span>
                                                        ใช้หรือสมัครแพ็กเกจรายเดือน
                                                        <span class="font-bold text-22">{{ list.rc.toLocaleString() }}.-</span>
                                                        {{ Locale.user_package_above[$i18n.locale] }}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div v-if="list.contract">
                                                        <div v-if="list.advance_payment && parseInt(list.advance_payment) > 0" class="advance-with-contract">
                                                            {{ Locale.advance_payment[$i18n.locale] }}
                                                            <span class="font-bold text-22">{{ parseFloat(list.advance_payment).toLocaleString() }}.-</span>
                                                        </div>
                                                        <template>
                                                            <div style="padding: 2px 0.5rem 0px 0.5rem">
                                                                {{ Locale.contract[$i18n.locale] }}
                                                                <span class="font-bold text-22">
                                                        {{ list.contract }}
                                                        {{ parseInt(list.contract) > 1 ? Locale.months[$i18n.locale]: Locale.month[$i18n.locale] }}
                                                        </span>
                                                            </div>
                                                        </template>
                                                    </div>
                                                    <div v-else>
                                                        <div v-if="list.advance_payment" class="divider" style="margin: 5px 15px;"/>
                                                        <div v-if="list.advance_payment">
                                                            {{ Locale.advance_payment[$i18n.locale] }}
                                                            <div class="font-bold text-34" style="line-height: 18px;">{{ parseFloat(list.advance_payment).toLocaleString() }}.-</div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        v-if="item.campaign_type === '3'"
                                                        class="flex justify-between items-end p-2"
                                                        style="padding-top: 0px;"
                                                    >
                                                        <div />
                                                        <div
                                                            class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                                                            :class="{
                                                            'bg-red-500 border-red-500': selectedPackage === list.id
                                                        }"
                                                        >
                                                            <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                                                                    :fill="`${(selectedPackage === list.id) ? '#FFF' : '#CCC'}`"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                    <template v-else-if="promotion !== 'device_bundle_existing' && IoTPackage">
                                        <div class="grid grid-flow-col divide-x divide-gray-600 items-start flex-1">
                                            <div
                                                v-for="(itemList, dKey) in item.cloud_campaign.campaign"
                                                :key="dKey"
                                                class="flex flex-col grid p-2"
                                                :class="{'cursor-pointer': IoTPackage}"
                                                style="min-width: 160px; padding-left: 0;"
                                                @click="handleSelectIoTPackageTwo(itemList.cloud, itemList.title)"
                                            >
                                                <template v-if="itemList">
                                                    <ul class="my-0 text-left text-xl font-light flex-1">
                                                        <li> {{ itemList.title[$i18n.locale] }} </li>
                                                        <template>
                                                            <li v-if="promotion === 'mnp_bundling_existing'">
                                                                {{ Locale.mnp_user_package[$i18n.locale] }}
                                                                {{ item.rc }}
                                                                {{ Locale.user_package_above[$i18n.locale] }}
                                                            </li>
                                                            <li v-else-if="promotion === 'pre2post'">
                                                                {{ Locale.pre2post_user_package[$i18n.locale] }}
                                                                {{ item.rc }}
                                                                {{ Locale.user_package_above[$i18n.locale] }}
                                                            </li>
                                                            <li v-else-if="item.name && !IoTPackage">
                                                                {{ item.name }}
                                                            </li>
                                                        </template>
                                                        <template>
                                                            <li v-if="item.contract">
                                                                {{ Locale.contract[$i18n.locale] }}
                                                                {{ item.contract }}
                                                                {{ parseInt(item.contract) > 1 ? Locale.months[$i18n.locale]: Locale.month[$i18n.locale] }}
                                                            </li>
                                                            <li v-else>{{ Locale.no_contract[$i18n.locale] }}</li>
                                                        </template>
                                                        <li v-if="item.advance_payment">
                                                            {{ Locale.advance_payment[$i18n.locale] }}:
                                                            {{ parseFloat(item.advance_payment).toLocaleString() }}฿
                                                        </li>
                                                    </ul>
                                                    <div
                                                        class="flex justify-between items-end"
                                                    >
                                                        <div />
                                                        <div
                                                            class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                                                            :class="{
                                                                'bg-red-500 border-red-500': selectedPackageIotCloudInDevicePackageComponent === itemList.cloud
                                                            }"
                                                        >
                                                            <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                                                                :fill="`${(selectedPackageIotCloudInDevicePackageComponent === itemList.cloud) ? '#FFF' : '#CCC'}`"
                                                            />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-else-if="!IoTPackage">
                                        <div
                                            class="my-0 text-center text-20 font-light flex-1 flex flex-col justify-between"
                                            style="min-width: 180px; max-width: 240px;"
                                        >
                                            <template>
                                                <div style="padding: 0.5rem 0.5rem 2px 0.5rem">
                                                    <span v-if="(item.meta == 'campaign_redeem_free_device' || item.meta == 'campaign_free_device' || item.privilege_type == 'campaign_free_device' || item.privilege_type == 'campaign_redeem_free_device') && typeof productInfo.config_free_device !== 'undefined' && typeof productInfo.config_free_device[promotion] !== 'undefined'">
                                                        <span v-html="productInfo.config_free_device[promotion].label_package[$i18n.locale]"></span>
                                                        <span v-if="item.price_after_discount_device_bundle_new_customer">{{ item.price_after_discount_device_bundle_new_customer.toLocaleString() }}.-</span>
                                                        <span v-else>{{ (inventory.price - item.discount).toLocaleString() }}.-</span>
                                                        <br/>
                                                    </span>
                                                    <div v-if="promotion === 'mnp_bundling_existing'">
                                                        {{ Locale.mnp_user_package[$i18n.locale] }}
                                                        <span class="font-bold text-22">{{ item.rc.toLocaleString() }}.-</span>
                                                        {{ Locale.user_package_above[$i18n.locale] }}
                                                    </div>
                                                    <div v-else-if="promotion === 'pre2post'">
                                                        {{ Locale.pre2post_user_package[$i18n.locale] }}<br/>
                                                        <span class="font-bold text-22">{{ item.rc.toLocaleString() }}.-</span>
                                                        {{ Locale.user_package_above[$i18n.locale] }}
                                                    </div>
                                                    <div v-else-if="promotion === 'device_bundle_new_customer' && item.baseline">
                                                        เมื่อเปิดเบอร์ใหม่ พร้อมแพ็กเกจ
                                                        <span class="font-bold text-22">{{ parseInt(item.baseline).toLocaleString() }}.-</span>
                                                        {{ Locale.user_package_above[$i18n.locale] }}
                                                    </div>
                                                    <div v-else-if="item.baseline">
                                                        เมื่อเปิดเบอร์พร้อมย้ายค่าย<br/>เบอร์เดิม พร้อมแพ็กเกจ<br/>
                                                        <span class="font-bold text-22">{{ parseInt(item.baseline).toLocaleString() }}.-</span>
                                                        {{ Locale.user_package_above[$i18n.locale] }}
                                                    </div>
                                                </div>
                                            </template>
                                            <div v-if="item.contract">
                                                <div v-if="item.advance_payment && parseInt(item.advance_payment) > 0" class="advance-with-contract">
                                                    {{ Locale.advance_payment[$i18n.locale] }}
                                                    <span class="font-bold text-22">{{ parseFloat(item.advance_payment).toLocaleString() }}.-</span>
                                                </div>
                                                <template>
                                                    <div style="padding: 2px 0.5rem 0px 0.5rem">
                                                        {{ Locale.contract[$i18n.locale] }}
                                                        <span class="font-bold text-22">
                                                            {{ item.contract }}
                                                            {{ parseInt(item.contract) > 1 ? Locale.months[$i18n.locale]: Locale.month[$i18n.locale] }}
                                                        </span>
                                                    </div>
                                                </template>
                                            </div>
                                            <div v-else>
                                                <div v-if="item.advance_payment" class="divider" style="margin: 5px 15px;"/>
                                                <div v-if="item.advance_payment">
                                                    {{ Locale.advance_payment[$i18n.locale] }}
                                                    <div class="font-bold text-34" style="line-height: 18px;">{{ parseFloat(item.advance_payment).toLocaleString() }}.-</div>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                    <div
                                        v-if="item.campaign_type !== '3' && !IoTPackage"
                                        class="flex justify-between items-end p-2"
                                        style="padding-top: 0px;"
                                    >
                                        <div />
                                        <div
                                            class="grid place-items-center border border-gray-80 rounded-full w-[20px] h-[20px]"
                                            :class="{
                                            'bg-red-500 border-red-500':
                                                (promotion === 'device_bundle_existing' && selectedPackage === item.discount_list[0].id) ||
                                                (promotion !== 'device_bundle_existing' && selectedPackage === item.id)
                                            }"
                                        >
                                            <svg width="14" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.407.03c-.307.01-.6.14-.812.361-2.29 2.294-4.378 4.55-6.59 6.803L2.296 5.03a1.185 1.185 0 0 0-1.662.184 1.182 1.182 0 0 0 .185 1.662l3.545 2.837c.471.375 1.148.337 1.574-.09 2.545-2.55 4.83-5.06 7.327-7.563A1.183 1.183 0 0 0 12.407.03Z"
                                                :fill="`${
                                                (
                                                    (promotion === 'device_bundle_existing' && selectedPackage === item.discount_list[0].id) ||
                                                    (promotion !== 'device_bundle_existing' && selectedPackage === item.id)
                                                ) ? '#FFF' : '#CCC'
                                                }`"
                                            />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </button>
                </div>
            </template>
        </template>
        <button
            aria-label="Scroll right"
            class="hidden lg:grid place-items-center cursor-pointer p-1"
            @click="scroll('packages', 300)"
            >
            <svg width="11" height="29" viewBox="0 0 11 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.21" d="M0.943751 1L10 14.5L0.943751 28" stroke="black"/>
            </svg>
        </button>
    </div>
</template>

<script>
  export default {
    props: [
      'inventory',
      'packages',
      'promotion',
      'selectedPackages',
      'selectedAgings',
      'selectedCampaignTypes',
      'Locale',
      'isPaysmooth',
      'productInfo',
      'paysmoothPackages',
      'downrate',
      'paysmoothConfig',
      'IoTPackage',
      'itemDiscountList',
      'selectedPackageIotCloud',
      'selectedPackageIotDescription',
      'selectedCapacities'
    ],
    data () {
      return {
        selectedPackage: this.selectedPackages,
        selectedCampaignType: this.selectedCampaignTypes,
        selectedAging: this.selectedAgings,
        selectedPackageIotCloudInDevicePackageComponent: null,
        selectedPackageIotDescriptionInDevicePackageComponent: null,
        itemId: null,
        isHandlePackageFunctionSkipStatus: false
      }
    },
    watch: {
      selectedPackages () {
        this.selectedPackage = this.selectedPackages
      }
    },
    mounted () {
      this.$watch('promotion', () => {
        this.selectedAging = this.selectedAgings
        this.selectedPackageIotCloudInDevicePackageComponent = this.$parent.selectedPackageIotCloud
        this.selectedPackageIotDescriptionInDevicePackageComponent = this.$parent.selectedPackageIotDescription
        this.setItemId(this.selectedPackage)
      })
      this.selectedPackageIotCloudInDevicePackageComponent = this.$parent.selectedPackageIotCloud
      this.selectedPackageIotDescriptionInDevicePackageComponent = this.$parent.selectedPackageIotDescription
      this.setItemId(this.selectedPackage)
    },
    methods: {
      scroll (ref, offset) {
        const reference = Array.isArray(this.$refs[ref]) ? this.$refs[ref][0] : this.$refs[ref]
        reference.scrollBy({ left: offset, behavior: 'smooth' })
      },
      handleSelectPackage (promotion, item) {
        if (promotion === 'device_bundle_existing') {
          if (item.campaign_type !== '3' && !this.IoTPackage) {
            this.selectedPackage = item.discount_list[0].id
            this.selectedCampaignType = item.campaign_type
            this.selectedAging = undefined
          }
          this.$emit('selectPackageItem', item)
        } else {
          this.selectedPackage = item.id
          this.selectedCampaignType = undefined
          this.selectedAging = undefined
          this.$emit('selectPackageItem', this.selectedPackage)
        }

        if (item.id && this.IoTPackage) {
          const beforeItemId = this.itemId
          this.setItemId(item.id)
          const afterItemId = this.itemId

          if ((beforeItemId !== afterItemId) && (this.isHandlePackageFunctionSkipStatus === false)) {
            this.selectedPackageIotCloudInDevicePackageComponent = item.cloud_campaign.campaign[0].cloud
            this.selectedPackageIotDescriptionInDevicePackageComponent = item.cloud_campaign.campaign[0].title[this.$i18n.locale]
            this.$parent.selectedPackageIotCloud = item.cloud_campaign.campaign[0].cloud
            this.$parent.selectedPackageIotDescription = item.cloud_campaign.campaign[0].title[this.$i18n.locale]
          }
          this.isHandlePackageFunctionSkipStatus = false
        }

        this.$parent.selectedPackage = this.selectedPackage
        this.$parent.selectedCampaignType = this.selectedCampaignType
        this.$parent.selectedAging = this.selectedAging
      },
      /*
       * Only handle case device_bundle_existing
       */
      handleSelectPackageDetail (list, item, dKey) {
        if (this.promotion === 'device_bundle_existing' && item.campaign_type === '3') {
          this.selectedPackage = list.id
          this.selectedAging = item.aging || '0'
          this.selectedCampaignType = item.campaign_type
          this.$parent.selectedPackage = this.selectedPackage
          this.$parent.selectedCampaignType = this.selectedCampaignType
          this.$parent.selectedAging = this.selectedAging
        }
        this.$emit('selectPackageItemDetail', list, item, dKey)
      },
      handleSelectPaysmoothPackages (promotion, list) {
        if (promotion === 'device_bundle_existing') {
          if (list.campaign_type !== '3') {
            this.selectedPackage = list.id
            this.selectedCampaignType = list.campaign_type
            this.selectedAging = undefined
          } else {
            this.selectedPackage = list.id
            this.selectedAging = this.packages.find(item => item => campaign_type === '3').aging || '0'
            this.selectedCampaignType = '3'
          }
          this.$parent.selectedPackage = this.selectedPackage
          this.$parent.selectedCampaignType = this.selectedCampaignType
          this.$parent.selectedAging = this.selectedAging
        } else {
          this.selectedPackage = list.id
          this.selectedCampaignType = undefined
          this.selectedAging = undefined
          this.$parent.selectedPackage = this.selectedPackage
          this.$parent.selectedCampaignType = this.selectedCampaignType
          this.$parent.selectedAging = this.selectedAging
        }
      },
      setMNPCode (item) {
        this.$parent.setMNPCode(item)
      },
      handleSelectIoTPackage (id, cloud, title) {
        this.selectedPackage = id
        this.selectedPackageIotCloudInDevicePackageComponent = cloud
        this.selectedPackageIotDescriptionInDevicePackageComponent = title
        this.$parent.selectedPackage = id
        this.$parent.selectedPackageIotCloud = cloud
        this.$parent.selectedPackageIotDescription = title
      },
      handleSelectIoTPackageTwo (cloud, title) {
        this.selectedPackageIotCloudInDevicePackageComponent = cloud
        this.selectedPackageIotDescriptionInDevicePackageComponent = title
        this.$parent.selectedPackageIotCloud = cloud
        this.$parent.selectedPackageIotDescription = title
        this.isHandlePackageFunctionSkipStatus = true
      },
      setItemId (id) {
        this.itemId = id
      }
    }
  }
</script>

<style lang="scss">
    // @import './styles.scss';
</style>
