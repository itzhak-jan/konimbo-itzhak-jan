export type Root = AllRootDataModel[]

export interface AllRootDataModel {
  id: number
  delivery_time: number
  zap_scan: number
  seo_description: string
  paypal_payment: any
  free_payment: any
  title: string
  store_visable: number
  warranty: string
  zstyle_id: any
  code: string
  personal_sell: number
  coupon_group_name: any
  model_title: string
  prev_url: string
  related_item_price?: string
  group_value_id: number
  position: number
  personal_sell_min_price: any
  destroy_at: any
  default_shipping: number
  mirror_title: any
  visit_link?: string
  zap_visable: number
  second_code: string
  seo_title: string
  desc: string
  is_dad: number
  save_price: any
  matching_models: string
  only_contact?: number
  note: string
  seo_keywords: string
  store_layout_title?: string
  store_id: number
  created_at: string
  slug: string
  content: string
  video: string
  max_payment: any
  price: string
  quantity_step: any
  personal_sell_win_price: any
  experiment_group: any
  discount_group_name: any
  demo: any
  features: string
  cost: any
  product_id: number
  offer_code: string
  foot_html?: string
  quantity?: number
  origin_price?: string
  mirror_price: any
  store_category_id: number
  csv_id: any
  zap_product_type: string
  css_class: string
  promotions: string
  head_html?: string
  eilat_price: any
  deal_items_limit?: number
  restore_price: any
  color_group: string
  discount_prices: DiscountPrices
  updated_at: string
  kit: string
  scan_status: any
  three_d: any
  icons?: string
  dad_id: any
  item_data_h: ItemDataH
  store_category: StoreCategory
  store_category_parent: StoreCategoryParent
  tags: Tag[]
  brand: Brand
  image: Image
  images: Image2[]
  shippings: Shipping[]
  lowest_shipping: LowestShipping
  store_categories?: StoreCategory2[]
  group_values?: GroupValue[]
}

export interface DiscountPrices {
  field_14183?: string
  field_16280?: string
}

export interface ItemDataH {}

export interface StoreCategory {
  id: number
  tag_id: any
  updated_at: string
  position: number
  slug?: string
  seo_title?: string
  parent_id: number
  created_at: string
  store_layout_title: any
  discount_prices: any
  category_id: any
  tracking_data?: string
  image_id?: number
  desc?: string
  css_class?: string
  nav_content?: string
  image_url?: string
  group_title: string
  store_layout_item_title: any
  store_id: number
  title_he: string
  seo_keywords?: string
  title_en: any
  seo_description?: string
}

export interface StoreCategoryParent {
  id: number
  tag_id: any
  updated_at: string
  position: number
  slug: any
  seo_title: any
  parent_id: any
  created_at: string
  store_layout_title: any
  discount_prices: any
  category_id: any
  tracking_data: any
  image_id: any
  desc: any
  css_class: any
  nav_content: any
  image_url: any
  group_title: any
  store_layout_item_title: any
  store_id: number
  title_he: string
  seo_keywords: any
  title_en: any
  seo_description: any
}

export interface Tag {
  id: number
  use_name: string
  updated_at: string
  slug?: string
  seo_title?: string
  created_at: string
  content?: string
  visable: number
  css_class?: string
  title: string
  store_id: number
  seo_keywords?: string
  group_name?: string
  seo_description?: string
  item_position: number
}

export interface Brand {
  id: number
  group_id: number
  title: string
  title_en: string
}

export interface Image {
  product_id: number
  id: number
  photo_file_name: string
  position: number
  url: string
}

export interface Image2 {
  product_id: number
  id: number
  photo_file_name: string
  position: number
  title: any
  url: string
}

export interface Shipping {
  id: number
  store_default: number
  price: string
  updated_at: string
  position: number
  data_h?: string
  created_at: string
  shipping_type?: string
  integration_type?: string
  price_to: any
  title: string
  store_id: number
  price_from: any
}

export interface LowestShipping {
  id: number
  store_default: number
  price: string
  updated_at: string
  position: number
  data_h: any
  created_at: string
  shipping_type: any
  integration_type: any
  price_to: any
  title: string
  store_id: number
  price_from: any
}

export interface StoreCategory2 {
  id: number
  tag_id: number
  updated_at: string
  position: number
  slug: any
  seo_title: any
  parent_id?: number
  created_at: string
  store_layout_title: any
  discount_prices: any
  category_id: any
  tracking_data: any
  image_id: any
  desc: any
  css_class: any
  nav_content: any
  image_url: any
  group_title?: string
  store_layout_item_title: any
  store_id: number
  title_he: string
  seo_keywords: any
  title_en: any
  seo_description: any
  tag_position: number
}

export interface GroupValue {
  group: Group
  group_value: GroupValue2
}

export interface Group {
  id: number
  slug: any
  desc: any
  updated_at: string
  seo_title: any
  store_id: any
  image_id: any
  title: string
  spec_values: any
  store_category_id: number
  spec_names: string
  group_type: string
  created_at: string
  seo_keywords: any
  seo_description: any
  position: number
}

export interface GroupValue2 {
  id: number
  slug: string
  updated_at: string
  seo_title: string
  title_en: any
  title: string
  spec_values: string
  relevant_categories_title: any
  data_h: string
  group_id: number
  created_at: string
  seo_keywords: string
  seo_description: string
  relevant_items_title: any
  position: number
  content: string
}
