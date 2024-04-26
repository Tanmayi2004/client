import React, { useState } from 'react';
import './State.css';

const states = [
    {
        name: "Andhra Pradesh",
        headings: ["Culture", "History", "Tourism", "Cuisine"],
        paragraphs: [
            ["Andhra Pradesh boasts a rich cultural heritage with influences from various dynasties. The state's diverse traditions and customs have shaped its unique identity. Its classical dance forms like Kuchipudi and folk arts like Burra Katha showcase the richness of its cultural tapestry. The state is also known for its vibrant festivals like Ugadi, Sankranti, and Vinayaka Chavithi, which are celebrated with great enthusiasm."],
            ["The history of Andhra Pradesh is rich and varied, with evidence of human habitation dating back thousands of years. The region has been ruled by numerous dynasties, each leaving its mark on its culture and heritage. From the Satavahanas to the Vijayanagara Empire, Andhra Pradesh has witnessed the rise and fall of great civilizations. The state is also home to several ancient Buddhist sites, including the famous Amaravati Stupa, which dates back to the 3rd century BCE."],
            ["Tourism is a major industry in Andhra Pradesh, with millions of visitors flocking to the state each year to explore its vibrant cities, ancient temples, and serene beaches. The iconic Tirumala Venkateswara Temple, the hill station of Araku Valley, and the picturesque beaches of Visakhapatnam are just a few of the many attractions that draw tourists to the state. Andhra Pradesh is also known for its wildlife sanctuaries, such as the Nagarjunsagar-Srisailam Tiger Reserve and the Pulicat Lake Bird Sanctuary, which offer opportunities for nature enthusiasts."],
            ["Andhra cuisine is famous for its spicy and flavorful dishes, with a wide variety of vegetarian and non-vegetarian options. From traditional thalis to street food delights, the state offers a culinary journey like no other. Some of the must-try dishes include spicy chicken curry, aromatic biryanis, and mouthwatering desserts like Pootharekulu and Bobbatlu. The cuisine of Andhra Pradesh is characterized by its use of aromatic spices, tangy tamarind, and fiery chillies, which give it its distinct flavor profile."]
        ]
    },
    {
        name: "Arunachal Pradesh",
        headings: ["Culture", "History", "Tourism", "Cuisine"],
        paragraphs: [
            ["Arunachal Pradesh is known for its rich cultural diversity, with over 26 major tribes and numerous sub-tribes residing in the state. Each tribe has its unique customs, festivals, and traditional attire, contributing to the vibrant cultural tapestry of the region. The state is also renowned for its indigenous music and dance forms, such as Aji Lamu and Popir, which are integral parts of tribal celebrations and rituals."],
            ["The history of Arunachal Pradesh is shrouded in mystery, with archaeological findings suggesting human habitation in the region dating back thousands of years. The state has been inhabited by various tribes and ethnic groups since ancient times, each leaving behind traces of their existence in the form of rock art, megaliths, and ancient settlements. Arunachal Pradesh was officially established as a state of India in 1987, following the reorganization of the North-East Frontier Agency (NEFA)."],
            ["Tourism is a growing industry in Arunachal Pradesh, attracting nature lovers and adventure enthusiasts from across the globe. The state is blessed with breathtaking natural beauty, including snow-capped peaks, lush green valleys, and gushing rivers. Popular tourist attractions in Arunachal Pradesh include Tawang Monastery, Sela Pass, Namdapha National Park, and the picturesque Ziro Valley. Adventure activities such as trekking, river rafting, and wildlife safaris are also popular among visitors."],
            ["Arunachali cuisine is predominantly non-vegetarian, with a focus on locally sourced ingredients and traditional cooking methods. Rice is the staple food of the region, and dishes are often prepared with bamboo shoots, fish, meat, and leafy greens. Some popular Arunachali dishes include Apong (rice beer), Thukpa (noodle soup), and Marua (local millet-based bread). The cuisine reflects the rich cultural heritage of the state and the diverse culinary traditions of its indigenous tribes."]
        ]
    },
    {
        name: "Assam",
        headings: ["Culture", "History", "Tourism", "Cuisine"],
        paragraphs: [
            ["Assam is known for its vibrant cultural heritage, which is a blend of various ethnicities, languages, and traditions. The state is home to numerous indigenous tribes, each with its unique customs, festivals, and art forms. Assamese culture is characterized by its rich folk music, dance, and theater traditions, such as Bihu dance and Sattriya Nritya. The state's diverse cultural landscape reflects its long history of migration, trade, and social interaction."],
            ["The history of Assam dates back to ancient times, with archaeological evidence suggesting human habitation in the region since the Stone Age. The state has been ruled by various dynasties, including the Ahoms, who established their kingdom in the region in the 13th century. Assam has witnessed significant historical events, including the Battle of Saraighat, which marked the end of Mughal expansion into the region. The state was annexed by the British East India Company in the 19th century and later became a part of British India."],
            ["Tourism is a major industry in Assam, with millions of visitors flocking to the state each year to explore its natural beauty and cultural heritage. Assam is known for its lush green landscapes, tea gardens, and wildlife sanctuaries. Popular tourist attractions in Assam include Kaziranga National Park, Majuli Island, Kamakhya Temple, and the Ahom monuments of Sivasagar. The state also offers opportunities for adventure activities such as river rafting, trekking, and wildlife safaris."],
            ["Assamese cuisine is known for its rich flavors and diverse range of dishes, influenced by the state's geographical and cultural diversity. Rice is the staple food of Assam, and the cuisine features a variety of fish, meat, and vegetarian dishes. Some popular Assamese dishes include Maasor Tenga (sour fish curry), Aloo Pitika (mashed potatoes), and Khar (traditional alkaline preparation). Assam is also famous for its tea, with the state being one of the largest producers of tea in the world."]
        ]
    },
    {
        name: "Bihar",
        headings: ["Culture", "History", "Tourism", "Cuisine"],
        paragraphs: [
            ["Bihar has a rich cultural heritage, deeply rooted in its history and traditions. The state is home to various religious and cultural festivals, which are celebrated with great fervor and enthusiasm. Bihar's cultural landscape is shaped by its diverse communities, each contributing to the region's unique identity. The state is known for its classical and folk music, dance forms like Bidesia and Jat-Jatin, and traditional art forms such as Madhubani painting and Tikuli art."],
            ["The history of Bihar dates back to ancient times, with evidence of human habitation found in archaeological sites like Pataliputra and Nalanda. The region has been ruled by several dynasties, including the Mauryas, Guptas, and Palas, who established their capitals in Bihar. The state is renowned for its rich Buddhist heritage, with sites like Bodh Gaya, Nalanda, and Vikramshila being important centers of Buddhist learning and pilgrimage."],
            ["Tourism is an emerging industry in Bihar, with the state offering a mix of historical, cultural, and religious attractions. Bihar is home to UNESCO World Heritage sites like Mahabodhi Temple in Bodh Gaya and Nalanda University, which attract pilgrims and tourists from around the world. Other popular tourist destinations in Bihar include Rajgir, Vaishali, Patna Sahib, and the ancient ruins of Vikramshila and Pawapuri. The state also hosts the famous Chhath Puja festival, which celebrates the sun god and is observed with great devotion by the people of Bihar."],
            ["Bihari cuisine is known for its simplicity and robust flavors, with a focus on vegetarian dishes and locally sourced ingredients. Rice, wheat, and lentils are staple foods in Bihar, and the cuisine features a variety of dishes made from these ingredients. Some popular Bihari dishes include Litti Chokha, Sattu Paratha, and Khichdi. The cuisine reflects the culinary traditions of the region, influenced by its agrarian lifestyle and cultural heritage."]
        ]
    },
    {
        name: "Chhattisgarh",
        headings: ["Culture", "History", "Tourism", "Cuisine"],
        paragraphs: [
            ["Chhattisgarh is known for its rich cultural heritage, with a blend of tribal and mainstream traditions. The state's festivals, such as Bastar Dussehra and Madai, showcase the vibrant cultural tapestry of its indigenous communities. Traditional art forms like Gaur Maria and Pandwani are integral parts of Chhattisgarhi culture, reflecting the artistic prowess and creativity of its people."],
            ["The history of Chhattisgarh is steeped in legend and folklore, with references to ancient kingdoms like Dakshina Kosala found in ancient texts like the Mahabharata. The region has been ruled by various dynasties, including the Nagavanshis and Kalachuris, each leaving behind a rich architectural legacy. Chhattisgarh is home to several ancient temples and rock-cut caves, such as the Bhoramdeo Temple and Kailash Caves, which are of historical and archaeological significance."],
            ["Chhattisgarh is blessed with natural beauty and diverse landscapes, ranging from lush forests to picturesque waterfalls. The state is home to several national parks and wildlife sanctuaries, including Indravati National Park and Kanger Valley National Park, which are havens for wildlife enthusiasts and nature lovers. Chhattisgarh is also known for its ancient forts and palaces, such as the Raipur Fort and Ratanpur Fort, which offer glimpses into its glorious past."],
            ["Chhattisgarhi cuisine is known for its simplicity and use of locally sourced ingredients. Rice is the staple food of the state, served with a variety of vegetarian and non-vegetarian dishes. Chhattisgarh is famous for its street food culture, with dishes like Bhajiya, Farra, and Muthia being popular among locals and visitors alike. The state is also known for its traditional sweets and snacks, such as Tilgur, Petha, and Chausa, which are enjoyed during festivals and special occasions."]
        ]
    },
    {
        name: "Goa",
        headings: ["Culture", "History", "Tourism", "Cuisine"],
        paragraphs: [
            ["Goa is renowned for its vibrant cultural scene, with a blend of Portuguese and Indian influences. The state's festivals, such as Carnival and Shigmo, are celebrated with great enthusiasm, showcasing the rich cultural tapestry of its people. Traditional music and dance forms like Fugdi and Dekhnni are integral parts of Goan culture, reflecting the spirit and ethos of the region."],
            ["The history of Goa is marked by its colonial past, with Portuguese rule leaving behind a lasting legacy on its architecture, cuisine, and customs. The region has been inhabited since ancient times, with evidence of human habitation found in archaeological sites like the Rock Cut Caves of Arvalem. Goa was ruled by various dynasties, including the Kadambas and Vijayanagara Empire, before being colonized by the Portuguese in the 16th century."],
            ["Tourism is a major industry in Goa, attracting millions of visitors from around the world each year. The state is known for its pristine beaches, vibrant nightlife, and colonial architecture, making it a popular destination for beach lovers and partygoers alike. Goa is also home to several UNESCO World Heritage Sites, such as the Basilica of Bom Jesus and Old Goa, which are of historical and cultural significance."],
            ["Goan cuisine is famous for its seafood dishes and use of aromatic spices, influenced by Portuguese and Konkani culinary traditions. Rice and fish form the staple diet of the state, served with a variety of curries and accompaniments. Some popular dishes include Fish Curry Rice, Vindaloo, and Bebinca, which are enjoyed by locals and visitors alike. Goan cuisine is characterized by its bold flavors, tropical ingredients, and culinary diversity."]
        ]
    },
    {
        name: "Gujarat",
        headings: ["Culture", "History", "Tourism", "Cuisine"],
        paragraphs: [
            ["Gujarat is known for its rich cultural heritage and vibrant traditions, shaped by its ancient history and diverse communities. The state's festivals, such as Navratri and Uttarayan, are celebrated with great fervor, showcasing the colorful customs and rituals of its people. Traditional art forms like Garba and Bhavai are integral parts of Gujarati culture, reflecting the creativity and artistic talent of its artisans."],
            ["The history of Gujarat dates back to ancient times, with evidence of human habitation found in archaeological sites like Lothal and Dholavira. The region has been ruled by various dynasties, including the Mauryas, Guptas, and Solankis, each leaving behind a rich architectural legacy. Gujarat is known for its ancient temples and stepwells, such as the Sun Temple in Modhera and Rani ki Vav in Patan, which are UNESCO World Heritage Sites."],
            ["Tourism is a major industry in Gujarat, attracting millions of visitors from around the world each year. The state is known for its diverse attractions, ranging from historical monuments to natural wonders. Gujarat is home to several wildlife sanctuaries and national parks, such as Gir National Park and Marine National Park, which offer opportunities for wildlife viewing and eco-tourism. The state is also known for its vibrant cities, such as Ahmedabad and Vadodara, which blend modernity with tradition."],
            ["Gujarati cuisine is famous for its vegetarian dishes and use of aromatic spices and herbs. The state is known for its thalis, elaborate meals served on a platter with a variety of dishes like dal, sabzi, roti, and rice. Gujarati snacks like Dhokla, Khandvi, and Fafda are popular street food items enjoyed by locals and visitors alike. Gujarat is also famous for its sweets, such as Mohanthal, Basundi, and Jalebi, which are enjoyed during festivals and special occasions."]
        ]
    },
    {
        name: "Haryana",
        headings: ["History", "Culture", "Tourism", "Cuisine"],
        paragraphs: [
            ["Haryana, located in northern India, is known for its rich history, vibrant culture, and progressive outlook. The state traces its roots back to ancient times, with evidence of human habitation dating back thousands of years. Haryana's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Haryana is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Baisakhi, Teej, and Holi, with great fervor and enthusiasm. Traditional dance forms like Ghoomar and Phag are an integral part of Haryanvi culture, captivating audiences with their energy and vibrancy."],
            ["Tourism is a growing industry in Haryana, with travelers flocking to the state to explore its historic monuments, scenic landscapes, and vibrant culture. The state offers a wide range of attractions, including ancient forts, historic cities, and picturesque lakes. Popular tourist destinations include the UNESCO World Heritage Site of Kurukshetra, the historic city of Panipat, and the picturesque Surajkund Lake, known for its natural beauty and tranquility."],
            ["Haryanvi cuisine is renowned for its robust flavors, rustic dishes, and hearty meals. The cuisine is primarily vegetarian, with a focus on grains, lentils, and dairy products. Must-try dishes include kadhi pakora, kachri ki sabzi, and bajra roti, which are bursting with flavor and nutrition. Haryana's sweets, such as ghevar and besan ladoo, are also popular among locals and visitors alike, offering a sweet ending to a delicious meal."]
        ]
    },
    {
        name: "Himachal Pradesh",
        headings: ["Geography", "Culture", "Tourism", "Wildlife", "Cuisine"],
        paragraphs: [
        ["Himachal Pradesh, nestled in the western Himalayas, is known for its breathtaking landscapes, tranquil lakes, and serene monasteries. The state's majestic mountains, lush green valleys, and pristine rivers make it a paradise for nature lovers. Himachal Pradesh is also home to a rich cultural heritage, with vibrant festivals, traditional music, and colorful dances that reflect its diverse traditions and customs."],
        ["The cultural diversity of Himachal Pradesh is reflected in its festivals, music, dance, and art. The state celebrates a myriad of festivals throughout the year, including Kullu Dussehra, Shivratri, and Losar, with great fervor and enthusiasm. Traditional dance forms like Nati and Chham are an integral part of Himachali culture, captivating audiences with their grace and elegance."],
        ["Tourism is the backbone of Himachal Pradesh's economy, with millions of visitors flocking to the state each year to explore its natural and cultural treasures. The state offers a wide range of attractions, including ancient temples, historic monasteries, and adventurous trekking routes. Popular tourist destinations include Shimla, the summer capital of British India, Manali, a picturesque hill station, and Dharamshala, the abode of the Dalai Lama."],
        ["Himachal Pradesh is home to a rich variety of wildlife, with its dense forests and diverse ecosystems supporting a wide range of flora and fauna. The state is home to several wildlife sanctuaries and national parks, including the Great Himalayan National Park and the Pin Valley National Park, which offer opportunities for wildlife spotting and eco-tourism. Endangered species like the snow leopard and Himalayan musk deer find refuge in the pristine wilderness of Himachal Pradesh."],
        ["Himachal Pradesh cuisine is known for its simplicity and wholesome flavors, often influenced by the mountainous terrain and locally available ingredients. Staple foods include rice, wheat, and maize, which are consumed in various forms such as bread, rotis, and porridge. The cuisine features a variety of vegetarian and non-vegetarian dishes, with popular items including siddu, a steamed bread made from wheat flour and filled with a mixture of vegetables or meat, and dham, a traditional feast comprising rice, dal, rajma, curd, and sweet rice pudding. Local beverages like chhang, made from fermented barley, and kanji, a fermented carrot drink, are also enjoyed by the people of Himachal Pradesh."]
        ]
    },
    {
        name: "Jharkhand",
        headings: ["Geography", "Culture", "Tourism", "Wildlife", "Cuisine"],
        paragraphs: [
        ["Jharkhand, located in eastern India, is known for its rich mineral resources, lush green forests, and diverse tribal culture. The state's rugged terrain, rolling hills, and scenic waterfalls make it a paradise for nature lovers. Jharkhand's tribal communities have a rich cultural heritage, with unique customs, traditions, and festivals that showcase their vibrant culture."],
        ["The cultural diversity of Jharkhand is reflected in its festivals, music, dance, and art. The state celebrates a myriad of festivals throughout the year, including Sarhul, Karma, and Tusu, with great fervor and enthusiasm. Traditional dance forms like Jhumair and Paika are an integral part of Jharkhandi culture, captivating audiences with their energy and vibrancy."],
        ["Tourism is a growing industry in Jharkhand, with travelers flocking to the state to explore its natural and cultural treasures. The state offers a wide range of attractions, including ancient temples, historic forts, and picturesque waterfalls. Popular tourist destinations include the Hundru Falls, Netarhat, and Betla National Park, known for its diverse flora and fauna."],
        ["Jharkhand is home to a rich variety of wildlife, with its dense forests and diverse ecosystems supporting a wide range of flora and fauna. The state is home to several wildlife sanctuaries and national parks, including the Palamau Tiger Reserve and the Dalma Wildlife Sanctuary, which offer opportunities for wildlife spotting and eco-tourism. Endangered species like the Asian elephant and Indian pangolin find refuge in the pristine wilderness of Jharkhand."],
        ["Jharkhand cuisine is characterized by its simplicity and reliance on locally available ingredients. Rice is the staple food, and various rice-based dishes like rice roti, pua, and peetha are popular. The cuisine also includes a variety of lentil-based dishes like dal bati churma and khichdi, often accompanied by tangy pickles and chutneys. Meat dishes, including chicken, mutton, and fish, are also consumed, with traditional cooking methods like roasting and stewing being prevalent. Sweets like tilkut and anarsa are enjoyed during festivals and special occasions, adding a touch of sweetness to Jharkhandi cuisine."]
        ]
    },
    {
        name: "Karnataka",
        headings: ["History", "Culture", "Tourism", "Cuisine"],
        paragraphs: [
            ["Karnataka, located in southern India, is known for its rich history, vibrant culture, and diverse landscapes. The state is home to several ancient civilizations, including the Vijayanagara Empire, which flourished during the medieval period. Karnataka's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Karnataka is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Dasara, Ugadi, and Makar Sankranti, with great fervor and enthusiasm. Traditional dance forms like Yakshagana and Dollu Kunitha are an integral part of Karnataka's cultural landscape, captivating audiences with their energy and vibrancy."],
            ["Tourism is a major industry in Karnataka, with millions of visitors flocking to the state each year to explore its historic monuments, scenic landscapes, and vibrant culture. The state offers a wide range of attractions, including ancient temples, lush green forests, and pristine beaches. Popular tourist destinations include Hampi, a UNESCO World Heritage Site, Mysore, known for its majestic palaces, and Coorg, a picturesque hill station."],
            ["Karnataka cuisine is renowned for its rich flavors, aromatic spices, and diverse dishes. The cuisine is a delightful blend of flavors from South India, North India, and the coastal regions, offering a unique culinary experience. Must-try dishes include masala dosa, bisi bele bath, and Mysore pak, which are bursting with flavor and aroma. Karnataka's sweets, such as obbattu and chiroti, are also popular among locals and visitors alike, offering a sweet ending to a delicious meal."]
        ]
    },
    {
        name: "Kerala",
        headings: ["Geography", "Culture", "Tourism", "Cuisine"],
        paragraphs: [
            ["Kerala, often referred to as 'God's Own Country', is known for its picturesque landscapes, tranquil backwaters, and vibrant culture. The state is nestled between the Arabian Sea and the Western Ghats, offering breathtaking views and unparalleled natural beauty. Kerala's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Kerala is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Onam, Vishu, and Thrissur Pooram, with great fervor and enthusiasm. Traditional dance forms like Kathakali, Mohiniyattam, and Theyyam are an integral part of Kerala's cultural landscape, captivating audiences with their grace and elegance."],
            ["Tourism is the backbone of Kerala's economy, with millions of visitors flocking to the state each year to explore its natural and cultural treasures. The state offers a wide range of attractions, including serene backwaters, lush green hill stations, and pristine beaches. Popular tourist destinations include Alleppey, known for its houseboat cruises, Munnar, a picturesque hill station, and Kochi, a historic port city."],
            ["Kerala cuisine is renowned for its rich flavors, aromatic spices, and seafood delicacies. The cuisine is a delightful blend of flavors from South India, Arab, and European cuisines, offering a unique culinary experience. Must-try dishes include appam with stew, fish curry, and puttu with kadala curry, which are bursting with flavor and aroma. Kerala's sweets, such as payasam and unniyappam, are also popular among locals and visitors alike, offering a sweet ending to a delicious meal."]
        ]
    },
    {
        name: "Madhya Pradesh",
        headings: ["History", "Culture", "Tourism", "Wildlife", "Cuisine"],
        paragraphs: [
        ["Madhya Pradesh, located in central India, is known for its rich history, vibrant culture, and diverse landscapes. The state is home to several ancient civilizations, including the Gupta Empire and the Maurya Empire, which flourished during the medieval period. Madhya Pradesh's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
        ["The cultural diversity of Madhya Pradesh is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Diwali, Holi, and Navratri, with great fervor and enthusiasm. Traditional dance forms like Giddha and Rai are an integral part of Madhya Pradesh's cultural landscape, captivating audiences with their energy and vibrancy."],
        ["Tourism is a major industry in Madhya Pradesh, with millions of visitors flocking to the state each year to explore its historic monuments, scenic landscapes, and vibrant culture. The state offers a wide range of attractions, including ancient temples, historic forts, and lush green national parks. Popular tourist destinations include Khajuraho, known for its erotic sculptures, Sanchi, a UNESCO World Heritage Site, and Bandhavgarh National Park, famous for its tiger population."],
        ["Madhya Pradesh is home to a rich variety of wildlife, with its dense forests and diverse ecosystems supporting a wide range of flora and fauna. The state is home to several wildlife sanctuaries and national parks, including Kanha National Park and Pench National Park, which offer opportunities for wildlife spotting and eco-tourism. Endangered species like the Bengal tiger and Indian leopard find refuge in the pristine wilderness of Madhya Pradesh."],
        ["Madhya Pradesh cuisine is known for its rich and flavorsome dishes, influenced by its cultural diversity and locally available ingredients. The cuisine offers a wide variety of vegetarian and non-vegetarian options, with dishes ranging from spicy curries to savory snacks. Staple foods include wheat, rice, and jowar, which are used to make a variety of bread and rotis. Popular dishes include bhutte ki kees, a savory snack made from grated corn, and poha, flattened rice cooked with spices and vegetables. Meat dishes like kebabs and biryanis are also popular, especially in regions with a significant Muslim population. Sweets like jalebi, imarti, and gajak are enjoyed as desserts or snacks."]
        ]
    },
    {
        name: "Maharashtra",
        headings: ["History", "Culture", "Tourism", "Cuisine"],
        paragraphs: [
            ["Maharashtra, located in western India, is known for its rich history, vibrant culture, and diverse landscapes. The state is home to several ancient civilizations, including the Maratha Empire and the Satavahana dynasty, which flourished during the medieval period. Maharashtra's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Maharashtra is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Ganesh Chaturthi, Diwali, and Gudi Padwa, with great fervor and enthusiasm. Traditional dance forms like Lavani and Tamasha are an integral part of Maharashtra's cultural landscape, captivating audiences with their energy and vibrancy."],
            ["Tourism is a major industry in Maharashtra, with millions of visitors flocking to the state each year to explore its historic monuments, scenic landscapes, and vibrant culture. The state offers a wide range of attractions, including ancient caves, hill stations, and pristine beaches. Popular tourist destinations include Mumbai, the financial capital of India, Pune, known for its historic landmarks, and Mahabaleshwar, a picturesque hill station."],
            ["Maharashtrian cuisine is renowned for its rich flavors, aromatic spices, and diverse dishes. The cuisine is a delightful blend of flavors from Konkan, Marathwada, and Vidarbha regions, offering a unique culinary experience. Must-try dishes include vada pav, pav bhaji, and puran poli, which are bursting with flavor and aroma. Maharashtrian sweets, such as modak and shrikhand, are also popular among locals and visitors alike, offering a sweet ending to a delicious meal."]
        ]
    },
    {
        name: "Manipur",
        headings: ["Geography", "Culture", "Tourism", "Wildlife"],
        paragraphs: [
            ["Manipur, located in northeastern India, is known for its scenic landscapes, vibrant culture, and rich biodiversity. The state is nestled in the eastern Himalayas, offering breathtaking views and unparalleled natural beauty. Manipur's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Manipur is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Yaoshang, Ningol Chakouba, and Lai Haraoba, with great fervor and enthusiasm. Traditional dance forms like Manipuri dance and Thabal Chongba are an integral part of Manipuri culture, captivating audiences with their grace and elegance."],
            ["Tourism is a growing industry in Manipur, with travelers flocking to the state to explore its natural and cultural treasures. The state offers a wide range of attractions, including ancient temples, historic forts, and picturesque lakes. Popular tourist destinations include Loktak Lake, the largest freshwater lake in northeastern India, and Kangla Fort, a historic site with archaeological significance."],
            ["Manipur is home to a rich variety of wildlife, with its dense forests and diverse ecosystems supporting a wide range of flora and fauna. The state is home to several wildlife sanctuaries and national parks, including Keibul Lamjao National Park and Sirohi National Park, which offer opportunities for wildlife spotting and eco-tourism. Endangered species like the brow-antlered deer and clouded leopard find refuge in the pristine wilderness of Manipur."]
        ]
    },
    {
        name: "Meghalaya",
        headings: ["Geography", "Culture", "Tourism", "Wildlife"],
        paragraphs: [
            ["Meghalaya, located in northeastern India, is known for its scenic landscapes, lush greenery, and vibrant culture. The state is nestled in the eastern Himalayas, offering breathtaking views and unparalleled natural beauty. Meghalaya's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Meghalaya is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Wangala, Shad Suk Mynsiem, and Behdeinkhlam, with great fervor and enthusiasm. Traditional dance forms like Nongkrem and Shad are an integral part of Meghalayan culture, captivating audiences with their grace and elegance."],
            ["Tourism is a growing industry in Meghalaya, with travelers flocking to the state to explore its natural and cultural treasures. The state offers a wide range of attractions, including scenic waterfalls, ancient caves, and picturesque lakes. Popular tourist destinations include Cherrapunji, known for its living root bridges, Mawlynnong, the cleanest village in Asia, and Dawki, a scenic town on the India-Bangladesh border."],
            ["Meghalaya is home to a rich variety of wildlife, with its dense forests and diverse ecosystems supporting a wide range of flora and fauna. The state is home to several wildlife sanctuaries and national parks, including Balpakram National Park and Nokrek National Park, which offer opportunities for wildlife spotting and eco-tourism. Endangered species like the clouded leopard and Asian elephant find refuge in the pristine wilderness of Meghalaya."]
        ]
    },
    {
        name: "Mizoram",
        headings: ["Geography", "Culture", "Tourism", "Wildlife"],
        paragraphs: [
            ["Mizoram, located in northeastern India, is known for its scenic landscapes, lush greenery, and vibrant culture. The state is nestled in the eastern Himalayas, offering breathtaking views and unparalleled natural beauty. Mizoram's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Mizoram is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Chapchar Kut, Mim Kut, and Pawl Kut, with great fervor and enthusiasm. Traditional dance forms like Cheraw and Khuallam are an integral part of Mizo culture, captivating audiences with their rhythm and energy."],
            ["Tourism is a growing industry in Mizoram, with travelers flocking to the state to explore its natural and cultural treasures. The state offers a wide range of attractions, including scenic landscapes, serene lakes, and ancient caves. Popular tourist destinations include Aizawl, the capital city, Tuirihiau Waterfalls, and Phawngpui Peak, the highest mountain in Mizoram."],
            ["Mizoram is home to a rich variety of wildlife, with its dense forests and diverse ecosystems supporting a wide range of flora and fauna. The state is home to several wildlife sanctuaries and national parks, including Dampa Tiger Reserve and Murlen National Park, which offer opportunities for wildlife spotting and eco-tourism. Endangered species like the Hoolock gibbon and Indian python find refuge in the pristine wilderness of Mizoram."]
        ]
    },
    {
        name: "Nagaland",
        headings: ["Geography", "Culture", "Tourism", "Wildlife"],
        paragraphs: [
            ["Nagaland, located in northeastern India, is known for its scenic landscapes, vibrant culture, and rich biodiversity. The state is nestled in the eastern Himalayas, offering breathtaking views and unparalleled natural beauty. Nagaland's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Nagaland is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Hornbill Festival, Moatsu, and Sekrenyi, with great fervor and enthusiasm. Traditional dance forms like Chang Lo and Zeliang are an integral part of Naga culture, captivating audiences with their rhythm and energy."],
            ["Tourism is a growing industry in Nagaland, with travelers flocking to the state to explore its natural and cultural treasures. The state offers a wide range of attractions, including scenic landscapes, ancient monuments, and serene lakes. Popular tourist destinations include Kohima, the capital city, Dzukou Valley, known for its trekking trails, and Dimapur, the commercial hub of Nagaland."],
            ["Nagaland is home to a rich variety of wildlife, with its dense forests and diverse ecosystems supporting a wide range of flora and fauna. The state is home to several wildlife sanctuaries and national parks, including Intanki Wildlife Sanctuary and Fakim Wildlife Sanctuary, which offer opportunities for wildlife spotting and eco-tourism. Endangered species like the Hoolock gibbon and Blyth's tragopan find refuge in the pristine wilderness of Nagaland."]
        ]
    },
    {
        name: "Odisha",
        headings: ["History", "Culture", "Tourism", "Cuisine"],
        paragraphs: [
            ["Odisha, located in eastern India, is known for its rich history, vibrant culture, and diverse landscapes. The state is home to several ancient civilizations, including the Kalinga Empire, which flourished during the medieval period. Odisha's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Odisha is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Rath Yatra, Durga Puja, and Konark Dance Festival, with great fervor and enthusiasm. Traditional dance forms like Odissi and Chhau are an integral part of Odia culture, captivating audiences with their grace and elegance."],
            ["Tourism is a major industry in Odisha, with millions of visitors flocking to the state each year to explore its historic monuments, scenic landscapes, and vibrant culture. The state offers a wide range of attractions, including ancient temples, pristine beaches, and lush green forests. Popular tourist destinations include the Sun Temple in Konark, the Jagannath Temple in Puri, and the Chilika Lake, Asia's largest brackish water lagoon."],
            ["Odia cuisine is renowned for its rich flavors, aromatic spices, and seafood delicacies. The cuisine is a delightful blend of flavors from North India, South India, and Southeast Asia, offering a unique culinary experience. Must-try dishes include dalma, machha besara, and chhena poda, which are bursting with flavor and aroma. Odisha's sweets, such as rasagulla and chhena gaja, are also popular among locals and visitors alike, offering a sweet ending to a delicious meal."]
        ]
    },
    {
        name: "Punjab",
        headings: ["History", "Culture", "Tourism", "Cuisine"],
        paragraphs: [
            ["Punjab, located in northern India, is known for its fertile plains, vibrant culture, and rich history. The state is often referred to as the 'Land of Five Rivers' due to its extensive network of rivers, including the mighty Indus. Punjab's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Punjab is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Baisakhi, Lohri, and Gurpurab, with great fervor and enthusiasm. Traditional dance forms like Bhangra and Giddha are an integral part of Punjabi culture, captivating audiences with their energy and vibrancy."],
            ["Tourism is a growing industry in Punjab, with travelers flocking to the state to explore its historic monuments, scenic landscapes, and vibrant culture. The state offers a wide range of attractions, including ancient forts, historic cities, and serene lakes. Popular tourist destinations include the Golden Temple in Amritsar, the Wagah Border, and the Rock Garden in Chandigarh."],
            ["Punjabi cuisine is renowned for its rich flavors, aromatic spices, and hearty meals. The cuisine is characterized by its liberal use of ghee, butter, and cream, giving it a distinct taste and aroma. Must-try dishes include sarson da saag with makki di roti, chole bhature, and tandoori chicken, which are bursting with flavor and aroma. Punjabi sweets, such as jalebi and gulab jamun, are also popular among locals and visitors alike, offering a sweet ending to a delicious meal."]
        ]
    },
    {
        name: "Rajasthan",
        headings: ["History", "Culture", "Tourism", "Cuisine"],
        paragraphs: [
            ["Rajasthan, located in western India, is known for its rich history, vibrant culture, and majestic forts. The state is often referred to as the 'Land of Kings' due to its royal heritage and grandeur. Rajasthan's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Rajasthan is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Diwali, Holi, and Teej, with great fervor and enthusiasm. Traditional dance forms like Ghoomar and Kalbelia are an integral part of Rajasthani culture, captivating audiences with their grace and elegance."],
            ["Tourism is a major industry in Rajasthan, with millions of visitors flocking to the state each year to explore its historic monuments, majestic forts, and vibrant culture. The state offers a wide range of attractions, including the palaces of Jaipur, the lakes of Udaipur, and the desert landscapes of Jaisalmer. Popular tourist destinations include the Amber Fort, Mehrangarh Fort, and the Thar Desert."],
            ["Rajasthani cuisine is renowned for its rich flavors, aromatic spices, and royal delicacies. The cuisine is characterized by its use of ghee, spices, and dry fruits, giving it a distinct taste and aroma. Must-try dishes include dal bati churma, gatte ki sabzi, and laal maas, which are bursting with flavor and aroma. Rajasthani sweets, such as ghewar and mawa kachori, are also popular among locals and visitors alike, offering a sweet ending to a delicious meal."]
        ]
    },
    {
        name: "Sikkim",
        headings: ["Geography", "Culture", "Tourism", "Wildlife"],
        paragraphs: [
            ["Sikkim, located in northeastern India, is known for its scenic landscapes, serene monasteries, and vibrant culture. The state is nestled in the eastern Himalayas, offering breathtaking views and unparalleled natural beauty. Sikkim's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Sikkim is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Losar, Saga Dawa, and Pang Lhabsol, with great fervor and enthusiasm. Traditional dance forms like Cham and Maruni are an integral part of Sikkimese culture, captivating audiences with their grace and elegance."],
            ["Tourism is a major industry in Sikkim, with travelers flocking to the state to explore its natural and cultural treasures. The state offers a wide range of attractions, including Buddhist monasteries, high-altitude lakes, and picturesque trekking routes. Popular tourist destinations include the Rumtek Monastery, Tsomgo Lake, and Yumthang Valley, known as the 'Valley of Flowers'."],
            ["Sikkim is home to a rich variety of wildlife, with its dense forests and diverse ecosystems supporting a wide range of flora and fauna. The state is home to several wildlife sanctuaries and national parks, including Khangchendzonga National Park and Fambong Lho Wildlife Sanctuary, which offer opportunities for wildlife spotting and eco-tourism. Endangered species like the red panda and snow leopard find refuge in the pristine wilderness of Sikkim."]
        ]
    },
    {
        name: "Tamil Nadu",
        headings: ["History", "Culture", "Tourism", "Cuisine"],
        paragraphs: [
            ["Tamil Nadu, located in southern India, is known for its rich history, vibrant culture, and diverse landscapes. The state is home to several ancient civilizations, including the Chola and Pallava dynasties, which flourished during the medieval period. Tamil Nadu's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Tamil Nadu is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Pongal, Navratri, and Tamil New Year, with great fervor and enthusiasm. Traditional dance forms like Bharatanatyam and Karagattam are an integral part of Tamil culture, captivating audiences with their grace and elegance."],
            ["Tourism is a major industry in Tamil Nadu, with millions of visitors flocking to the state each year to explore its historic monuments, scenic landscapes, and vibrant culture. The state offers a wide range of attractions, including ancient temples, hill stations, and pristine beaches. Popular tourist destinations include the Meenakshi Temple in Madurai, the hill station of Ooty, and the coastal town of Mahabalipuram."],
            ["Tamil cuisine is renowned for its rich flavors, aromatic spices, and vegetarian delicacies. The cuisine is characterized by its use of rice, lentils, and coconut, giving it a distinct taste and aroma. Must-try dishes include dosa, idli, and sambar, which are bursting with flavor and nutrition. Tamil sweets, such as mysore pak and adhirasam, are also popular among locals and visitors alike, offering a sweet ending to a delicious meal."]
        ]
},
    {
        name: "Telangana",
        headings: ["History", "Culture", "Tourism", "Cuisine"],
        paragraphs: [
            ["Telangana, located in southern India, is known for its rich history, vibrant culture, and diverse landscapes. The state is home to several ancient kingdoms, including the Kakatiya and Satavahana dynasties, which flourished during the medieval period. Telangana's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Telangana is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Bonalu, Bathukamma, and Ugadi, with great fervor and enthusiasm. Traditional dance forms like Perini and Gussadi are an integral part of Telangana's cultural landscape, captivating audiences with their energy and vibrancy."],
            ["Tourism is a growing industry in Telangana, with travelers flocking to the state to explore its historic monuments, scenic landscapes, and vibrant culture. The state offers a wide range of attractions, including ancient temples, historic forts, and serene lakes. Popular tourist destinations include the Golconda Fort in Hyderabad, the Ramappa Temple in Warangal, and the Nagarjuna Sagar Dam, one of the largest dams in India."],
            ["Telangana cuisine is renowned for its bold flavors, aromatic spices, and rich dishes. The cuisine is characterized by its use of millets, spices, and meat, giving it a distinct taste and aroma. Must-try dishes include hyderabadi biryani, mirchi ka salan, and gongura pachadi, which are bursting with flavor and aroma. Telangana sweets, such as double ka meetha and poornam boorelu, are also popular among locals and visitors alike, offering a sweet ending to a delicious meal."]
        ]
    },
    {
        name: "Tripura",
        headings: ["Geography", "Culture", "Tourism", "Wildlife"],
        paragraphs: [
            ["Tripura, located in northeastern India, is known for its scenic landscapes, vibrant culture, and rich biodiversity. The state is nestled in the eastern Himalayas, offering breathtaking views and unparalleled natural beauty. Tripura's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Tripura is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Kharchi Puja, Garia Puja, and Durga Puja, with great fervor and enthusiasm. Traditional dance forms like Garia and Lebang Boomani are an integral part of Tripuri culture, captivating audiences with their rhythm and energy."],
            ["Tourism is a growing industry in Tripura, with travelers flocking to the state to explore its natural and cultural treasures. The state offers a wide range of attractions, including ancient temples, serene lakes, and picturesque waterfalls. Popular tourist destinations include the Ujjayanta Palace in Agartala, Neermahal Palace on Lake Rudrasagar, and Sepahijala Wildlife Sanctuary."],
            ["Tripura is home to a rich variety of wildlife, with its dense forests and diverse ecosystems supporting a wide range of flora and fauna. The state is home to several wildlife sanctuaries and national parks, including Sepahijala Wildlife Sanctuary and Gumti Wildlife Sanctuary, which offer opportunities for wildlife spotting and eco-tourism. Endangered species like the phayre's langur and clouded leopard find refuge in the pristine wilderness of Tripura."]
        ]
    },
    {
        name: "Uttar Pradesh",
        headings: ["History", "Culture", "Tourism", "Cuisine"],
        paragraphs: [
            ["Uttar Pradesh, located in northern India, is known for its rich history, vibrant culture, and diverse landscapes. The state is home to several ancient civilizations, including the Maurya and Gupta Empires, which flourished during the medieval period. Uttar Pradesh's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Uttar Pradesh is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Diwali, Holi, and Eid, with great fervor and enthusiasm. Traditional dance forms like Kathak and Raslila are an integral part of Uttar Pradesh's cultural landscape, captivating audiences with their grace and elegance."],
            ["Tourism is a major industry in Uttar Pradesh, with millions of visitors flocking to the state each year to explore its historic monuments, sacred sites, and vibrant culture. The state offers a wide range of attractions, including the Taj Mahal in Agra, the holy city of Varanasi, and the historic town of Lucknow. Popular tourist destinations also include the forts of Allahabad, the temples of Mathura, and the ghats of Ayodhya."],
            ["Uttar Pradesh cuisine is renowned for its rich flavors, aromatic spices, and hearty meals. The cuisine is characterized by its use of wheat, rice, and lentils, along with generous amounts of ghee and spices, giving it a distinct taste and aroma. Must-try dishes include kebabs, biryani, and chaat, which are bursting with flavor and aroma. Uttar Pradesh sweets, such as peda and jalebi, are also popular among locals and visitors alike, offering a sweet ending to a delicious meal."]
        ]
    },
    {
        name: "Uttarakhand",
        headings: ["Geography", "Culture", "Tourism", "Wildlife"],
        paragraphs: [
            ["Uttarakhand, located in northern India, is known for its scenic landscapes, majestic mountains, and vibrant culture. The state is nestled in the Himalayas, offering breathtaking views and unparalleled natural beauty. Uttarakhand's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of Uttarakhand is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Kumbh Mela, Nanda Devi Raj Jat, and Uttarakhandi New Year, with great fervor and enthusiasm. Traditional dance forms like Langvir Nritya and Barada Nati are an integral part of Uttarakhandi culture, captivating audiences with their energy and vibrancy."],
            ["Tourism is a major industry in Uttarakhand, with millions of visitors flocking to the state each year to explore its natural and cultural treasures. The state offers a wide range of attractions, including holy pilgrimage sites, scenic hill stations, and adventurous trekking routes. Popular tourist destinations include the Char Dham Yatra, Valley of Flowers National Park, and Jim Corbett National Park."],
            ["Uttarakhand is home to a rich variety of wildlife, with its dense forests and diverse ecosystems supporting a wide range of flora and fauna. The state is home to several wildlife sanctuaries and national parks, including Rajaji National Park and Nanda Devi National Park, which offer opportunities for wildlife spotting and eco-tourism. Endangered species like the Bengal tiger and snow leopard find refuge in the pristine wilderness of Uttarakhand."]
        ]
    },
    {
        name: "West Bengal",
        headings: ["History", "Culture", "Tourism", "Cuisine"],
        paragraphs: [
            ["West Bengal, located in eastern India, is known for its rich history, vibrant culture, and diverse landscapes. The state is home to several ancient civilizations, including the Bengal Sultanate and the British Raj, which flourished during the medieval period. West Bengal's cultural heritage is reflected in its festivals, music, dance, and art, which showcase the state's rich traditions and customs."],
            ["The cultural diversity of West Bengal is evident in its festivals, music, dance, and cuisine. The state celebrates a myriad of festivals throughout the year, including Durga Puja, Diwali, and Poila Boishakh, with great fervor and enthusiasm. Traditional dance forms like Rabindra Nritya and Chhau are an integral part of Bengali culture, captivating audiences with their grace and elegance."],
            ["Tourism is a major industry in West Bengal, with millions of visitors flocking to the state each year to explore its historic monuments, scenic landscapes, and vibrant culture. The state offers a wide range of attractions, including the Sunderbans, a UNESCO World Heritage Site, the Darjeeling Himalayan Railway, and the historic city of Kolkata. Popular tourist destinations also include the hill stations of Darjeeling and Kalimpong, and the beach town of Digha."],
            ["Bengali cuisine is renowned for its rich flavors, aromatic spices, and seafood delicacies. The cuisine is characterized by its use of rice, fish, and mustard oil, giving it a distinct taste and aroma. Must-try dishes include macher jhol, roshogolla, and sandesh, which are bursting with flavor and aroma. Bengali sweets, such as mishti doi and rasgulla, are also popular among locals and visitors alike, offering a sweet ending to a delicious meal."]
        ]
    }
];


export default function State() {
    const [selectedState, setSelectedState] = useState(null);

    const handleStateClick = (state) => {
        console.log('Clicked on ${state.name}');
        setSelectedState(state);
    };
    

    return (
        <div className="state-container">
            <div className="menu-bar">
                <h2>Indian States</h2>
                <div className="state-list">
                    {states.map((state, index) => (
                        <div key={index} className="state-item" onClick={() => handleStateClick(state)}>
                            {state.name}
                        </div>
                    ))}
                </div>
            </div>
            {selectedState && (
                <div className="state-content">
                    <div className="content-wrapper">
                        <h2>{selectedState.name}</h2>
                        {selectedState.headings.map((heading, index) => (
                            <div key={index}>
                                <h3>{heading}</h3>
                                {selectedState.paragraphs[index].map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
