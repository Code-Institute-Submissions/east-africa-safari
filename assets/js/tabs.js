// items
const places =[
    {
        id: 1,
        title: "maasai mara national reserve",
        category: "kenya",
        img: "assets/images/item-1.jpg",
        desc: `Maasai Mara National Reserve is one of the key popular tourism points in Kenya. It is located in 
        South-Western Kenya along the Great Rift Valley adjacent to Serengeti National Park of Tanzania. The 
        attraction in Maasai Mara National Reserve are both nature and wildlife. The Wildebeest migration is 
        also witnessed in the Kenya iconic Masai Mara National Reserve. A good short safari combination for those hoping
        to also see all these charismatic creatures (THE BIG FIVE)(and much more besides would be Masai Mara (for lion,
        leopard,buffalo and elephant) and lake Nakuru (for black and white rhino)`,
    },
    {
        id: 2,
        title: "bwindi impenetrable national park",
        category: "uganda",
        img: "assets/images/item-2.jpg",
        desc: `Among East African forests, Bwindi has some of the richest populations of trees, small mammals, birds, 
        reptiles, butterflies and moths. The park's diverse species may be because the forest was a refuge for species 
        during glaciationin the pleistocene epoch. The park's forests are afromontane, a rare vegetation type of the African
        continent, the park is important for the coservation of afromomtane fauna. The park also is inhabited by about 600 
        individual mountain gorillas which makes up almost half of all the mountain gorillas in the world.`,

    },
    {
        id: 3,
        title: "serengeti national park",
        category: "tanzania",
        img: "assets/images/item-3.jpg",
        desc: `Named for the Maasai word "siringet" (which translates roughly as "the place where the land runs on forever")
        Serengeti National Park is among the oldest game reserves in Tanzania. It is also one of the most iconic safari 
        destinations on the African continent. Located in the North of the country, it partly adjoins the Kenyan border
        and together with the Masai Mara National Reserve provides the backdrop for the annual Great Migration - considered
        by many to be the planet's most impressive natural event.`,

    },
    {
        id: 4,
        title: "hell's gate national park",
        category: "kenya",
        img: "assets/images/item-4.jpg",
        desc: `Hell's Gate National Park lies south of Lake Naivasha in Kenya, North West of Nairobi. A small national park, it is
        known for its wide variety of wildlife and for its scenery. There is a wide variety of wildlife in the national park, 
        though many are few in number. Examples of little seen wildlife include lions, leopards, and cheetahs. However, 
        the park has historically been an important home for the rare lammergeyer vultures. There are over 103 species of
        birds in the park, including vultures, Verreaux's eagles, augur buzzard, and swifts. Hyraxes,African buffalo, 
        zebra, eland, hartebeest, Thomson's gazelle, hyena, and baboons are also common. The park is also home to several
        and small numbers of klipspringer antelope and Chanler's mountain reedbuck.`,
 

    },
    {
        id: 5,
        title: "queen elizabeth national park",
        category: "uganda",
        img: "assets/images/item-5.png",
        desc: `Queen Elizabeth National Park incorporates dozens of mirror surfaced crater-lakes, salty and fresh water lakes. 
        There are over 95 mammal including 10 primate species (chimpanzees, L’Hoest monkey, Columbus, baboons), up to 20 
        predators (lion, leopard, spotted hyena, etc.), antelopes, buffaloes, hippos, elephants. More than 610 bird species 
        (probably the highest total for any national park in Africa, if not the world. In addition to 54 raptors, the checklist 
        includes virtually every water bird species of Uganda, a variety of woodland and forest species.`,

    },
    {
        id: 6,
        title: "ngorongoro crater",
        category: "tanzania",
        img: "assets/images/item-6.jpg",
        desc: `The main feature of the Ngorongoro Conservation Authority is the Ngorongoro Crater, the world's largest inactive, 
        intact and unfilled volcanic caldera The crater, which formed when a large volcano exploded and collapsed on itself two
        to three million years ago, is 610 metres (2,000 feet) deep and its floor covers 260 square kilometres (100 square miles)
        Estimates of the height of the original volcano range from 4,500 to 5,800 metres (14,800 to 19,000 feet) high. The crater
        floor is 1,800 metres (5,900 feet) above sea level. The crater was voted by Seven Natural Wonders as one of the Seven
        Natural Wonders of Africa in Arusha, Tanzania in February 2013. The Ngorongoro volcano was active from about 2.45 to
        2 million years ago `,

    },
    {
        id: 7,
        title: "rift valley lakes",
        category: "kenya",
        img: "assets/images/item-7.jpg",
        desc: `The Kenyan section of the Rift Valley is home to eight lakes, of which three are freshwater and the rest alkaline. 
        Of the latter, the shallow soda lakes of the Eastern Rift Valley have crystallized salt turning the shores white and are 
        famous for the large flocks of flamingo that feed on crustaceans. The Rift Valley lakes are well known for the evolution
        of at least 800 cichlid fish species that live in their waters. More species are expected to be discovered.

 `,

    },
    {
        id: 8,
        title: "ruwenzori mountains",
        category: "uganda",
        img: "assets/images/item-8.jpg",
        desc: `The Ruwenzori, are a range of mountains in eastern equatorial Africa, located on the border between Uganda and
        the Democratic Republic of the Congo. The highest peak of the Ruwenzori reaches 5,109 metres (16,762 ft), and the range's
        upper regions are permanently snow-capped and glaciated. Rivers fed by mountain streams form one of the sources of the 
        Nile,[1] for which reason during the European exploration of Africa, the Ruwenzori came to be identified with the 
        legendary Mountains of the Moon, identified by the Greek scholar Ptolemy as the source of the Nile.
        The Ruwenzori are known for their vegetation, ranging from tropical rainforest through alpine meadows to snow. The range 
        supports its own species and varieties of giant groundsel and giant lobelia and even has a 6 metres (20 ft) tall heather
        covered in moss that lives on one of its peaks. Most of the range is now a World Heritage Site and is covered jointly by
        Rwenzori Mountains National Park in southwestern Uganda and the Virunga National Park in the eastern Congo.`,

    },
    {
        id: 9,
        title: "tangarine national park",
        category: "tanzania",
        img: "assets/images/item-9.jpg",
        desc: `Tarangire National Park is a national park in Tanzania's Manyara Region. The name of the park originates from the 
        Tarangire River that crosses the park. The Tarangire River is the primary source of fresh water for wild animals in the
        Tarangire Ecosystem during the annual dry season. The Tarangire Ecosystem is defined by the long-distance migration of
        wildebeest and zebras. During the dry season thousands of animals concentrate in Tarangire National Park from the 
        surrounding wet-season dispersal and calving areas. The oldest known elephant to give birth to twins is found in 
        Tarangrire. A recent birth of elephant twins in the Tarangire National Park of Tanzania is a great example of how 
        the birth of these two healthy and thriving twins can beat the odds.
        Home to more than 550 bird species, the park is a haven for bird enthusiasts.`,

    },
]


var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

function openKenya() {
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    btn1.style.color = "#FF6700";
    btn2.style.color = "#03045E";
    btn3.style.color = "#03045E";
}
function openUganda() {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";
    btn2.style.color = "#FF6700";
    btn1.style.color = "#03045E";
    btn3.style.color = "#03045E";
}
function openTanzania() {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0)";
    btn3.style.color = "#FF6700";
    btn2.style.color = "#03045E";
    btn1.style.color = "#03045E";
}
