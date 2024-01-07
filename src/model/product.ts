import ObjectModel from "./objectModel";

type ProductType = {
	id: string,
	img: string,
	titleEn: string,
	titleJa: string | null,
	titleZhCHT: string | null,
	descriptionEn: string | null,
	descriptionJa: string | null,
	descriptionZhCHT: string | null,
}

class Product implements ProductType, ObjectModel{
	id: string = "";
	img: string = "";
	titleEn: string = "";
	titleJa: string | null = null;
	titleZhCHT: string | null = null;
	descriptionEn: string | null = null;
	descriptionJa: string | null = null;
	descriptionZhCHT: string | null = null;

	constructor(json: Partial<Product>) {
		this.id = json.id ?? this.id;
		this.img = json.img ?? this.img;
		this.titleEn = json.titleEn ?? this.titleEn;
		this.titleJa = json.titleJa ?? this.titleJa;
		this.titleZhCHT = json.titleZhCHT ?? this.titleZhCHT;
		this.descriptionEn = json.descriptionEn ?? this.descriptionEn;
		this.descriptionJa = json.descriptionJa ?? this.descriptionJa;
		this.descriptionZhCHT = json.descriptionZhCHT ?? this.descriptionZhCHT;
	}

	toJson(): object {
		const json: Partial<Product> = {
			id: this.id,
			img: this.img,
			titleEn: this.titleEn,
		}

		if(this.titleJa)
			json.titleJa = this.titleJa;
		if(this.titleZhCHT)
			json.titleZhCHT = this.titleZhCHT;
		if(this.descriptionEn)
			json.descriptionEn = this.descriptionEn;
		if(this.descriptionJa)
			json.descriptionJa = this.descriptionJa;
		if(this.descriptionZhCHT)
			json.descriptionZhCHT = this.descriptionZhCHT;

		return json
	}
}

export default Product