const { default: Model } = require('../../../utils/Model');

class PromoProfile extends Model {
  constructor(props) {
    super(props);
    this.initialize(props);
  }

  getRawText(text = '') {
    return text.replace(/<[^>]*>/g, '');
  }

  initialize(props) {
    super.initialize(props);

    this.id = props.promo_profile_id;
    this.promo = {
      id: props.promo_id || '',
      name: props.promo_title,
    };
    this.rating = props.review_score;
    this.reviews = props.no_of_reviews;
    this.title = props.services_overview_title;
    this.description = props.services_overview_body;
    this.minPrice = props.starting_from;
    this.photo = props.service_photo !== '-mini' ? props.service_photo : null;
    this.name = props.display_name;
    this.promoPrice = props.service_packages[1].unit_price;
    this.discount = props.service_packages[2].percentage_discount;
    this.packageDesc = props.service_packages[0].description;
    this.actualPrice = (this.promoPrice / (100 - this.discount)) * 100;
    this.rawDesc = this.getRawText(this.packageDesc).substring(0, 100);
    this.miniPackageDesc = this.rawDesc.substring(0, 45);
  }
}

export default PromoProfile;
