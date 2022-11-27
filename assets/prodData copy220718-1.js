let prodData = [
  {
    // id - уникальный для каждого товара (предположительно будут идти по порядку) (число - без кавычек)
    id: 1,
    // числовое обозначение серии котла (число - без кавычек)
    type: 1,
    // серия котла
    typeName: "Стальной газовый котел серии \"Стандарт\"",
    shortTypeName: "Стандарт",
    // название товара
    title: "КСГ-7 С «ОЧАГ»",
    // краткое название товара
    shortTitle: "КСГ-7 С",
    // картинка в папке images
    image: "assets/images/kotel_product_Img_1.png",
    // цена (текст)
    price: "20 500",
    // описание
    description:
      "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    // Номинальная мощность (число - без кавычек)
    power: 7,
    // Отапливаемая площадь (число - без кавычек)
    space: 80,

    // hitSign
    hitSign: true,

    // Номинальная мощность (текст)
    feature1: "7 кВт",
    // Отапливаемая площадь (текст)
    feature2: "80 м2",
    // Тип установки
    feature3: "напольный",
    // Количество контуров
    feature4: "одноконтурный",
    // Тип топлива
    feature5: "природный газ*",
    // Материал
    feature6: "Сталь",

    // ссылка на руководство пользователя (в папке files) (если есть)
    downloadLink1: "Manual_Buran_КЧГ_20_90_2022.pdf",
    // ссылка на гарантийный талон (в папке files) (если есть)
    downloadLink2: "",
    // ссылка на сертификат (в папке files) (если есть)
    downloadLink3: "",
    // ссылка на каталог запчастей (в папке files) (если есть)
    downloadLink4: "",

    // Бренд
    specification1: "SERVISGAZ",
    // Производитель
    specification2: "ООО\"СервисГаз\" г.Ульяновск",
    // Тип установки
    specification3: "Напольный",
    // Количество контуров
    specification4: "Одноконтурный (только отопление)",
    // Материал теплообменника
    specification5: "Сталь 3 мм.",
    // Тепловая мощность газогорелочного устройства, кВт
    specification61: "65",
    // Номинальная теплопроизводительность кВт
    specification6: "60",
    // Отапливаемая площадь
    specification7: "600",
    // КПД, не менее,%
    specification8: "90",
    // Автоматика
    specification9: "630 EUROSIT (SIT Италия)",
    // Тип топлива
    specification10: "Природный газ",
    // Перевод на сжиженный газ
    specification11: "Возможен при установке комплекта СУГ",
    // Входное давление газа (ном/мин/макс), Па
    specification12: "1300/600/3000",
    // Максимальный расход природного газа в режиме отопления, куб.м/ч
    specification13: "6,5",
    // Разряжение в дымоходе, Па
    specification14: "5…15",
    // Макс. Рабочее давление в системе отопления, Мпа (Бар)
    specification15: "0,3 (3)",
    // Максимальная температура теплоносителя, град.С
    specification16: "95",
    // Присоединительная резьба газопровода
    specification17: "G 3/4\"",
    // Присоединительная резьба патрубков отопления
    specification18: "G 2\"",
    // Диаметр подсоединяемого дымохода, мм
    specification19: "220",
    // Ширина, мм
    specification20: "580",
    // Высота, мм
    specification21: "930",
    // Глубина, мм
    specification22: "710",
    // Масса, кг
    specification23: "149",
  },
  {
    "id": 2,
    "type": 1,
    "typeName": "Стальной газовый котел серии \"Стандарт\"",
    "shortTypeName": "Стандарт",
    "title": "КСГ-7 Е «ОЧАГ»",
    "shortTitle": "КСГ-7 Е",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 7,
    "space": 80,

    "feature1": "7 кВт",
    "feature2": "80 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    "id": 3,
    "type": 1,
    "typeName": "Стальной газовый котел серии \"Стандарт\"",
    "shortTypeName": "Стандарт",
    "title": "КСГ-10 С «ОЧАГ»",
    "shortTitle": "КСГ-10 С",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 10,
    "space": 100,

    "feature1": "10 кВт",
    "feature2": "100 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    "id": 4,
    "type": 1,
    "typeName": "Стальной газовый котел серии \"Стандарт\"",
    "shortTypeName": "Стандарт",
    "title": "КСГ-10 Е «ОЧАГ»",
    "shortTitle": "КСГ-10 Е",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 10,
    "space": 100,

    "feature1": "10 кВт",
    "feature2": "100 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    "id": 5,
    "type": 1,
    "typeName": "Стальной газовый котел серии \"Стандарт\"",
    "shortTypeName": "Стандарт",
    "title": "АОГВ-17,4 С «ОЧАГ»",
    "shortTitle": "АОГВ-17,4 С",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 17.4,
    "space": 160,

    "feature1": "17.4 кВт",
    "feature2": "160 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    "id": 6,
    "type": 1,
    "typeName": "Стальной газовый котел серии \"Стандарт\"",
    "shortTypeName": "Стандарт",
    "title": "АОГВ-17,4 E «ОЧАГ»",
    "shortTitle": "АОГВ-17,4 E",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 17.4,
    "space": 160,

    "feature1": "17.4 кВт",
    "feature2": "160 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    // id - уникальный для каждого товара (предположительно будут идти по порядку) (число - без кавычек)
    id: 15,
    // числовое обозначение серии котла (число - без кавычек)
    type: 1,
    // серия котла
    typeName: "Стальной газовый котел серии \"Стандарт\"",
    shortTypeName: "Стандарт",
    // название товара
    // title: "КСГВ-20 Е «ОЧАГ»",
    title: "АОГВ-23,2-С",
    // краткое название товара
    shortTitle: "КСГВ-20 Е",
    // картинка в папке images
    image: "assets/images/kotel_product_Img_1.png",
    // цена (текст)
    price: "36 430",
    // описание
    description:
      "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    // Номинальная мощность (число - без кавычек)
    power: 20,
    // Отапливаемая площадь (число - без кавычек)
    space: 200,

    // Номинальная мощность (текст)
    feature1: "20 кВт",
    // Отапливаемая площадь (текст)
    feature2: "200 м2",
    // Тип установки
    feature3: "напольный",
    // Количество контуров
    feature4: "двухконтурный",
    // Тип топлива
    feature5: "природный газ*",
    // Материал
    feature6: "Сталь",

    // ссылка на руководство пользователя (в папке files) (если есть)
    downloadLink1: "Manual_Buran_КЧГ_20_90_2022.pdf",
    // ссылка на гарантийный талон (в папке files) (если есть)
    downloadLink2: "",
    // ссылка на сертификат (в папке files) (если есть)
    downloadLink3: "",
    // ссылка на каталог запчастей (в папке files) (если есть)
    downloadLink4: "",

    // Бренд
    specification1: "SERVISGAZ",
    // Производитель
    specification2: "ООО\"СервисГаз\" г.Ульяновск",
    // Тип установки
    specification3: "Напольный",
    // Количество контуров
    specification4: "Одноконтурный (только отопление)",
    // Материал теплообменника
    specification5: "Сталь 3 мм.",
    // Тепловая мощность газогорелочного устройства, кВт
    specification61: "65",
    // Номинальная теплопроизводительность кВт
    specification6: "60",
    // Отапливаемая площадь
    specification7: "600",
    // КПД, не менее,%
    specification8: "90",
    // Автоматика
    specification9: "630 EUROSIT (SIT Италия)",
    // Тип топлива
    specification10: "Природный газ",
    // Перевод на сжиженный газ
    specification11: "Возможен при установке комплекта СУГ",
    // Входное давление газа (ном/мин/макс), Па
    specification12: "1300/600/3000",
    // Максимальный расход природного газа в режиме отопления, куб.м/ч
    specification13: "6,5",
    // Разряжение в дымоходе, Па
    specification14: "5…15",
    // Макс. Рабочее давление в системе отопления, Мпа (Бар)
    specification15: "0,3 (3)",
    // Максимальная температура теплоносителя, град.С
    specification16: "95",
    // Присоединительная резьба газопровода
    specification17: "G 3/4\"",
    // Присоединительная резьба патрубков отопления
    specification18: "G 2\"",
    // Диаметр подсоединяемого дымохода, мм
    specification19: "220",
    // Ширина, мм
    specification20: "580",
    // Высота, мм
    specification21: "930",
    // Глубина, мм
    specification22: "710",
    // Масса, кг
    specification23: "149",
  },
  {
    // id - уникальный для каждого товара (предположительно будут идти по порядку) (число - без кавычек)
    id: 16,
    // числовое обозначение серии котла (число - без кавычек)
    type: 1,
    // серия котла
    typeName: "Стальной газовый котел серии \"Стандарт\"",
    shortTypeName: "Стандарт",
    // название товара
    // title: "КСГВ-20 Е «ОЧАГ»",
    title: "АОГВ-23,2-С",
    // краткое название товара
    shortTitle: "КСГВ-20 Е",
    // картинка в папке images
    image: "assets/images/kotel_product_Img_1.png",
    // цена (текст)
    price: "36 430",
    // описание
    description:
      "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    // Номинальная мощность (число - без кавычек)
    power: 20,
    // Отапливаемая площадь (число - без кавычек)
    space: 200,

    // Номинальная мощность (текст)
    feature1: "20 кВт",
    // Отапливаемая площадь (текст)
    feature2: "200 м2",
    // Тип установки
    feature3: "напольный",
    // Количество контуров
    feature4: "двухконтурный",
    // Тип топлива
    feature5: "природный газ*",
    // Материал
    feature6: "Сталь",

    // ссылка на руководство пользователя (в папке files) (если есть)
    downloadLink1: "Manual_Buran_КЧГ_20_90_2022.pdf",
    // ссылка на гарантийный талон (в папке files) (если есть)
    downloadLink2: "",
    // ссылка на сертификат (в папке files) (если есть)
    downloadLink3: "",
    // ссылка на каталог запчастей (в папке files) (если есть)
    downloadLink4: "",

    // Бренд
    specification1: "SERVISGAZ",
    // Производитель
    specification2: "ООО\"СервисГаз\" г.Ульяновск",
    // Тип установки
    specification3: "Напольный",
    // Количество контуров
    specification4: "Одноконтурный (только отопление)",
    // Материал теплообменника
    specification5: "Сталь 3 мм.",
    // Тепловая мощность газогорелочного устройства, кВт
    specification61: "65",
    // Номинальная теплопроизводительность кВт
    specification6: "60",
    // Отапливаемая площадь
    specification7: "600",
    // КПД, не менее,%
    specification8: "90",
    // Автоматика
    specification9: "630 EUROSIT (SIT Италия)",
    // Тип топлива
    specification10: "Природный газ",
    // Перевод на сжиженный газ
    specification11: "Возможен при установке комплекта СУГ",
    // Входное давление газа (ном/мин/макс), Па
    specification12: "1300/600/3000",
    // Максимальный расход природного газа в режиме отопления, куб.м/ч
    specification13: "6,5",
    // Разряжение в дымоходе, Па
    specification14: "5…15",
    // Макс. Рабочее давление в системе отопления, Мпа (Бар)
    specification15: "0,3 (3)",
    // Максимальная температура теплоносителя, град.С
    specification16: "95",
    // Присоединительная резьба газопровода
    specification17: "G 3/4\"",
    // Присоединительная резьба патрубков отопления
    specification18: "G 2\"",
    // Диаметр подсоединяемого дымохода, мм
    specification19: "220",
    // Ширина, мм
    specification20: "580",
    // Высота, мм
    specification21: "930",
    // Глубина, мм
    specification22: "710",
    // Масса, кг
    specification23: "149",
  },
  {
    // id - уникальный для каждого товара (предположительно будут идти по порядку) (число - без кавычек)
    id: 17,
    // числовое обозначение серии котла (число - без кавычек)
    type: 1,
    // серия котла
    typeName: "Стальной газовый котел серии \"Стандарт\"",
    shortTypeName: "Стандарт",
    // название товара
    // title: "КСГВ-20 Е «ОЧАГ»",
    title: "АОГВ-23,2-С",
    // краткое название товара
    shortTitle: "КСГВ-20 Е",
    // картинка в папке images
    image: "assets/images/kotel_product_Img_1.png",
    // цена (текст)
    price: "36 430",
    // описание
    description:
      "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    // Номинальная мощность (число - без кавычек)
    power: 20,
    // Отапливаемая площадь (число - без кавычек)
    space: 200,

    // Номинальная мощность (текст)
    feature1: "20 кВт",
    // Отапливаемая площадь (текст)
    feature2: "200 м2",
    // Тип установки
    feature3: "напольный",
    // Количество контуров
    feature4: "двухконтурный",
    // Тип топлива
    feature5: "природный газ*",
    // Материал
    feature6: "Сталь",

    // ссылка на руководство пользователя (в папке files) (если есть)
    downloadLink1: "Manual_Buran_КЧГ_20_90_2022.pdf",
    // ссылка на гарантийный талон (в папке files) (если есть)
    downloadLink2: "",
    // ссылка на сертификат (в папке files) (если есть)
    downloadLink3: "",
    // ссылка на каталог запчастей (в папке files) (если есть)
    downloadLink4: "",

    // Бренд
    specification1: "SERVISGAZ",
    // Производитель
    specification2: "ООО\"СервисГаз\" г.Ульяновск",
    // Тип установки
    specification3: "Напольный",
    // Количество контуров
    specification4: "Одноконтурный (только отопление)",
    // Материал теплообменника
    specification5: "Сталь 3 мм.",
    // Тепловая мощность газогорелочного устройства, кВт
    specification61: "65",
    // Номинальная теплопроизводительность кВт
    specification6: "60",
    // Отапливаемая площадь
    specification7: "600",
    // КПД, не менее,%
    specification8: "90",
    // Автоматика
    specification9: "630 EUROSIT (SIT Италия)",
    // Тип топлива
    specification10: "Природный газ",
    // Перевод на сжиженный газ
    specification11: "Возможен при установке комплекта СУГ",
    // Входное давление газа (ном/мин/макс), Па
    specification12: "1300/600/3000",
    // Максимальный расход природного газа в режиме отопления, куб.м/ч
    specification13: "6,5",
    // Разряжение в дымоходе, Па
    specification14: "5…15",
    // Макс. Рабочее давление в системе отопления, Мпа (Бар)
    specification15: "0,3 (3)",
    // Максимальная температура теплоносителя, град.С
    specification16: "95",
    // Присоединительная резьба газопровода
    specification17: "G 3/4\"",
    // Присоединительная резьба патрубков отопления
    specification18: "G 2\"",
    // Диаметр подсоединяемого дымохода, мм
    specification19: "220",
    // Ширина, мм
    specification20: "580",
    // Высота, мм
    specification21: "930",
    // Глубина, мм
    specification22: "710",
    // Масса, кг
    specification23: "149",
  },
  {
    // id - уникальный для каждого товара (предположительно будут идти по порядку) (число - без кавычек)
    id: 18,
    // числовое обозначение серии котла (число - без кавычек)
    type: 1,
    // серия котла
    typeName: "Стальной газовый котел серии \"Стандарт\"",
    shortTypeName: "Стандарт",
    // название товара
    // title: "КСГВ-20 Е «ОЧАГ»",
    title: "АОГВ-23,2-С",
    // краткое название товара
    shortTitle: "КСГВ-20 Е",
    // картинка в папке images
    image: "assets/images/kotel_product_Img_1.png",
    // цена (текст)
    price: "36 430",
    // описание
    description:
      "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    // Номинальная мощность (число - без кавычек)
    power: 20,
    // Отапливаемая площадь (число - без кавычек)
    space: 200,

    // Номинальная мощность (текст)
    feature1: "20 кВт",
    // Отапливаемая площадь (текст)
    feature2: "200 м2",
    // Тип установки
    feature3: "напольный",
    // Количество контуров
    feature4: "двухконтурный",
    // Тип топлива
    feature5: "природный газ*",
    // Материал
    feature6: "Сталь",

    // ссылка на руководство пользователя (в папке files) (если есть)
    downloadLink1: "Manual_Buran_КЧГ_20_90_2022.pdf",
    // ссылка на гарантийный талон (в папке files) (если есть)
    downloadLink2: "",
    // ссылка на сертификат (в папке files) (если есть)
    downloadLink3: "",
    // ссылка на каталог запчастей (в папке files) (если есть)
    downloadLink4: "",

    // Бренд
    specification1: "SERVISGAZ",
    // Производитель
    specification2: "ООО\"СервисГаз\" г.Ульяновск",
    // Тип установки
    specification3: "Напольный",
    // Количество контуров
    specification4: "Одноконтурный (только отопление)",
    // Материал теплообменника
    specification5: "Сталь 3 мм.",
    // Тепловая мощность газогорелочного устройства, кВт
    specification61: "65",
    // Номинальная теплопроизводительность кВт
    specification6: "60",
    // Отапливаемая площадь
    specification7: "600",
    // КПД, не менее,%
    specification8: "90",
    // Автоматика
    specification9: "630 EUROSIT (SIT Италия)",
    // Тип топлива
    specification10: "Природный газ",
    // Перевод на сжиженный газ
    specification11: "Возможен при установке комплекта СУГ",
    // Входное давление газа (ном/мин/макс), Па
    specification12: "1300/600/3000",
    // Максимальный расход природного газа в режиме отопления, куб.м/ч
    specification13: "6,5",
    // Разряжение в дымоходе, Па
    specification14: "5…15",
    // Макс. Рабочее давление в системе отопления, Мпа (Бар)
    specification15: "0,3 (3)",
    // Максимальная температура теплоносителя, град.С
    specification16: "95",
    // Присоединительная резьба газопровода
    specification17: "G 3/4\"",
    // Присоединительная резьба патрубков отопления
    specification18: "G 2\"",
    // Диаметр подсоединяемого дымохода, мм
    specification19: "220",
    // Ширина, мм
    specification20: "580",
    // Высота, мм
    specification21: "930",
    // Глубина, мм
    specification22: "710",
    // Масса, кг
    specification23: "149",
  },











  {
    "id": 19,
    "type": 2,
    "typeName": "АППАРАТ ОТОПИТЕЛЬНЫЙ ГАЗОВЫЙ СЕРИИ \"ПРЕМИУМ\"",
    "shortTypeName": "Премиум",
    "title": "АОГВ-8 С «ОЧАГ»",
    "shortTitle": "АОГВ-8 С",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 8,
    "space": 80,

    "feature1": "8 кВт",
    "feature2": "80 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    "id": 20,
    "type": 2,
    "typeName": "АППАРАТ ОТОПИТЕЛЬНЫЙ ГАЗОВЫЙ СЕРИИ \"ПРЕМИУМ\"",
    "shortTypeName": "Премиум",
    "title": "АОГВ-8 Е «ОЧАГ»",
    "shortTitle": "АОГВ-8 Е",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 8,
    "space": 80,

    "feature1": "8 кВт",
    "feature2": "80 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    "id": 21,
    "type": 2,
    "typeName": "АППАРАТ ОТОПИТЕЛЬНЫЙ ГАЗОВЫЙ СЕРИИ \"ПРЕМИУМ\"",
    "shortTypeName": "Премиум",
    "title": "АОГВ-11,6 С «ОЧАГ»",
    "shortTitle": "АОГВ-11,6 С",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 11.6,
    "space": 100,

    "feature1": "11.6 кВт",
    "feature2": "100 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    "id": 22,
    "type": 2,
    "typeName": "АППАРАТ ОТОПИТЕЛЬНЫЙ ГАЗОВЫЙ СЕРИИ \"ПРЕМИУМ\"",
    "shortTypeName": "Премиум",
    "title": "АОГВ-11,6 Е «ОЧАГ»",
    "shortTitle": "АОГВ-11,6 Е",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 11.6,
    "space": 100,

    "feature1": "11.6 кВт",
    "feature2": "100 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },











  
  {
    "id": 46,
    "type": 3,
    "typeName": "АППАРАТ  ОТОПИТЕЛЬНЫЙ ГАЗОВЫЙ СЕРИИ \"ПРЕМИУМ EN\"",
    "shortTypeName": "Премиум EN",
    "title": "АОГВ-8 ЕN «ОЧАГ» - ПРЕМИУМ",
    "shortTitle": "АОГВ-8 ЕN",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 11.6,
    "space": 100,

    "feature1": "11.6 кВт",
    "feature2": "100 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    "id": 47,
    "type": 3,
    "typeName": "АППАРАТ  ОТОПИТЕЛЬНЫЙ ГАЗОВЫЙ СЕРИИ \"ПРЕМИУМ EN\"",
    "shortTypeName": "Премиум EN",
    "title": "АОГВ-8 ЕN «ОЧАГ» - ПРЕМИУМ",
    "shortTitle": "АОГВ-8 ЕN",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 11.6,
    "space": 100,

    "feature1": "11.6 кВт",
    "feature2": "100 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    "id": 48,
    "type": 3,
    "typeName": "АППАРАТ  ОТОПИТЕЛЬНЫЙ ГАЗОВЫЙ СЕРИИ \"ПРЕМИУМ EN\"",
    "shortTypeName": "Премиум EN",
    "title": "АОГВ-8 ЕN «ОЧАГ» - ПРЕМИУМ",
    "shortTitle": "АОГВ-8 ЕN",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 11.6,
    "space": 100,

    "feature1": "11.6 кВт",
    "feature2": "100 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    "id": 49,
    "type": 3,
    "typeName": "АППАРАТ  ОТОПИТЕЛЬНЫЙ ГАЗОВЫЙ СЕРИИ \"ПРЕМИУМ EN\"",
    "shortTypeName": "Премиум EN",
    "title": "АОГВ-8 ЕN «ОЧАГ» - ПРЕМИУМ",
    "shortTitle": "АОГВ-8 ЕN",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 11.6,
    "space": 100,

    "feature1": "11.6 кВт",
    "feature2": "100 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  








  {
    "id": 53,
    "type": 4,
    "typeName": "ЧУГУННЫЙ ГАЗОВЫЙ КОТЕЛ \"КЧГ-EN\"",
    "shortTypeName": "КЧГ-EN",
    "title": "КЧГ-20 «ОЧАГ» EN «ОЧАГ»",
    "shortTitle": "КЧГ-20",
    image: "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",
    "power": 11.6,
    "space": 100,

    "feature1": "11.6 кВт",
    "feature2": "100 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    "id": 54,
    "type": 4,
    "typeName": "ЧУГУННЫЙ ГАЗОВЫЙ КОТЕЛ \"КЧГ-EN\"",
    "shortTypeName": "КЧГ-EN",
    "title": "КЧГ- 20 «ОЧАГ» EN «ОЧАГ»",
    "shortTitle": "КЧГ-20",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 11.6,
    "space": 100,

    "feature1": "11.6 кВт",
    "feature2": "100 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    "id": 55,
    "type": 4,
    "typeName": "ЧУГУННЫЙ ГАЗОВЫЙ КОТЕЛ \"КЧГ-EN\"",
    "shortTypeName": "КЧГ-EN",
    "title": "КЧГ- 20 «ОЧАГ» EN «ОЧАГ»",
    "shortTitle": "КЧГ-20",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 11.6,
    "space": 100,

    "feature1": "11.6 кВт",
    "feature2": "100 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    "id": 56,
    "type": 4,
    "typeName": "ЧУГУННЫЙ ГАЗОВЫЙ КОТЕЛ \"КЧГ-EN\"",
    "shortTypeName": "КЧГ-EN",
    "title": "КЧГ- 20 «ОЧАГ» EN «ОЧАГ»",
    "shortTitle": "КЧГ-20",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 11.6,
    "space": 100,

    "feature1": "11.6 кВт",
    "feature2": "100 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  











  {
    "id": 59,
    "type": 5,
    "typeName": "ПАРАПЕТНЫЙ ГАЗОВЫЙ КОТЕЛ КСГЗ СЕРИИ \"COMPACT\"",
    "shortTypeName": "COMPACT",
    "title": "КСГЗ-7 Е «ОЧАГ» - COMPACT",
    "shortTitle": "КСГЗ-7 Е",
    "image": "assets/images/kotel_product_Img_1.png",
    "price": "20 500",
    "description": "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    "power": 11.6,
    "space": 100,

    "feature1": "11.6 кВт",
    "feature2": "100 м2",
    "feature3": "напольный",
    "feature4": "одноконтурный",
    "feature5": "природный газ*",
    "feature6": "Сталь",


    "downloadLink1": "",
    "downloadLink2": "",
    "downloadLink3": "",
    "downloadLink4": "",

    "specification1": "SERVISGAZ",
    "specification2": "ООО\"СервисГаз\" г.Ульяновск",
    "specification3": "Напольный",
    "specification4": "Одноконтурный (только отопление)",
    "specification5": "Сталь 3 мм.",
    "specification61": "65",
    "specification6": "60",
    "specification7": "600",
    "specification8": "90",
    "specification9": "630 EUROSIT (SIT Италия)",
    "specification10": "Природный газ",
    "specification11": "Возможен при установке комплекта СУГ",
    "specification12": "1300/600/3000",
    "specification13": "6,5",
    "specification14": "5…15",
    "specification15": "0,3 (3)",
    "specification16": "95",
    "specification17": "G 3/4\"",
    "specification18": "G 2\"",
    "specification19": "220",
    "specification20": "580",
    "specification21": "930",
    "specification22": "710",
    "specification23": "149"
  },
  {
    // id - уникальный для каждого товара (предположительно будут идти по порядку) (число - без кавычек)
    id: 59,
    // числовое обозначение серии котла (число - без кавычек)
    type: 5,
    // серия котла
    typeName: "Парапетный газовый котел КСГЗ \"Compact\"",
    shortTypeName: "Compact",
    // название товара
    title: "КСГЗ-10 Е «ОЧАГ» - COMPACT",
    // краткое название товара
    shortTitle: "КСГЗ-10 Е",
    // картинка в папке images
    image: "assets/images/kotel_product_Img_1.png",
    // цена (текст)
    price: "30 980",
    // описание
    description: "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    // Номинальная мощность (число - без кавычек)
    power: 10,
    // Отапливаемая площадь (число - без кавычек)
    space: 100,

    // Номинальная мощность (текст)
    feature1: "10 кВт",
    // Отапливаемая площадь (текст)
    feature2: "100 м2",
    // Тип установки
    feature3: "напольный",
    // Количество контуров
    feature4: "одноконтурный",
    // Тип топлива
    feature5: "природный газ*",
    // Материал
    feature6: "Сталь",

    // ссылка на руководство пользователя (в папке files) (если есть)
    downloadLink1: "Manual_Buran_КЧГ_20_90_2022.pdf",
    // ссылка на гарантийный талон (в папке files) (если есть)
    downloadLink2: "",
    // ссылка на сертификат (в папке files) (если есть)
    downloadLink3: "",
    // ссылка на каталог запчастей (в папке files) (если есть)
    downloadLink4: "",

    // Бренд
    specification1: "SERVISGAZ",
    // Производитель
    specification2: "ООО\"СервисГаз\" г.Ульяновск",
    // Тип установки
    specification3: "Напольный",
    // Количество контуров
    specification4: "Одноконтурный (только отопление)",
    // Материал теплообменника
    specification5: "Сталь 3 мм.",
    // Тепловая мощность газогорелочного устройства, кВт
    specification61: "65",
    // Номинальная теплопроизводительность кВт
    specification6: "60",
    // Отапливаемая площадь
    specification7: "600",
    // КПД, не менее,%
    specification8: "90",
    // Автоматика
    specification9: "630 EUROSIT (SIT Италия)",
    // Тип топлива
    specification10: "Природный газ",
    // Перевод на сжиженный газ
    specification11: "Возможен при установке комплекта СУГ",
    // Входное давление газа (ном/мин/макс), Па
    specification12: "1300/600/3000",
    // Максимальный расход природного газа в режиме отопления, куб.м/ч
    specification13: "6,5",
    // Разряжение в дымоходе, Па
    specification14: "5…15",
    // Макс. Рабочее давление в системе отопления, Мпа (Бар)
    specification15: "0,3 (3)",
    // Максимальная температура теплоносителя, град.С
    specification16: "95",
    // Присоединительная резьба газопровода
    specification17: "G 3/4\"",
    // Присоединительная резьба патрубков отопления
    specification18: "G 2\"",
    // Диаметр подсоединяемого дымохода, мм
    specification19: "220",
    // Ширина, мм
    specification20: "580",
    // Высота, мм
    specification21: "930",
    // Глубина, мм
    specification22: "710",
    // Масса, кг
    specification23: "149",
  },
  {
    // id - уникальный для каждого товара (предположительно будут идти по порядку) (число - без кавычек)
    id: 60,
    // числовое обозначение серии котла (число - без кавычек)
    type: 5,
    // серия котла
    typeName: "Парапетный газовый котел КСГЗ \"Compact\"",
    shortTypeName: "Compact",
    // название товара
    title: "КСГЗ-10 Е «ОЧАГ» - COMPACT",
    // краткое название товара
    shortTitle: "КСГЗ-10 Е",
    // картинка в папке images
    image: "assets/images/kotel_product_Img_1.png",
    // цена (текст)
    price: "30 980",
    // описание
    description: "Модельный ряд представлен диапозоном мощностей от 7 до 25 кВт. Модель не требует подключения к электросети. Высокий КПД 92 % достигнут за счет высокоскоростного компактного стального теплообменника.",

    // Номинальная мощность (число - без кавычек)
    power: 10,
    // Отапливаемая площадь (число - без кавычек)
    space: 100,

    // Номинальная мощность (текст)
    feature1: "10 кВт",
    // Отапливаемая площадь (текст)
    feature2: "100 м2",
    // Тип установки
    feature3: "напольный",
    // Количество контуров
    feature4: "одноконтурный",
    // Тип топлива
    feature5: "природный газ*",
    // Материал
    feature6: "Сталь",

    // ссылка на руководство пользователя (в папке files) (если есть)
    downloadLink1: "Manual_Buran_КЧГ_20_90_2022.pdf",
    // ссылка на гарантийный талон (в папке files) (если есть)
    downloadLink2: "",
    // ссылка на сертификат (в папке files) (если есть)
    downloadLink3: "",
    // ссылка на каталог запчастей (в папке files) (если есть)
    downloadLink4: "",

    // Бренд
    specification1: "SERVISGAZ",
    // Производитель
    specification2: "ООО\"СервисГаз\" г.Ульяновск",
    // Тип установки
    specification3: "Напольный",
    // Количество контуров
    specification4: "Одноконтурный (только отопление)",
    // Материал теплообменника
    specification5: "Сталь 3 мм.",
    // Тепловая мощность газогорелочного устройства, кВт
    specification61: "65",
    // Номинальная теплопроизводительность кВт
    specification6: "60",
    // Отапливаемая площадь
    specification7: "600",
    // КПД, не менее,%
    specification8: "90",
    // Автоматика
    specification9: "630 EUROSIT (SIT Италия)",
    // Тип топлива
    specification10: "Природный газ",
    // Перевод на сжиженный газ
    specification11: "Возможен при установке комплекта СУГ",
    // Входное давление газа (ном/мин/макс), Па
    specification12: "1300/600/3000",
    // Максимальный расход природного газа в режиме отопления, куб.м/ч
    specification13: "6,5",
    // Разряжение в дымоходе, Па
    specification14: "5…15",
    // Макс. Рабочее давление в системе отопления, Мпа (Бар)
    specification15: "0,3 (3)",
    // Максимальная температура теплоносителя, град.С
    specification16: "95",
    // Присоединительная резьба газопровода
    specification17: "G 3/4\"",
    // Присоединительная резьба патрубков отопления
    specification18: "G 2\"",
    // Диаметр подсоединяемого дымохода, мм
    specification19: "220",
    // Ширина, мм
    specification20: "580",
    // Высота, мм
    specification21: "930",
    // Глубина, мм
    specification22: "710",
    // Масса, кг
    specification23: "149",
  },
  {
    // id - уникальный для каждого товара (предположительно будут идти по порядку) (число - без кавычек)
    id: 99,
    // числовое обозначение серии котла (число - без кавычек)
    type: 5,
    // серия котла
    typeName: "Парапетный газовый котел КСГЗ \"Compact\"",
    shortTypeName: "Compact",
    // название товара
    title: "КСГЗ-20 C \"ОЧАГ\"- COMPACT",
    // краткое название товара
    shortTitle: "КСГЗ-20 C",
    // картинка в папке images
    image: "assets/images/kotel_product_Img_1.png",
    // цена (текст)
    price: "36 600",
    // описание
    description: "Парапетные газовые котлы КСГЗ серии \"Compact\" являются новинками в семействе котлов ТМ \"Очаг\" и предназначены для работы с естественной и принудительной системами отопления без подключения к электрической сети",

    // Номинальная мощность (число - без кавычек)
    power: 20,
    // Отапливаемая площадь (число - без кавычек)
    space: 200,

    // Номинальная мощность (текст)
    feature1: "20 кВт",
    // Отапливаемая площадь (текст)
    feature2: "200 м2",
    // Тип установки
    feature3: "напольный",
    // Количество контуров
    feature4: "одноконтурный",
    // Тип топлива
    feature5: "природный газ*",
    // Материал
    feature6: "Сталь",

    // ссылка на руководство пользователя (в папке files) (если есть)
    downloadLink1: "Manual_Buran_КЧГ_20_90_2022.pdf",
    // ссылка на гарантийный талон (в папке files) (если есть)
    downloadLink2: "",
    // ссылка на сертификат (в папке files) (если есть)
    downloadLink3: "",
    // ссылка на каталог запчастей (в папке files) (если есть)
    downloadLink4: "",

    // Бренд
    specification1: "SERVISGAZ",
    // Производитель
    specification2: "ООО\"СервисГаз\" г.Ульяновск",
    // Тип установки
    specification3: "Напольный",
    // Количество контуров
    specification4: "Одноконтурный (только отопление)",
    // Материал теплообменника
    specification5: "Сталь 3 мм.",
    // Тепловая мощность газогорелочного устройства, кВт
    specification61: "65",
    // Номинальная теплопроизводительность кВт
    specification6: "60",
    // Отапливаемая площадь
    specification7: "600",
    // КПД, не менее,%
    specification8: "90",
    // Автоматика
    specification9: "630 EUROSIT (SIT Италия)",
    // Тип топлива
    specification10: "Природный газ",
    // Перевод на сжиженный газ
    specification11: "Возможен при установке комплекта СУГ",
    // Входное давление газа (ном/мин/макс), Па
    specification12: "1300/600/3000",
    // Максимальный расход природного газа в режиме отопления, куб.м/ч
    specification13: "6,5",
    // Разряжение в дымоходе, Па
    specification14: "5…15",
    // Макс. Рабочее давление в системе отопления, Мпа (Бар)
    specification15: "0,3 (3)",
    // Максимальная температура теплоносителя, град.С
    specification16: "95",
    // Присоединительная резьба газопровода
    specification17: "G 3/4\"",
    // Присоединительная резьба патрубков отопления
    specification18: "G 2\"",
    // Диаметр подсоединяемого дымохода, мм
    specification19: "220",
    // Ширина, мм
    specification20: "580",
    // Высота, мм
    specification21: "930",
    // Глубина, мм
    specification22: "710",
    // Масса, кг
    specification23: "149",
  },
]

export default prodData
