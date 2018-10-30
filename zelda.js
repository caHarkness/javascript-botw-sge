//
//  include  MarcBinFile.min.js
//  include  SaveAs.min.js
//

//
//  Source: https://github.com/marcrobledo/savegame-editors/blob/master/zelda-botw/zelda-botw.data.js
//
var BOTW_Data =
{
    //
    //  The game keeps track of each individual Korok puzzle and its state of completion.
    //  All this program will do is write 0x00 or 0x01 to all 900 of these address offsets at once!
    //
    KOROKS: [
        0x002c5b5d, 0x0059aae8, 0x0066ded0, 0x00753066, 0x0105ef12, 0x01a77626, 0x022e0e12, 0x02621e0d, 0x030bd873, 
        0x032d8700, 0x03443957, 0x037dfc51, 0x03924391, 0x03d6015e, 0x042c6214, 0x04774091, 0x04b6719b, 0x04bcb461, 
        0x05388d71, 0x05828e12, 0x05a246a2, 0x060b5dd9, 0x0664971e, 0x07518cd7, 0x07975126, 0x07edf88b, 0x07f53fae, 
        0x08546066, 0x093d1f93, 0x09533a19, 0x095d5540, 0x09af9809, 0x0a467aec, 0x0aab98c9, 0x0b03cec2, 0x0b19b851, 
        0x0b358ef9, 0x0b727016, 0x0bdebc55, 0x0bfa2096, 0x0c1a9b21, 0x0c66c8aa, 0x0c91457e, 0x0d62d541, 0x0d90eabf, 
        0x0de05681, 0x0e1bab2b, 0x0e2d38d1, 0x0e6aa63d, 0x0e6e49e6, 0x0ea24f4c, 0x0f42e520, 0x0f9242ec, 0x10ff5446, 
        0x11e0cf95, 0x12915bc4, 0x12a50513, 0x12c054b3, 0x13025056, 0x1317a6a4, 0x134475fc, 0x138ac4c9, 0x139f0bdc, 
        0x13fe59ca, 0x140f447d, 0x141b4dec, 0x144479ea, 0x14a7d3b8, 0x1536edde, 0x15905a70, 0x15c3415d, 0x17277806, 
        0x17558872, 0x17620397, 0x17997994, 0x181364a8, 0x18c5e539, 0x1911ba9b, 0x19b169e1, 0x19e1da3a, 0x1a51b775, 
        0x1af5fbf1, 0x1b44308f, 0x1b50b160, 0x1b9c14c4, 0x1be2b3ed, 0x1c2cebb5, 0x1d26bfc6, 0x1e37b9d3, 0x1e5870f3, 
        0x1e92767b, 0x1ed6d88c, 0x1f7e6066, 0x1f9d7be0, 0x1ffc5f3f, 0x2067839b, 0x21049e6d, 0x2172b5da, 0x219f8191, 
        0x21fa3907, 0x22008f4a, 0x22374558, 0x224c2d20, 0x23166cb2, 0x2435519f, 0x245527c7, 0x2482e3e2, 0x24d7197c, 
        0x26743533, 0x2685f3a7, 0x26acfebb, 0x26bfbead, 0x273b4962, 0x2761df77, 0x27729224, 0x2789911a, 0x279bcc46, 
        0x27d9e48f, 0x27ee227b, 0x285be209, 0x286b87c1, 0x28c6a403, 0x293f9601, 0x29531d38, 0x297ac38f, 0x2a134c17, 
        0x2a685c1e, 0x2a6e88c5, 0x2a7115b9, 0x2a956d11, 0x2ad0d275, 0x2adc59a7, 0x2b2674ca, 0x2b306b21, 0x2b617218, 
        0x2ba19d1e, 0x2bb51da0, 0x2bcf5168, 0x2bdafa92, 0x2bf2bfa3, 0x2c016340, 0x2c596e0b, 0x2c758cd9, 0x2c8c2594, 
        0x2cc21c7d, 0x2d7d823c, 0x2da020a7, 0x2e04bfa8, 0x2e2b3cc3, 0x2e36e82b, 0x2e72c9b2, 0x2ef650ea, 0x2f3c2ea2, 
        0x2fe77b9a, 0x30abfb13, 0x31776e42, 0x31893753, 0x31a00e68, 0x31c92a64, 0x31ed5300, 0x32441ef9, 0x325137af, 
        0x32594185, 0x32cd82e1, 0x32db0e32, 0x33d12189, 0x3432070d, 0x349f93b4, 0x34b9ea2d, 0x34e7350a, 0x350236a8, 
        0x35833d5f, 0x35d2e144, 0x35d44e1e, 0x35da7e79, 0x35ddecf1, 0x35ff3af3, 0x36919813, 0x3814a1ea, 0x38f48417, 
        0x397c7666, 0x399ffe15, 0x3a031153, 0x3a627ebc, 0x3aaaf546, 0x3b1391d4, 0x3b3f009f, 0x3b48064c, 0x3b7ce629, 
        0x3b854d84, 0x3b8acb25, 0x3bb376d3, 0x3c5e4ee6, 0x3c716aa0, 0x3cd4b5f0, 0x3dc85c5a, 0x3e1546e4, 0x3e4f52e6, 
        0x3e7a2c72, 0x3ed4373c, 0x3ef6c241, 0x3efdd10b, 0x3f8cebc3, 0x3fe2d9ba, 0x40041a33, 0x4083454e, 0x40c903b6, 
        0x417748c0, 0x421ccbdc, 0x424fc160, 0x42baf164, 0x42cf300d, 0x437626cf, 0x44260d03, 0x4437570a, 0x44760b6f, 
        0x44bae869, 0x44e4d73d, 0x450b9f2b, 0x450bc0fc, 0x458327c7, 0x45c63ebb, 0x45cafb59, 0x45e64655, 0x45f2d306, 
        0x467ee8b3, 0x46ef8e1d, 0x47079416, 0x470abbf6, 0x471abe01, 0x475ded63, 0x4784fd6b, 0x478bf467, 0x47f4c0e2, 
        0x485ae219, 0x48eb753e, 0x48faa931, 0x492c8b33, 0x49305266, 0x4963817f, 0x497b3aa1, 0x49cb2b7f, 0x4a0d4d30, 
        0x4a1b0c3e, 0x4a278879, 0x4a4be4b2, 0x4a68f549, 0x4a9fe113, 0x4add63de, 0x4ae88291, 0x4b1622c8, 0x4b225629, 
        0x4b864ab7, 0x4ba7a2f7, 0x4bf81bb3, 0x4c34123f, 0x4c435209, 0x4c624fdd, 0x4c676609, 0x4c71cd7d, 0x4cbf31a5, 
        0x4cf9af7a, 0x4d57c17f, 0x4d7068c2, 0x4dcf791e, 0x4ddac174, 0x4df49e60, 0x4e05dfc4, 0x4e1bec8d, 0x4e86f173, 
        0x4ea8552b, 0x506472d9, 0x50ab1278, 0x5205d39d, 0x520b5971, 0x526ee929, 0x52d18fa9, 0x52e200aa, 0x52eabbf9, 
        0x53449f3a, 0x535989d9, 0x53bf9a40, 0x542ca5dd, 0x5498e0e8, 0x55d95f2b, 0x5603fd19, 0x56323b35, 0x564f942b, 
        0x567c4331, 0x56a7b9b9, 0x5700b68a, 0x578f3784, 0x57ebd46f, 0x581282c5, 0x583a94ae, 0x5848c075, 0x58932cbd, 
        0x5893c1cd, 0x58ed79fc, 0x5911354c, 0x5947fa66, 0x595194e8, 0x59613b7f, 0x5987853d, 0x59ab55bb, 0x59e0685e, 
        0x59e4f211, 0x5a432e0e, 0x5a4a3917, 0x5ae18d84, 0x5af84790, 0x5b2750bd, 0x5b374fba, 0x5bc2358d, 0x5ced9ad3, 
        0x5d4170ff, 0x5d8f46c1, 0x5e2633fd, 0x5ec0d1ab, 0x5ef432e2, 0x5f208f59, 0x5f622fdc, 0x5fcdbd75, 0x5fdb248a, 
        0x5ff70e36, 0x6044b661, 0x604688d4, 0x604e6f4c, 0x6071fa85, 0x60c729d3, 0x60ebf61e, 0x610076d6, 0x6115ec62, 
        0x6134dc7d, 0x61895378, 0x621d08df, 0x62939b45, 0x62cd12c3, 0x62ef4882, 0x63643f49, 0x63a4612c, 0x63fbbcc0, 
        0x64406b98, 0x645bf0a5, 0x649e315a, 0x655a0c0f, 0x655ac3b3, 0x655e5c8b, 0x667c2c2c, 0x66a49116, 0x670c85ff, 
        0x6720557f, 0x6789cfcd, 0x67e0b113, 0x6801dca3, 0x68de4eed, 0x69c59d49, 0x69c884cb, 0x6a047ec0, 0x6b93ced0, 
        0x6c199e80, 0x6c4af732, 0x6c88172d, 0x6cd70d96, 0x6ce27815, 0x6d337dd5, 0x6d65fa2a, 0x6d9a328b, 0x6e05e450, 
        0x6e425edd, 0x6e4b275d, 0x6e998846, 0x6e9bbc97, 0x6f884090, 0x6fc72def, 0x7012ae43, 0x7017c7d1, 0x70665f74, 
        0x707072d3, 0x70799bef, 0x70b00c66, 0x70b4b53c, 0x70e63ec6, 0x712b0ea5, 0x7166a639, 0x7169f507, 0x7186e8b8, 
        0x71afefbb, 0x71d5d765, 0x71e86829, 0x71e8a107, 0x71f54da2, 0x721f1852, 0x72d01780, 0x731a1644, 0x7489ba85, 
        0x74d76fb9, 0x74e51faa, 0x751e528f, 0x754daf9f, 0x75910bc5, 0x75e0dfc6, 0x76caf587, 0x7733f2b8, 0x778f207d, 
        0x77efae60, 0x7815fb3a, 0x782c2165, 0x787bd471, 0x789ebea5, 0x78ca3e57, 0x78fbe96b, 0x7901258d, 0x79333e04, 
        0x794f242d, 0x79c7e150, 0x79fdfdf9, 0x7b10dfc2, 0x7b7ba39e, 0x7bb7d834, 0x7bfe2497, 0x7c0867ac, 0x7ca4ffb4, 
        0x7d12a804, 0x7d787c89, 0x7dd35902, 0x7dd43b3d, 0x7de6bf97, 0x7e4d566b, 0x7f7d12eb, 0x7f8291b4, 0x7fc87ad6, 
        0x80826056, 0x80cfe359, 0x80d58d7e, 0x80e46a95, 0x80ec4d12, 0x81f28000, 0x8292f970, 0x82ac968e, 0x82ea3f2d, 
        0x82fad086, 0x830f1ec0, 0x836fa5ed, 0x83bf0a9b, 0x83dd4e76, 0x847d126e, 0x8490d920, 0x84c082c4, 0x853ee307, 
        0x8583858c, 0x85fd0726, 0x86b9cf34, 0x86ceb585, 0x86d7be5a, 0x86e964bc, 0x86f2438b, 0x879574c2, 0x87c85b50, 
        0x881390d3, 0x8818e264, 0x881a3647, 0x883875aa, 0x88cc839d, 0x88e54d6b, 0x89ca3c5d, 0x89e19447, 0x89facd12, 
        0x8a07fb55, 0x8a1c1396, 0x8a3b5037, 0x8a4b420c, 0x8a6c5698, 0x8ac957d4, 0x8ad9e8a7, 0x8b14d443, 0x8b47a5fb, 
        0x8b8a196a, 0x8bfd9414, 0x8c119354, 0x8c2a33fa, 0x8c323e3b, 0x8c3a4e37, 0x8c5a8b69, 0x8c5bda77, 0x8c6caeff, 
        0x8c750182, 0x8cb6e831, 0x8d17595f, 0x8d908351, 0x8dec90ea, 0x8df0c4a7, 0x8df41fab, 0x8e40d3ee, 0x8e4adad4, 
        0x8e6ff49f, 0x8eb3216e, 0x8ebae5b4, 0x8ec92e81, 0x8ee513d1, 0x8ef728de, 0x8f03405e, 0x8f2a30e1, 0x8f3ab788, 
        0x8f633554, 0x8f706bf5, 0x900525b6, 0x907adc44, 0x90931b5a, 0x909ff681, 0x90aea807, 0x90da6b48, 0x911bcd90, 
        0x914e5c8b, 0x919a1346, 0x91d09be7, 0x921c662a, 0x9295df6c, 0x92ae480a, 0x92ccabab, 0x93269172, 0x938cdf69, 
        0x93dbf4f8, 0x93ea4614, 0x944bb152, 0x945bd1cd, 0x947bb87d, 0x94875ae7, 0x956be08e, 0x9596e203, 0x95cdfa70, 
        0x9615d0d6, 0x963411fc, 0x9696539d, 0x96c02c14, 0x975b52db, 0x97b2deb4, 0x97c9c11b, 0x97e79802, 0x9812135c, 
        0x98143e94, 0x985f3beb, 0x98753d6c, 0x98e17eee, 0x992cf785, 0x9966d589, 0x9969542a, 0x99736b62, 0x9988d511, 
        0x99996f7e, 0x999c8205, 0x9a2a7ab3, 0x9ad72bfb, 0x9b3310be, 0x9b5dda92, 0x9b7cd7b0, 0x9b7f8797, 0x9b88be59, 
        0x9bebaec0, 0x9c1bfb39, 0x9c75e5f8, 0x9c77f87c, 0x9db69b95, 0x9ebdaa4c, 0x9f0488fe, 0x9f5bf5e7, 0x9f8b8360, 
        0x9f8c6f32, 0x9fadacb6, 0x9fbac800, 0x9ffb6db1, 0x9ffc1594, 0xa0d80366, 0xa1300acf, 0xa169ce01, 0xa1a2edef, 
        0xa206700f, 0xa2217391, 0xa26bf7c8, 0xa2b4a213, 0xa394e375, 0xa3c26a27, 0xa3cecb89, 0xa44b516c, 0xa4e8182d, 
        0xa5235679, 0xa5b0ddd5, 0xa5f5aed7, 0xa63ff4cc, 0xa664790a, 0xa6a81087, 0xa6f93c08, 0xa79e3be3, 0xa7cbccfa, 
        0xa8810dca, 0xa89818b7, 0xa91201aa, 0xa92b45ef, 0xa956dc79, 0xa9bb8861, 0xaaf7b209, 0xab116079, 0xab4471a0, 
        0xab7ee389, 0xac952baa, 0xacfc460d, 0xad58d3ce, 0xad635dca, 0xae2177a0, 0xaeaa31fe, 0xaed4da21, 0xaf068a5a, 
        0xaf1381a7, 0xaf46339e, 0xafd6ac26, 0xb092991a, 0xb0978dc0, 0xb0a896f6, 0xb0d722c0, 0xb1ae7c07, 0xb2972d36, 
        0xb29ba230, 0xb29d5968, 0xb2c7a150, 0xb30d16ad, 0xb38f3294, 0xb3d00fa3, 0xb3fa9939, 0xb42b2abb, 0xb50397e3, 
        0xb50f57b1, 0xb52de9f9, 0xb539c88a, 0xb5f30638, 0xb6514b9c, 0xb690acc0, 0xb692e371, 0xb6a4fe6e, 0xb6f62fe4, 
        0xb77452ca, 0xb88a8351, 0xb92bcf9a, 0xb93698b0, 0xb97c0a67, 0xba2cee6a, 0xba424efe, 0xba58f3fc, 0xbaba4538, 
        0xbad8620b, 0xbb03c92f, 0xbb45ccb7, 0xbb4bfa62, 0xbbb11045, 0xbbba17c1, 0xbc7389bd, 0xbcbec70f, 0xbcf9ae6f, 
        0xbd828e2c, 0xbde42185, 0xbde4dc1c, 0xbdf2209a, 0xbe4a5e9b, 0xbe8daba7, 0xbeceb922, 0xbf572908, 0xbf74ae6d, 
        0xbfbebf6e, 0xc0514ef5, 0xc0547b5f, 0xc0851403, 0xc0c5b569, 0xc0cd8a7f, 0xc12bdd2b, 0xc1d550bc, 0xc22ceff6, 
        0xc232a5db, 0xc239ed48, 0xc2cb5826, 0xc2e1762c, 0xc30ec0c8, 0xc31f0b04, 0xc32c01ee, 0xc3ae20b1, 0xc3b32918, 
        0xc4a46604, 0xc4c62b2c, 0xc5001ffb, 0xc54c483d, 0xc55a580a, 0xc57a665c, 0xc5b90c80, 0xc5e9f609, 0xc61db84f, 
        0xc6a34951, 0xc6fe441e, 0xc74e2a27, 0xc7b919e2, 0xc826318a, 0xc8679196, 0xc88964c5, 0xc88dcc27, 0xc8ba33c8, 
        0xc919c75f, 0xc996c2e9, 0xc9ef2e6c, 0xc9f260d3, 0xc9fb4ba8, 0xca074b9f, 0xca1474b6, 0xca31bdfa, 0xca4be8f1, 
        0xca72f256, 0xcaa658ea, 0xcacc2df3, 0xcb09ff3f, 0xcb637a36, 0xcb8bdf6e, 0xcbf505e2, 0xcc29f2e1, 0xcc2f05cf, 
        0xcc35335a, 0xcc5c6d8c, 0xcd93538a, 0xce90cbd2, 0xced040d3, 0xcef4746e, 0xcf43cc73, 0xcf4a869e, 0xcf58e63d, 
        0xcf88b5d2, 0xcf8c8a6b, 0xcf9d7c89, 0xcfd54587, 0xd00a5f8c, 0xd022178b, 0xd0cd4001, 0xd0fd5dce, 0xd122eec3, 
        0xd186c389, 0xd1f96d16, 0xd24e7a25, 0xd2ac12eb, 0xd2ba8c37, 0xd2fb91a3, 0xd3d6c91c, 0xd3eb5666, 0xd4031665, 
        0xd40caa6e, 0xd5210e5e, 0xd5d14cc9, 0xd60dddfc, 0xd61e3051, 0xd62e065c, 0xd652c264, 0xd656293a, 0xd6db8c19, 
        0xd6e38e1e, 0xd71066f2, 0xd7a55949, 0xd7c86b91, 0xd8927c64, 0xd89c4741, 0xd8c72da7, 0xd910c140, 0xd93aea04, 
        0xd97128ce, 0xd9852d2a, 0xd9957080, 0xd9d7b018, 0xd9f18bf9, 0xda11e11a, 0xdad9a49f, 0xdae8ff9a, 0xdaea9644, 
        0xdb42b09c, 0xdb4d9121, 0xdc0848c2, 0xdc2dd997, 0xdcc8ba61, 0xdd4e2b38, 0xdd512e1b, 0xdd5a8ff0, 0xdd777485, 
        0xdd836be1, 0xdd8e3d43, 0xdeb178e3, 0xdec72884, 0xdf2a8fb0, 0xdf2fbf5f, 0xdf664163, 0xdfabfc2e, 0xdfbafa88, 
        0xdfbd654f, 0xdfc6edc1, 0xdfc9ba84, 0xdfda0f23, 0xe02da94d, 0xe06124cb, 0xe0ec0587, 0xe0ec0c23, 0xe1091dcc, 
        0xe11fff55, 0xe195562e, 0xe1edbaea, 0xe1f3f35a, 0xe23f09b9, 0xe27c26e0, 0xe2810b71, 0xe340e086, 0xe4dfc1c0, 
        0xe5293f22, 0xe73804b3, 0xe7538675, 0xe7bd6e0d, 0xe7d81530, 0xe80a9eda, 0xe973a2c6, 0xea312f16, 0xeac72197, 
        0xeadbf30c, 0xeafbc191, 0xeb323cb8, 0xebf2367a, 0xec46d3c7, 0xec65fd0e, 0xec69ed31, 0xec777d7c, 0xec9bb374, 
        0xece1fa6a, 0xece4af29, 0xed01da5f, 0xed7f50ce, 0xed80c7a5, 0xee425e1d, 0xee48aa58, 0xeed4a595, 0xef0a866a, 
        0xef6dfdb7, 0xef9ceab3, 0xf0274e1a, 0xf036238f, 0xf04e0c73, 0xf0988858, 0xf0b1e9b3, 0xf1888b2f, 0xf1aa8b46, 
        0xf22a43d9, 0xf26db476, 0xf29f26c9, 0xf32bd5d4, 0xf349734f, 0xf3610321, 0xf366a0bd, 0xf443fae0, 0xf450426c, 
        0xf5163503, 0xf58b5c80, 0xf5b246cc, 0xf6099a1a, 0xf6264d79, 0xf634a5b7, 0xf6853f20, 0xf691cf9e, 0xf7812399, 
        0xf7bfdb93, 0xf7fb7294, 0xf80d5e7e, 0xf8497c57, 0xf8d0c224, 0xf8d0d057, 0xf90a90fd, 0xf9342a29, 0xf93afc9a, 
        0xf9531c7b, 0xf99b49af, 0xf9d1d011, 0xf9e10545, 0xf9e81bfa, 0xf9eb79ab, 0xfa2ecee2, 0xfa2f3eec, 0xfa3e6133, 
        0xfa5c61d9, 0xfa7b263f, 0xfb1f386a, 0xfb765fbc, 0xfbee67d4, 0xfc5b8f9f, 0xfca2f664, 0xfd72c546, 0xfd840f72, 
        0xfdd548dc, 0xfe3efb1d, 0xfe508967, 0xfe750c11, 0xfea08520, 0xff6a74af, 0xff7758a0, 0xffa754fa, 0xfffbdf04
    ],

    //
    //  Similar to how the game tracks Korok puzzle completion, each Hinox has its own
    //  Address offset that stores either 0x00 or 0x01. The other two, remaining overworld
    //  Bosses are treated in the same manner.
    //
    DEFEATED_HINOX: [
        0x3aefa053, 0x805cf1f2, 0xd815d3e0, 0x1fb33ad5, 0x04a74790, 0xee812327, 0x03415ecc, 0xb2d689b6, 0x7259e3c5,
        0x051ed62c, 0xd7223944, 0x8d865b78, 0xa4589fc1, 0x2524aa37, 0x3e847dde, 0x67d1ae47, 0x97ceb661, 0x59dd8037,
        0x43756237, 0xcde51b3f, 0x382acf32, 0x48e5f7a0, 0x4f42ed0c, 0xbbb6a93d, 0x036d6e47, 0xef37a9be, 0xacd67339,
        0xa27c9e39, 0x43b9424b, 0x2880a2b8, 0xb9f89458, 0x0862ac9c, 0x4b9dc25a, 0xe8d22126, 0x7096ce54, 0x1d753114,
        0x6c0b0cd8, 0xe9600685, 0xd31c00e1, 0x3e012222
    ],

    DEFEATED_TALUS: [
        0x740a06af, 0xe7898ded, 0xce9d58d6, 0xce449f1c, 0x2ac739b3, 0x4fe566ae, 0x1eff6ae3, 0x2bda4f24, 0x827917a9,
        0xd4144bdf, 0x0e72d42d, 0x977c89d8, 0x47633bd7, 0x7e7cba50, 0xf9921240, 0x0d0ba40c, 0xa35cfe58, 0x45920271,
        0x602fdbce, 0xc785de56, 0x593975d6, 0x8c05c385, 0x18fa31b0, 0xc2e87e02, 0x0164fe15, 0x9efc3339, 0x162d11f4,
        0xec80ecfa, 0xa4ae04d3, 0xf897773d, 0xe3677e8a, 0xe43a5cec, 0xccc79db5, 0x5c4ff2a8, 0x187ccce5, 0x5d6ad526,
        0xf05443e4, 0xcc9ba064, 0xfa12fcda, 0x0b7267c0
    ],

    //
    //  It's obvious here that there are far less Molduga encounters than Hinox or Stone Talus
    //  Encounters. It's not hard to see that here.
    //
    DEFEATED_MOLDUGA: [0x878420a2, 0xb5c0ad83, 0x6070b591, 0xec88c5a2],

    //
    //  Similar to how the game tracks Korok puzzle completion and overworld boss defeats,
    //  The game also tracks the places you have visited. This is what causes shrines to initially
    //  Appear on the map.
    //
    LOCATIONS: [
        0xbd432e2b, 0x4c2a4c64, 0xc982b698, 0xceec3555, 0x5ccee1d1, 0xe03f8aa7, 0xba8fa3ec, 0xab69ff8d, 0x852308c6,
        0x1855d45c, 0x7b7427f3, 0x73fcf871, 0xf4b71776, 0xd9393ccd, 0x95db306c, 0x629dcd44, 0xf70a4075, 0x237a4d8a,
        0xba52d9e9, 0x2a87cd61, 0x1e4224f7, 0xd3d4fe4d, 0x4edc4932, 0x90efa510, 0x93c23bdf, 0x3dee43cc, 0xda0163d5,
        0xad065343, 0x340f02f9, 0x382af36e, 0x8d8982b9, 0xdbe04653, 0x5b3d301c, 0x42d8f1bb, 0x3046920f, 0xc17f8588,
        0xdcbf49ee, 0x37d054d1, 0xede11b4b, 0x13df032f, 0xb444af7f, 0xb07ff371, 0x86377b7e, 0xc7d9e847, 0x7e6ac510,
        0x11ca12b8, 0x3cb06c8d, 0x8470bba5, 0x84b55727, 0xeb962ee5, 0x6b3090c4, 0xf105fc93, 0x61ecf5d8, 0xb91ec523,
        0x5b065726, 0x704a8cee, 0x3ba1e6cd, 0xb46d4340, 0xa4e25e17, 0x506d96b6, 0xcb844395, 0x47cf0ce2, 0xf579c518,
        0x827ef58e, 0x1b77a434, 0xfb739f5d, 0x8c74afcb, 0xf8e1b0b6, 0x8fe68020, 0x157dfe71, 0x627acee7, 0x8b196bd2,
        0x12103a68, 0x65170afe, 0xf5a8176f, 0x82af27f9, 0xefc46622, 0x30dce738, 0x05768b36, 0x29693cd5, 0xc19b4064,
        0x96fb7e0b, 0x5c4d1750, 0x97185f06, 0x765ae3fd, 0xd3635047, 0xcab23d6f, 0x2e573fa2, 0x0ea2f805, 0x9aa32eca,
        0xd8b7a1e2, 0x384fc3a6, 0x1e278d65, 0xc1d8c92c, 0xb58d951c, 0x94e41520, 0xcb7f8efb, 0x64556cdf, 0x34af6c3e,
        0xd3acb37d, 0x658ed94c, 0x791c7d90, 0x9f1ff60d, 0x5fb1238c, 0x40f556e8, 0xd9fc0752, 0xaefb37c4, 0x309fa267,
        0x479892f1, 0xde91c34b, 0xa996f3dd, 0x3929ee4c, 0x4e2ededa, 0x2ee9573f, 0x59ee67a9, 0xc0e73613, 0xb7e00685,
        0x29849326, 0x5e83a3b0, 0x9510e305, 0x7cf7d4ad, 0xa89c3e9d, 0x33dedaf1, 0x894e01b7, 0x7457367f, 0xfae08218,
        0x8367f7f5, 0x7939d480, 0x5c907154, 0x0fa7b37f, 0x1a1649a5, 0xd865cfa4, 0xf1cab1a7, 0x6360e32f, 0x1cc23004,
        0x18f92f82, 0x8ad5ef4a, 0x66336893, 0xf300b27b, 0xd451777c, 0xa262d614, 0x79431cd8, 0xa313005e, 0x8f067283,
        0x80f9fd06, 0x71a002e7, 0xe12f0afe, 0x4e798832, 0x57c1e588, 0x40060961, 0xa31a50aa, 0x8ae6edd7, 0x46f6e384,
        0xd8e21026, 0xd8f19a2a, 0xc409b5e2, 0x0fe7e6ab, 0x94ddf95c, 0x2fa52b7e, 0x62fffa64, 0x8c8e9401, 0xed1341fd,
        0x99277060, 0x16b9c598, 0xe4171cbe, 0x1a2cadf2, 0x4695d38c, 0x095288b6, 0x6c034b60, 0x8b62694a, 0xd78f2eac,
        0x26daeef2, 0x3187bba5, 0x3b930e2c, 0xd2180ce8, 0x29ad3d74, 0x1f4bc09c, 0xbfdd2802, 0x298b03fe, 0x5e8c3368,
        0xc0e8a6cb, 0x3f3d559e, 0xff6f7ae4, 0xea6e852b, 0x2cd6f581, 0x5c7246c7, 0x4a46741a
    ],

    PICTURE_BOOK_SIZE: [
        0x5c7400bc, 0x773e8901, 0xee37d8bb, 0x3d8e91a0, 0xa487c01a, 0xf30c4824, 0xdb9d012e, 0xa68096fc, 0x88b6a4ee,
        0x2e05fd4b, 0x0b023df2, 0x0886e99c, 0x2e4996a6, 0x653c5eb1, 0xfc350f0b, 0x69ce7ca1, 0xa3c1d997, 0x45a09c1b,
        0x74021db2, 0xed0b4c08, 0xabb09f55, 0xc8738b6f, 0x517adad5, 0x32b9ceef, 0x45befe79, 0xacdd5b4c, 0x35d40af6,
        0x42d33a60, 0xd26c27f1, 0xa56b1767, 0xa206d37e, 0x3b0f82c4, 0xc100bfa7, 0xb6078f31, 0x2f0ede8b, 0x5809ee1d,
        0xc66d7bbe, 0xcfdb3795, 0x07212cda, 0x8286ef61, 0x1b8fbedb, 0x6c888e4d, 0xf2ec1bee, 0x85eb2b78, 0x1ce27ac2,
        0xcec35248, 0x57ca03f2, 0x195449c7, 0x805d187d, 0xa57c662d, 0x13423c95, 0x0680e3d4, 0x70aeb88c, 0x24d5095b,
        0x62e46e10, 0x2c59c2a6, 0x3dee13ed, 0x87d0d1f9, 0x1ed98043, 0x69deb0d5, 0xb3281fb0, 0x51f46518, 0xa15b6f7f,
        0x735524a5, 0x04dbcbad, 0x376ce074, 0x2f883be5, 0xd7639b4c, 0x9087845a, 0xe7096b52, 0xd4be408b, 0xacf11d4a,
        0xf04391bf, 0x9a4129c2, 0xe86f3e48, 0xfadc4035, 0xf20698c8, 0x1992dc60, 0x3b35855c, 0xcbf06982, 0xc95786b1,
        0x4a73e922, 0xd37ab898, 0x97e5562f, 0x42badae4, 0x353435ec, 0x06831e35, 0x34bc8b65, 0xaf58c35a, 0xbe502fca,
        0x4ebde788, 0xcc8b5bf0, 0xfa263f87, 0xc9dec0c2, 0xfa69eb1b, 0x19c3d7c9, 0x0ec4b121, 0x80ca8673, 0xf7cdb6e5,
        0xf598afff, 0xe7396cf3, 0x90b783fb, 0xa300a822, 0x0c57943e, 0xef073e95, 0x4cbcd1c7, 0xa8cbc312, 0x671d6f51,
        0x3693fa81, 0x0956c741, 0x75314eb5, 0x26e773f1, 0xd4669d67, 0xa3e8726f, 0x905f59b6, 0xd95d2b85, 0x41de55ef,
        0x3650bae7, 0x05e7913e, 0x2283b839, 0x28b6c470, 0x18a04e15, 0x6f2ea11d, 0x5c998ac4, 0x1e53d75e, 0x43b97545,
        0xe5669acb, 0x4d8f252a, 0x9088224a, 0x45113a89, 0x45674631, 0x245a6353, 0x908e709c, 0x95f53930, 0xb06b61f4,
        0xf3a11950, 0x36a42f5d, 0xb7b7721c, 0xda6ff199, 0xa5bd9391, 0x78fa02df, 0x6f475198, 0xc31e56cb, 0x4e165b3e,
        0xe2cb388e, 0xb78a47fa, 0xc7e70254, 0xabfd5819, 0xef797df7, 0x76702c4d, 0x01771cdb, 0x9f138978, 0xe814b9ee,
        0x711de854, 0x061ad8c2, 0x96a5c553, 0xe1a2f5c5, 0x78aba47f, 0x0fac94e9, 0x91c8014a, 0xe6cf31dc, 0x8b12d537,
        0x651cb41b, 0xbf1d0115, 0x261450af, 0x51136039, 0xcf77f59a, 0xb870c50c, 0x217994b6, 0x567ea420, 0xc6c1b9b1,
        0xb1c68927, 0x28cfd89d, 0xaa5395c9, 0xad3e51d0, 0xc0e3b53b, 0x03902941, 0x284a9adb, 0xb143cb61, 0xc644fbf7,
        0x2f275ec2, 0xb62e0f78, 0x5196227f, 0xbf984353, 0x56fbe666, 0x21fcd6f0, 0xb8f5874a, 0xcff2b7dc, 0xfc959886,
        0x659cc93c, 0x129bf9aa, 0xfbf85c9f, 0x62f10d25, 0x15f63db3, 0x85492022, 0xf24e10b4, 0x6b47410e, 0x8224e43b,
        0xf523d4ad, 0x1b2db581, 0xe12288e2, 0x55131e31, 0x008797c1, 0x1232382f, 0xaa8e5f4a, 0x531a45c0, 0x03439478,
        0xb7883cdb, 0x2e816d61, 0x59865df7, 0xc7e2c854, 0x29eca978, 0xb953b4e9, 0xae930d9a, 0x409d6cb6, 0xdef9f915,
        0xa9fec983, 0x30f79839, 0x47f0a8af, 0x6bb03f75, 0x1bdacbfa, 0x6cddfb6c, 0xfc62e6fd, 0x8b65d66b, 0xeba25f8e,
        0x05ac3ea2, 0x72ab0e34, 0x9bc8ab01, 0x02c1fabb, 0xe579d7bc, 0xa4e3c949, 0xf8c9aa1c, 0xec5ac418, 0x755395a2,
        0x0254a534, 0x9c303097, 0xeb370001, 0x723e51bb, 0x8246c5cf, 0xf541f559, 0x6c48a4e3, 0x1b4f9475, 0x852b01d6,
        0xf22c3140, 0x6b2560fa, 0x1c22506c, 0x8c9d4dfd, 0xfb9a7d6b, 0xa96b960c, 0x3062c7b6, 0xae065215, 0x370f03af,
        0xd0b72ea8, 0xb070a74d, 0xc77797db, 0x5e7ec661, 0x2979f6f7, 0xb71d6354, 0xc01a53c2, 0x59130278, 0x2e1432ee,
        0xbeab2f7f, 0x8836011c, 0x8f5bc505, 0x6155a429, 0x912d305d, 0xe147c4d2, 0x9640f444, 0x0f49a5fe, 0xd371a650,
        0xe0f7dd6d, 0x79fe8cd7, 0x0ef9bc41, 0x909d29e2, 0xe79a1974, 0x7e9348ce, 0x09947858, 0x992b65c9, 0xee2c555f,
        0x17e28d00, 0x898618a3, 0xfe812835, 0x6788798f, 0x108f4919, 0x80305488, 0xd2c1bfef, 0x4bc8ee55, 0x3ccfdec3,
        0xd5ac7bf6, 0x4ca52a4c, 0xbcddbe38, 0xcbda8eae, 0x52d3df14, 0x25d4ef82, 0xbbb07a21, 0xccb74ab7, 0x55be1b0d,
        0x22b92b9b, 0xb206360a, 0xf39c28ff, 0x849b1869, 0x1d9249d3, 0x1247eb29, 0x8b4eba93, 0xfc498a05, 0x622d1fa6,
        0x152a2f30, 0x8c237e8a, 0xfb244e1c, 0x6b9b538d, 0x1c9c631b, 0x7c5beafe, 0x0b5cda68, 0x92558bd2, 0xe552bb44,
        0x7b362ee7, 0x0c311e71, 0x95384fcb, 0xe23f7f5d, 0x728062cc, 0x207189ab, 0xb978d811, 0xce7fe887, 0x501b7d24,
        0x271c4db2, 0xc9122c9e, 0x59ad310f, 0x2eaa0199, 0x4e6d887c, 0x396ab8ea, 0xa063e950, 0xd764d9c6, 0x49004c65,
        0x3e077cf3, 0xa70e2d49, 0xd0091ddf, 0x40b6004e, 0x9f488b18, 0x78f0a61f, 0x18372ffa, 0xd610af69, 0x4f19fed3,
        0x381ece45, 0xa67a5be6, 0xd17d6b70, 0x48743aca, 0x3f730a5c, 0xafcc17cd, 0xd8cb275b, 0x2105ff04, 0xbf616aa7,
        0xc8665a31, 0x516f0b8b, 0x26683b1d, 0xb6d7268c, 0xc1d0161a, 0x9321fd7d, 0xe426cdeb, 0x7d2f9c51, 0x0a28acc7,
        0x944c3964, 0xe34b09f2, 0x0d4568de, 0xeafd45d9, 0x8a3acc3c, 0xfd3dfcaa, 0x13339d86, 0x8d570825, 0xfa5038b3,
        0xc57b5afb, 0xb27c6a6d, 0x5c720b41, 0xc2169ee2, 0x5b1fcf58, 0xcba0d2c9, 0xbca7e25f, 0xdc606bba, 0xab675b2c,
        0x326e0a96, 0x45693a00, 0xf74d3879, 0x804a08ef, 0x19435955, 0xee560938, 0x775f5882, 0x579819ff, 0x8bb63be6,
        0x6a465a2b, 0x85888b2f, 0x746364da, 0x9b7f924a, 0xc346f5eb, 0xca20b58b, 0x49d23c38
    ],

    DYE_COLORS: [
        "-default-",
        "Blue",
        "Red",
        "Yellow",
        "White",
        "Black",
        "Purple",
        "Green",
        "Light Blue",
        "Navy",
        "Orange",
        "Peach",
        "Crimson",
        "Light Yellow",
        "Brown",
        "Gray",
        {value: 0xffffffff, name: "locked color"}
    ],

    MODIFIERS: [
        {value: 0x00000000, name: "(none)"},
        {value: 0x00000001, name: "Attack up"},
        {value: 0x80000001, name: "Attack up ★"},
        {value: 0x00000002, name: "Durability up"},
        {value: 0x80000002, name: "Durability up ★"},
        {value: 0x00000004, name: "Critical hit up"},
        {value: 0x80000004, name: "Critical hit up ★"},
        {value: 0x00000008, name: "(Weapon only) Long throw"},
        {value: 0x80000008, name: "(Weapon only) Long throw ★"},
        {value: 0x00000010, name: "(Bow only) Five-Shot Burst"},
        {value: 0x80000010, name: "(Bow only) Five-Shot Burst ★"},
        {value: 0x00000040, name: "(Bow only) Quick shot"},
        {value: 0x80000040, name: "(Bow only) Quick shot ★"},
        {value: 0x00000080, name: "(Shield only) Shield surf up"},
        {value: 0x80000080, name: "(Shield only) Shield surf up ★"},
        {value: 0x00000100, name: "(Shield only) Shield guard up"},
        {value: 0x80000100, name: "(Shield only) Shield guard up ★"}
    ],

    HORSE_REINS: [
        "GameRomHorseReins_00",
        "GameRomHorseReins_01",
        "GameRomHorseReins_02",
        "GameRomHorseReins_03",
        "GameRomHorseReins_04",
        "GameRomHorseReins_05",
        "GameRomHorseReins_06",
        "GameRomHorseReins_00L",
        "GameRomHorseReins_10"
    ],

    HORSE_SADDLES: [
        "GameRomHorseSaddle_00",
        "GameRomHorseSaddle_01",
        "GameRomHorseSaddle_02",
        "GameRomHorseSaddle_03",
        "GameRomHorseSaddle_04",
        "GameRomHorseSaddle_05",
        "GameRomHorseSaddle_06",
        "GameRomHorseSaddle_00L",
        "GameRomHorseSaddle_00S",
        "GameRomHorseSaddle_10"
    ],

    HORSE_TYPES: [
        "GameRomHorse00", "GameRomHorse01", "GameRomHorse02", "GameRomHorse03",
        "GameRomHorse04", "GameRomHorse05", "GameRomHorse06", "GameRomHorse07",
        "GameRomHorse08", "GameRomHorse09", "GameRomHorse10", "GameRomHorse11",
        "GameRomHorse12", "GameRomHorse13", "GameRomHorse14", "GameRomHorse15",
        "GameRomHorse16", "GameRomHorse17", "GameRomHorse18", "GameRomHorse19",
        "GameRomHorse20", "GameRomHorse21", "GameRomHorse22", "GameRomHorse23",
        "GameRomHorseEpona",
        "GameRomHorseZelda",
        "GameRomHorse00L",
        "GameRomHorseNushi",
        "GameRomHorseBone"
    ],

    //
    //  All the magic happens here. This is essentially a dictionary that helps us understand
    //  Exactly what items are in our inventory. It is crucial that you do not modify identifiers
    //  Like Weapon_Sword_001 as the game uses this internal identifier to refer to what
    //  We know as the Traveler's Sword.
    //
    Translations: [
        {
            id: "weapons",
            items: {
                Weapon_Sword_001: "Traveler's Sword",
                Weapon_Sword_002: "Soldier's Broadsword",
                Weapon_Sword_003: "Knight's Broadsword",
                Weapon_Sword_004: "Boko Club",
                Weapon_Sword_005: "Spiked Boko Club",
                Weapon_Sword_006: "Dragonbone Boko Club",
                Weapon_Sword_007: "Lizal Boomerang",
                Weapon_Sword_008: "Lizal Forked Boomerang",
                Weapon_Sword_009: "Lizal Tri-Boomerang",
                Weapon_Sword_013: "Guardian Sword",
                Weapon_Sword_014: "Guardian Sword+",
                Weapon_Sword_015: "Guardian Sword++",
                Weapon_Sword_016: "Lynel Sword",
                Weapon_Sword_017: "Mighty Lynel Sword",
                Weapon_Sword_018: "Savage Lynel Sword",
                Weapon_Sword_019: "Bokoblin Arm",
                Weapon_Sword_020: "Lizalfos Arm",
                Weapon_Sword_021: "Rusty Broadsword",
                Weapon_Sword_022: "Soup ladle",
                Weapon_Sword_023: "Ancient Short Sword",
                Weapon_Sword_024: "Royal Broadsword",
                Weapon_Sword_025: "Forest Dweller's Sword",
                Weapon_Sword_027: "Zora Sword",
                Weapon_Sword_029: "Gerudo Scimitar",
                Weapon_Sword_030: "Moonlight Scimitar",
                Weapon_Sword_031: "Feathered Edge",
                Weapon_Sword_033: "Flameblade",
                Weapon_Sword_034: "Frostblade",
                Weapon_Sword_035: "Thunderblade",
                Weapon_Sword_040: "Spring-Loaded Hammer",
                Weapon_Sword_041: "Eightfold Blade",
                Weapon_Sword_043: "Torch",
                Weapon_Sword_044: "Tree Branch",
                Weapon_Sword_047: "Royal Guard's Sword",
                Weapon_Sword_048: "Meteor Rod",
                Weapon_Sword_049: "Blizzard Rod",
                Weapon_Sword_050: "Thunderstorm Rod",
                Weapon_Sword_051: "Boomerang",
                Weapon_Sword_052: "Scimitar of the Seven",
                Weapon_Sword_053: "Vicious Sickle",
                Weapon_Sword_056: "Master Sword (Broken/Unequippable)",
                Weapon_Sword_057: "Goddess Sword",
                Weapon_Sword_058: "Hero's Sword (amiibo 8-bit)",
                Weapon_Sword_059: "Sea-Breeze Boomerang (amiibo WW)",
                Weapon_Sword_060: "Fire Rod",
                Weapon_Sword_061: "Ice Rod",
                Weapon_Sword_062: "Lightning Rod",
                Weapon_Sword_070: "Master Sword",
                Weapon_Sword_071: "Master Sword (no near malice, no charge)",
                Weapon_Sword_072: "Master Sword (near malice, no charge)",
                Weapon_Sword_073: "Demon Carver",
                Weapon_Sword_500: "Lantern",
                Weapon_Lsword_001: "Traveler's Claymore",
                Weapon_Lsword_002: "Soldier's Claymore",
                Weapon_Lsword_003: "Knight's Claymore",
                Weapon_Lsword_004: "Boko Bat",
                Weapon_Lsword_005: "Spiked Boko Bat",
                Weapon_Lsword_006: "Dragonbone Boko Bat",
                Weapon_Lsword_010: "Moblin Club",
                Weapon_Lsword_011: "Spiked Moblin Club",
                Weapon_Lsword_012: "Dragonbone Moblin Club",
                Weapon_Lsword_013: "Ancient Battle Axe",
                Weapon_Lsword_014: "Ancient Battle Axe+",
                Weapon_Lsword_015: "Ancient Battle Axe++",
                Weapon_Lsword_016: "Lynel Crusher",
                Weapon_Lsword_017: "Mighty Lynel Crusher",
                Weapon_Lsword_018: "Savage Lynel Crusher",
                Weapon_Lsword_019: "Moblin Arm",
                Weapon_Lsword_020: "Rusty Claymore",
                Weapon_Lsword_023: "Ancient Bladesaw",
                Weapon_Lsword_024: "Royal Claymore",
                Weapon_Lsword_027: "Silver Longsword",
                Weapon_Lsword_029: "Golden Claymore",
                Weapon_Lsword_030: "Double Axe",
                Weapon_Lsword_031: "Iron Sledgehammer",
                Weapon_Lsword_032: "Woodcutter's Axe",
                Weapon_Lsword_033: "Great Flameblade",
                Weapon_Lsword_034: "Great Frostblade",
                Weapon_Lsword_035: "Great Thunderblade",
                Weapon_Lsword_036: "Cobble Crusher",
                Weapon_Lsword_037: "Stone Smasher",
                Weapon_Lsword_038: "Boat Oar",
                Weapon_Lsword_041: "Eightfold Longblade",
                Weapon_Lsword_045: "Farming Hoe",
                Weapon_Lsword_047: "Royal Guard's Claymore",
                Weapon_Lsword_051: "Giant Boomerang",
                Weapon_Lsword_054: "Boulder Breaker",
                Weapon_Lsword_055: "Edge of Duality",
                Weapon_Lsword_056: "Korok Leaf",
                Weapon_Lsword_057: "Sword of the Six Sages (amiibo TP)",
                Weapon_Lsword_059: "Biggoron's Sword (amiibo OoT)",
                Weapon_Lsword_060: "Fierce Deity Sword (amiibo MM)",
                Weapon_Lsword_074: "Windcleaver",
                Weapon_Spear_001: "Traveler's Spear",
                Weapon_Spear_002: "Soldier's Spear",
                Weapon_Spear_003: "Knight's Halberd",
                Weapon_Spear_004: "Boko Spear",
                Weapon_Spear_005: "Spiked Boko Spear",
                Weapon_Spear_006: "Dragonbone Boko Spear",
                Weapon_Spear_007: "Lizal Spear",
                Weapon_Spear_008: "Enhanced Lizal Spear",
                Weapon_Spear_009: "Forked Lizal Spear",
                Weapon_Spear_010: "Moblin Spear",
                Weapon_Spear_011: "Spiked Moblin Spear",
                Weapon_Spear_012: "Dragonbone Moblin Spear",
                Weapon_Spear_013: "Guardian Spear",
                Weapon_Spear_014: "Guardian Spear+",
                Weapon_Spear_015: "Guardian Spear++",
                Weapon_Spear_016: "Lynel Spear",
                Weapon_Spear_017: "Mighty Lynel Spear",
                Weapon_Spear_018: "Savage Lynel Spear",
                Weapon_Spear_021: "Rusty Halberd",
                Weapon_Spear_022: "Farmer's Pichfork",
                Weapon_Spear_023: "Ancient Spear",
                Weapon_Spear_024: "Royal Halberd",
                Weapon_Spear_025: "Forest Dweller's Spear",
                Weapon_Spear_027: "Zora Spear",
                Weapon_Spear_028: "Silverscale Spear",
                Weapon_Spear_029: "Gerudo Spear",
                Weapon_Spear_030: "Throwing Spear",
                Weapon_Spear_031: "Drillshaft",
                Weapon_Spear_032: "Feathered Spear",
                Weapon_Spear_033: "Flamespear",
                Weapon_Spear_034: "Frostspear",
                Weapon_Spear_035: "Thunderspear",
                Weapon_Spear_036: "Wooden Mop",
                Weapon_Spear_037: "Serpentine Spear",
                Weapon_Spear_038: "Fishing Harpoon",
                Weapon_Spear_047: "Royal Guard's Spear",
                Weapon_Spear_049: "Ceremonial Trident",
                Weapon_Spear_050: "Lightscale Trident",
                Weapon_Sword_502: "One-Hit Obliterator (v1.4)"
            }
        },

        {
            id: "bows",
            items: {
                Weapon_Bow_001: "Traveler's Bow",
                Weapon_Bow_002: "Soldier's Bow",
                Weapon_Bow_003: "Spiked Boko Bow",
                Weapon_Bow_004: "Boko Bow",
                Weapon_Bow_006: "Lizal Bow",
                Weapon_Bow_009: "Lynel Bow",
                Weapon_Bow_011: "Strengthened Lizal Bow",
                Weapon_Bow_013: "Forest Dweller's Bow",
                Weapon_Bow_014: "Silver Bow",
                Weapon_Bow_015: "Golden Bow",
                Weapon_Bow_016: "Swallow Bow",
                Weapon_Bow_017: "Falcon Bow",
                Weapon_Bow_023: "Ancient Bow",
                Weapon_Bow_026: "Mighty Lynel Bow",
                Weapon_Bow_027: "Dragon Bone Boko Bow",
                Weapon_Bow_028: "Great Eagle Bow",
                Weapon_Bow_029: "Phrenic Bow",
                Weapon_Bow_030: "Steel Lizal Bow",
                Weapon_Bow_032: "Savage Lynel Bow",
                Weapon_Bow_033: "Royal Guard's Bow",
                Weapon_Bow_035: "Knight's Bow",
                Weapon_Bow_036: "Royal Bow",
                Weapon_Bow_038: "Wooden Bow",
                Weapon_Bow_040: "Duplex Bow",
                Weapon_Bow_071: "Bow of Light",
                Weapon_Bow_072: "Twilight Bow (amiibo TP)",
                NormalArrow: "Arrow",
                FireArrow: "Fire Arrow",
                IceArrow: "Ice Arrow",
                ElectricArrow: "Shock Arrow",
                BombArrow_A: "Bomb Arrow",
                AncientArrow: "Ancient Arrow"
            }
        },

        {
            id: "shields",
            items: {
                Weapon_Shield_001: "Wooden Shield",
                Weapon_Shield_002: "Soldier's Shield",
                Weapon_Shield_003: "Knight's Shield",
                Weapon_Shield_004: "Boko Shield",
                Weapon_Shield_005: "Spiked Boko Shield",
                Weapon_Shield_006: "Dragonbone Boko Shield",
                Weapon_Shield_007: "Lizal Shield",
                Weapon_Shield_008: "Reinforced Lizal Shield",
                Weapon_Shield_009: "Steel Lizal Shield",
                Weapon_Shield_013: "Guardian Shield",
                Weapon_Shield_014: "Guardian Shield+",
                Weapon_Shield_015: "Guardian Shield++",
                Weapon_Shield_016: "Lynel Shield",
                Weapon_Shield_017: "Mighty Lynel Shield",
                Weapon_Shield_018: "Savage Lynel Shield",
                Weapon_Shield_021: "Rusty Shield",
                Weapon_Shield_022: "Royal Shield",
                Weapon_Shield_023: "Forest Dweller's Shield",
                Weapon_Shield_025: "Silver Shield",
                Weapon_Shield_026: "Gerudo Shield",
                Weapon_Shield_030: "Hylian Shield",
                Weapon_Shield_031: "Hunter's Shield",
                Weapon_Shield_032: "Fisherman's Shield",
                Weapon_Shield_033: "Royal Guard's Shield",
                Weapon_Shield_034: "Emblazoned Shield",
                Weapon_Shield_035: "Traveler's Shield",
                Weapon_Shield_036: "Radiant Shield",
                Weapon_Shield_037: "Daybreaker",
                Weapon_Shield_038: "Ancient Shield",
                Weapon_Shield_040: "Pot Lid",
                Weapon_Shield_041: "Shield of the Mind's Eye",
                Weapon_Shield_042: "Kite Shield",
                Weapon_Shield_057: "Hero's Shield (Wind Waker)"
            }
        },

        {
            id: "clothes",
            items: {
                Armor_001_Head: "Hylian Hood",
                Armor_002_Head: "Hylian Hood ★",
                Armor_003_Head: "Hylian Hood ★★",
                Armor_004_Head: "Hylian Hood ★★★",
                Armor_015_Head: "Hylian Hood ★★★★",
                Armor_001_Upper: "Hylian Tunic",
                Armor_002_Upper: "Hylian Tunic ★",
                Armor_003_Upper: "Hylian Tunic ★★",
                Armor_004_Upper: "Hylian Tunic ★★★",
                Armor_015_Upper: "Hylian Tunic ★★★★",
                Armor_001_Lower: "Hylian Trousers",
                Armor_002_Lower: "Hylian Trousers ★",
                Armor_003_Lower: "Hylian Trousers ★★",
                Armor_004_Lower: "Hylian Trousers ★★★",
                Armor_015_Lower: "Hylian Trousers ★★★★",
                Armor_005_Head: "Cap of the Wild",
                Armor_035_Head: "Cap of the Wild ★",
                Armor_039_Head: "Cap of the Wild ★★",
                Armor_060_Head: "Cap of the Wild ★★★",
                Armor_061_Head: "Cap of the Wild ★★★★",
                Armor_005_Upper: "Tunic of the Wild",
                Armor_035_Upper: "Tunic of the Wild ★",
                Armor_039_Upper: "Tunic of the Wild ★★",
                Armor_060_Upper: "Tunic of the Wild ★★★",
                Armor_061_Upper: "Tunic of the Wild ★★★★",
                Armor_005_Lower: "Trousers of the Wild",
                Armor_035_Lower: "Trousers of the Wild ★",
                Armor_039_Lower: "Trousers of the Wild ★★",
                Armor_060_Lower: "Trousers of the Wild ★★★",
                Armor_061_Lower: "Trousers of the Wild ★★★★",
                Armor_006_Head: "Zora Helm",
                Armor_007_Head: "Zora Helm ★",
                Armor_062_Head: "Zora Helm ★★",
                Armor_063_Head: "Zora Helm ★★★",
                Armor_064_Head: "Zora Helm ★★★★",
                Armor_006_Upper: "Zora Armor",
                Armor_007_Upper: "Zora Armor ★",
                Armor_062_Upper: "Zora Armor ★★",
                Armor_063_Upper: "Zora Armor ★★★",
                Armor_064_Upper: "Zora Armor ★★★★",
                Armor_006_Lower: "Zora Greaves",
                Armor_007_Lower: "Zora Greaves ★",
                Armor_062_Lower: "Zora Greaves ★★",
                Armor_063_Lower: "Zora Greaves ★★★",
                Armor_064_Lower: "Zora Greaves ★★★★",
                Armor_008_Head: "Desert Voe Headband",
                Armor_040_Head: "Desert Voe Headband ★",
                Armor_065_Head: "Desert Voe Headband ★★",
                Armor_066_Head: "Desert Voe Headband ★★★",
                Armor_067_Head: "Desert Voe Headband ★★★★",
                Armor_008_Upper: "Desert Voe Spaulder",
                Armor_040_Upper: "Desert Voe Spaulder ★",
                Armor_065_Upper: "Desert Voe Spaulder ★★",
                Armor_066_Upper: "Desert Voe Spaulder ★★★",
                Armor_067_Upper: "Desert Voe Spaulder ★★★★",
                Armor_008_Lower: "Desert Voe Trousers",
                Armor_040_Lower: "Desert Voe Trousers ★",
                Armor_065_Lower: "Desert Voe Trousers ★★",
                Armor_066_Lower: "Desert Voe Trousers ★★★",
                Armor_067_Lower: "Desert Voe Trousers ★★★★",
                Armor_009_Head: "Snowquill Headdress",
                Armor_036_Head: "Snowquill Headdress ★",
                Armor_071_Head: "Snowquill Headdress ★★",
                Armor_072_Head: "Snowquill Headdress ★★★",
                Armor_073_Head: "Snowquill Headdress ★★★★",
                Armor_009_Upper: "Snowquill Tunic",
                Armor_036_Upper: "Snowquill Tunic ★",
                Armor_071_Upper: "Snowquill Tunic ★★",
                Armor_072_Upper: "Snowquill Tunic ★★★",
                Armor_073_Upper: "Snowquill Tunic ★★★★",
                Armor_009_Lower: "Snowquill Trousers",
                Armor_036_Lower: "Snowquill Trousers ★",
                Armor_071_Lower: "Snowquill Trousers ★★",
                Armor_072_Lower: "Snowquill Trousers ★★★",
                Armor_073_Lower: "Snowquill Trousers ★★★★",
                Armor_011_Head: "Flamebreaker Helm",
                Armor_037_Head: "Flamebreaker Helm ★",
                Armor_074_Head: "Flamebreaker Helm ★★",
                Armor_075_Head: "Flamebreaker Helm ★★★",
                Armor_076_Head: "Flamebreaker Helm ★★★★",
                Armor_011_Upper: "Flamebreaker Armor",
                Armor_037_Upper: "Flamebreaker Armor ★",
                Armor_074_Upper: "Flamebreaker Armor ★★",
                Armor_075_Upper: "Flamebreaker Armor ★★★",
                Armor_076_Upper: "Flamebreaker Armor ★★★★",
                Armor_011_Lower: "Flamebreaker Boots",
                Armor_037_Lower: "Flamebreaker Boots ★",
                Armor_074_Lower: "Flamebreaker Boots ★★",
                Armor_075_Lower: "Flamebreaker Boots ★★★",
                Armor_076_Lower: "Flamebreaker Boots ★★★★",
                Armor_012_Head: "Stealth Mask",
                Armor_042_Head: "Stealth Mask ★",
                Armor_077_Head: "Stealth Mask ★★",
                Armor_078_Head: "Stealth Mask ★★★",
                Armor_079_Head: "Stealth Mask ★★★★",
                Armor_012_Upper: "Stealth Chest Guard",
                Armor_042_Upper: "Stealth Chest Guard ★",
                Armor_077_Upper: "Stealth Chest Guard ★★",
                Armor_078_Upper: "Stealth Chest Guard ★★★",
                Armor_079_Upper: "Stealth Chest Guard ★★★★",
                Armor_012_Lower: "Stealth Tights",
                Armor_042_Lower: "Stealth Tights ★",
                Armor_077_Lower: "Stealth Tights ★★",
                Armor_078_Lower: "Stealth Tights ★★★",
                Armor_079_Lower: "Stealth Tights ★★★★",
                Armor_014_Head: "Climber's Bandanna",
                Armor_083_Head: "Climber's Bandanna ★",
                Armor_084_Head: "Climber's Bandanna ★★",
                Armor_085_Head: "Climber's Bandanna ★★★",
                Armor_086_Head: "Climber's Bandanna ★★★★",
                Armor_014_Upper: "Climbing Gear",
                Armor_083_Upper: "Climbing Gear ★",
                Armor_084_Upper: "Climbing Gear ★★",
                Armor_085_Upper: "Climbing Gear ★★★",
                Armor_086_Upper: "Climbing Gear ★★★★",
                Armor_014_Lower: "Climbing Boots",
                Armor_083_Lower: "Climbing Boots ★",
                Armor_084_Lower: "Climbing Boots ★★",
                Armor_085_Lower: "Climbing Boots ★★★",
                Armor_086_Lower: "Climbing Boots ★★★★",
                Armor_017_Head: "Radiant Mask",
                Armor_087_Head: "Radiant Mask ★",
                Armor_088_Head: "Radiant Mask ★★",
                Armor_089_Head: "Radiant Mask ★★★",
                Armor_090_Head: "Radiant Mask ★★★★",
                Armor_017_Upper: "Radiant Shirt",
                Armor_087_Upper: "Radiant Shirt ★",
                Armor_088_Upper: "Radiant Shirt ★★",
                Armor_089_Upper: "Radiant Shirt ★★★",
                Armor_090_Upper: "Radiant Shirt ★★★★",
                Armor_017_Lower: "Radiant Tights",
                Armor_087_Lower: "Radiant Tights ★",
                Armor_088_Lower: "Radiant Tights ★★",
                Armor_089_Lower: "Radiant Tights ★★★",
                Armor_090_Lower: "Radiant Tights ★★★★",
                Armor_020_Head: "Soldier's Helm",
                Armor_095_Head: "Soldier's Helm ★",
                Armor_096_Head: "Soldier's Helm ★★",
                Armor_097_Head: "Soldier's Helm ★★★",
                Armor_098_Head: "Soldier's Helm ★★★★",
                Armor_020_Upper: "Soldier's Armor",
                Armor_095_Upper: "Soldier's Armor ★",
                Armor_096_Upper: "Soldier's Armor ★★",
                Armor_097_Upper: "Soldier's Armor ★★★",
                Armor_098_Upper: "Soldier's Armor ★★★★",
                Armor_020_Lower: "Soldier's Greaves",
                Armor_095_Lower: "Soldier's Greaves ★",
                Armor_096_Lower: "Soldier's Greaves ★★",
                Armor_097_Lower: "Soldier's Greaves ★★★",
                Armor_098_Lower: "Soldier's Greaves ★★★★",
                Armor_021_Head: "Ancient Helm",
                Armor_099_Head: "Ancient Helm ★",
                Armor_100_Head: "Ancient Helm ★★",
                Armor_101_Head: "Ancient Helm ★★★",
                Armor_102_Head: "Ancient Helm ★★★★",
                Armor_021_Upper: "Ancient Cuirass",
                Armor_099_Upper: "Ancient Cuirass ★",
                Armor_100_Upper: "Ancient Cuirass ★★",
                Armor_101_Upper: "Ancient Cuirass ★★★",
                Armor_102_Upper: "Ancient Cuirass ★★★★",
                Armor_021_Lower: "Ancient Greaves",
                Armor_099_Lower: "Ancient Greaves ★",
                Armor_100_Lower: "Ancient Greaves ★★",
                Armor_101_Lower: "Ancient Greaves ★★★",
                Armor_102_Lower: "Ancient Greaves ★★★★",
                Armor_022_Head: "Bokoblin Mask",
                Armor_043_Upper: "Old Shirt",
                Armor_043_Lower: "Well-Worn Trousers",
                Armor_044_Upper: "Warm Doublet",
                Armor_045_Head: "Moblin Mask",
                Armor_046_Head: "Rubber Helm",
                Armor_103_Head: "Rubber Helm ★",
                Armor_104_Head: "Rubber Helm ★★",
                Armor_105_Head: "Rubber Helm ★★★",
                Armor_106_Head: "Rubber Helm ★★★★",
                Armor_046_Upper: "Rubber Armor",
                Armor_103_Upper: "Rubber Armor ★",
                Armor_104_Upper: "Rubber Armor ★★",
                Armor_105_Upper: "Rubber Armor ★★★",
                Armor_106_Upper: "Rubber Armor ★★★★",
                Armor_046_Lower: "Rubber Tights",
                Armor_103_Lower: "Rubber Tights ★",
                Armor_104_Lower: "Rubber Tights ★★",
                Armor_105_Lower: "Rubber Tights ★★★",
                Armor_106_Lower: "Rubber Tights ★★★★",
                Armor_048_Head: "Barbarian Helm",
                Armor_111_Head: "Barbarian Helm ★",
                Armor_112_Head: "Barbarian Helm ★★",
                Armor_113_Head: "Barbarian Helm ★★★",
                Armor_114_Head: "Barbarian Helm ★★★★",
                Armor_048_Upper: "Barbarian Armor",
                Armor_111_Upper: "Barbarian Armor ★",
                Armor_112_Upper: "Barbarian Armor ★★",
                Armor_113_Upper: "Barbarian Armor ★★★",
                Armor_114_Upper: "Barbarian Armor ★★★★",
                Armor_048_Lower: "Barbarian Wraps",
                Armor_111_Lower: "Barbarian Wraps ★",
                Armor_112_Lower: "Barbarian Wraps ★★",
                Armor_113_Lower: "Barbarian Wraps ★★★",
                Armor_114_Lower: "Barbarian Wraps ★★★★",
                Armor_053_Head: "Gerudo Veil",
                Armor_053_Upper: "Gerudo Top",
                Armor_053_Lower: "Gerudo Sirwal",
                Armor_055_Head: "Lizalfos Mask",
                Armor_056_Head: "Lynel Mask",
                Armor_115_Head: "Thunder Helm",
                Armor_024_Head: "Diamond Circlet",
                Armor_117_Head: "Diamond Circlet ★",
                Armor_118_Head: "Diamond Circlet ★★",
                Armor_119_Head: "Diamond Circlet ★★★",
                Armor_120_Head: "Diamond Circlet ★★★★",
                Armor_025_Head: "Ruby Circlet",
                Armor_121_Head: "Ruby Circlet ★",
                Armor_122_Head: "Ruby Circlet ★★",
                Armor_123_Head: "Ruby Circlet ★★★",
                Armor_124_Head: "Ruby Circlet ★★★★",
                Armor_026_Head: "Sapphire Circlet",
                Armor_125_Head: "Sapphire Circlet ★",
                Armor_126_Head: "Sapphire Circlet ★★",
                Armor_127_Head: "Sapphire Circlet ★★★",
                Armor_128_Head: "Sapphire Circlet ★★★★",
                Armor_027_Head: "Topaz Earrings",
                Armor_129_Head: "Topaz Earrings ★",
                Armor_130_Head: "Topaz Earrings ★★",
                Armor_131_Head: "Topaz Earrings ★★★",
                Armor_132_Head: "Topaz Earrings ★★★★",
                Armor_028_Head: "Opal Earrings",
                Armor_133_Head: "Opal Earrings ★",
                Armor_134_Head: "Opal Earrings ★★",
                Armor_135_Head: "Opal Earrings ★★★",
                Armor_136_Head: "Opal Earrings ★★★★",
                Armor_029_Head: "Amber Earrings",
                Armor_137_Head: "Amber Earrings ★",
                Armor_138_Head: "Amber Earrings ★★",
                Armor_139_Head: "Amber Earrings ★★★",
                Armor_140_Head: "Amber Earrings ★★★★",
                Armor_116_Upper: "Champion's Tunic",
                Armor_148_Upper: "Champion's Tunic ★",
                Armor_149_Upper: "Champion's Tunic ★★",
                Armor_150_Upper: "Champion's Tunic ★★★",
                Armor_151_Upper: "Champion's Tunic ★★★★",
                Armor_049_Lower: "Sand Boots",
                Armor_152_Lower: "Sand Boots ★",
                Armor_153_Lower: "Sand Boots ★★",
                Armor_154_Lower: "Sand Boots ★★★",
                Armor_155_Lower: "Sand Boots ★★★★",
                Armor_140_Lower: "Snow Boots?",
                Armor_141_Lower: "Snow Boots",
                Armor_156_Lower: "Snow Boots ★",
                Armor_157_Lower: "Snow Boots ★★",
                Armor_158_Lower: "Snow Boots ★★★",
                Armor_159_Lower: "Snow Boots ★★★★",
                Armor_160_Head: "Dark Hood",
                Armor_160_Upper: "Dark Tunic",
                Armor_160_Lower: "Dark Trousers",
                Armor_170_Upper: "Nintendo Switch Shirt",
                Armor_200_Head: "Cap of Time",
                Armor_201_Head: "Cap of Time ★",
                Armor_202_Head: "Cap of Time ★★",
                Armor_203_Head: "Cap of Time ★★★",
                Armor_204_Head: "Cap of Time ★★★★",
                Armor_200_Upper: "Tunic of Time",
                Armor_201_Upper: "Tunic of Time ★",
                Armor_202_Upper: "Tunic of Time ★★",
                Armor_203_Upper: "Tunic of Time ★★★",
                Armor_204_Upper: "Tunic of Time ★★★★",
                Armor_200_Lower: "Trousers of Time",
                Armor_201_Lower: "Trousers of Time ★",
                Armor_202_Lower: "Trousers of Time ★★",
                Armor_203_Lower: "Trousers of Time ★★★",
                Armor_204_Lower: "Trousers of Time ★★★★",
                Armor_205_Head: "Cap of Wind",
                Armor_206_Head: "Cap of Wind ★",
                Armor_207_Head: "Cap of Wind ★★",
                Armor_208_Head: "Cap of Wind ★★★",
                Armor_209_Head: "Cap of Wind ★★★★",
                Armor_205_Upper: "Tunic of Wind",
                Armor_206_Upper: "Tunic of Wind ★",
                Armor_207_Upper: "Tunic of Wind ★★",
                Armor_208_Upper: "Tunic of Wind ★★★",
                Armor_209_Upper: "Tunic of Wind ★★★★",
                Armor_205_Lower: "Trousers of Wind",
                Armor_206_Lower: "Trousers of Wind ★",
                Armor_207_Lower: "Trousers of Wind ★★",
                Armor_208_Lower: "Trousers of Wind ★★★",
                Armor_209_Lower: "Trousers of Wind ★★★★",
                Armor_210_Head: "Cap of Twilight",
                Armor_211_Head: "Cap of Twilight ★",
                Armor_212_Head: "Cap of Twilight ★★",
                Armor_213_Head: "Cap of Twilight ★★★",
                Armor_214_Head: "Cap of Twilight ★★★★",
                Armor_210_Upper: "Tunic of Twilight",
                Armor_211_Upper: "Tunic of Twilight ★",
                Armor_212_Upper: "Tunic of Twilight ★★",
                Armor_213_Upper: "Tunic of Twilight ★★★",
                Armor_214_Upper: "Tunic of Twilight ★★★★",
                Armor_210_Lower: "Trousers of Twilight",
                Armor_211_Lower: "Trousers of Twilight ★",
                Armor_212_Lower: "Trousers of Twilight ★★",
                Armor_213_Lower: "Trousers of Twilight ★★★",
                Armor_214_Lower: "Trousers of Twilight ★★★★",
                Armor_215_Head: "Cap of the Sky",
                Armor_216_Head: "Cap of the Sky ★",
                Armor_217_Head: "Cap of the Sky ★★",
                Armor_218_Head: "Cap of the Sky ★★★",
                Armor_219_Head: "Cap of the Sky ★★★★",
                Armor_215_Upper: "Tunic of the Sky",
                Armor_216_Upper: "Tunic of the Sky ★",
                Armor_217_Upper: "Tunic of the Sky ★★",
                Armor_218_Upper: "Tunic of the Sky ★★★",
                Armor_219_Upper: "Tunic of the Sky ★★★★",
                Armor_215_Lower: "Trousers of the Sky",
                Armor_216_Lower: "Trousers of the Sky ★",
                Armor_217_Lower: "Trousers of the Sky ★★",
                Armor_218_Lower: "Trousers of the Sky ★★★",
                Armor_219_Lower: "Trousers of the Sky ★★★★",
                Armor_220_Head: "Sheik's Mask",
                Armor_221_Head: "Sheik's Mask ★",
                Armor_222_Head: "Sheik's Mask ★★",
                Armor_223_Head: "Sheik's Mask ★★★",
                Armor_224_Head: "Sheik's Mask ★★★★",
                Armor_225_Head: "Fierce Deity's Mask",
                Armor_226_Head: "Fierce Deity's Mask ★",
                Armor_227_Head: "Fierce Deity's Mask ★★",
                Armor_228_Head: "Fierce Deity's Mask ★★★",
                Armor_229_Head: "Fierce Deity's Mask ★★★★",
                Armor_225_Upper: "Fierce Deity's Armor",
                Armor_226_Upper: "Fierce Deity's Armor ★",
                Armor_227_Upper: "Fierce Deity's Armor ★★",
                Armor_228_Upper: "Fierce Deity's Armor ★★★",
                Armor_229_Upper: "Fierce Deity's Armor ★★★★",
                Armor_225_Lower: "Fierce Deity's Boots",
                Armor_226_Lower: "Fierce Deity's Boots ★",
                Armor_227_Lower: "Fierce Deity's Boots ★★",
                Armor_228_Lower: "Fierce Deity's Boots ★★★",
                Armor_229_Lower: "Fierce Deity's Boots ★★★★",
                Armor_230_Head: "Cap of the Hero",
                Armor_231_Head: "Cap of the Hero ★",
                Armor_232_Head: "Cap of the Hero ★★",
                Armor_233_Head: "Cap of the Hero ★★★",
                Armor_234_Head: "Cap of the Hero ★★★★",
                Armor_230_Upper: "Tunic of the Hero",
                Armor_231_Upper: "Tunic of the Hero ★",
                Armor_232_Upper: "Tunic of the Hero ★★",
                Armor_233_Upper: "Tunic of the Hero ★★★",
                Armor_234_Upper: "Tunic of the Hero ★★★★",
                Armor_230_Lower: "Trousers of the Hero",
                Armor_231_Lower: "Trousers of the Hero ★",
                Armor_232_Lower: "Trousers of the Hero ★★",
                Armor_233_Lower: "Trousers of the Hero ★★★",
                Armor_234_Lower: "Trousers of the Hero ★★★★",
                Armor_171_Head: "Phantom Helmet (v1.3)",
                Armor_171_Upper: "Phantom Armor (v1.3)",
                Armor_171_Lower: "Phantom Greaves (v1.3)",
                Armor_172_Head: "Majora's Mask (v1.3)",
                Armor_173_Head: "Midna's Helmet (v1.3)",
                Armor_174_Head: "Tingle's Hood (v1.3)",
                Armor_174_Upper: "Tingle's Shirt (v1.3)",
                Armor_174_Lower: "Tingle's Tights (v1.3)",
                Armor_176_Head: "Korok Mask (v1.3)",
                Armor_185_Head: "Salvager Headwear (v1.3.3)",
                Armor_185_Upper: "Salvager Vest (v1.3.3)",
                Armor_185_Lower: "Salvager Trousers (v1.3.3)",
                Armor_181_Head: "Vah Ruta Divine Helm (v1.3.3)",
                Armor_182_Head: "Vah Medoh Divine Helm (v1.3.3)",
                Armor_183_Head: "Vah Rudania Divine Helm (v1.3.3)",
                Armor_184_Head: "Vah Naboris Divine Helm (v1.3.3)",
                Armor_186_Head: "Vah Ruta Divine Helm ★ (v1.3.3)",
                Armor_187_Head: "Vah Ruta Divine Helm ★★ (v1.3.3)",
                Armor_188_Head: "Vah Ruta Divine Helm ★★★ (v1.3.3)",
                Armor_189_Head: "Vah Ruta Divine Helm ★★★★ (v1.3.3)",
                Armor_190_Head: "Vah Medoh Divine Helm ★ (v1.3.3)",
                Armor_191_Head: "Vah Medoh Divine Helm ★★ (v1.3.3)",
                Armor_192_Head: "Vah Medoh Divine Helm ★★★ (v1.3.3)",
                Armor_193_Head: "Vah Medoh Divine Helm ★★★★ (v1.3.3)",
                Armor_194_Head: "Vah Rudania Divine Helm ★ (v1.3.3)",
                Armor_195_Head: "Vah Rudania Divine Helm ★★ (v1.3.3)",
                Armor_196_Head: "Vah Rudania Divine Helm ★★★ (v1.3.3)",
                Armor_197_Head: "Vah Rudania Divine Helm ★★★★ (v1.3.3)",
                Armor_198_Head: "Vah Naboris Divine Helm ★ (v1.3.3)",
                Armor_199_Head: "Vah Naboris Divine Helm ★★ (v1.3.3)",
                Armor_168_Head: "Vah Naboris Divine Helm ★★★ (v1.3.3)",
                Armor_169_Head: "Vah Naboris Divine Helm ★★★★ (v1.3.3)",
                Armor_175_Upper: "Island Lobster Shirt (v1.4)",
                Armor_177_Head: "Ravio's Hood (v1.4)",
                Armor_178_Head: "Zant's Helmet (v1.4)",
                Armor_179_Head: "Royal Guard Cap (v1.4)",
                Armor_179_Upper: "Royal Guard Uniform (v1.4)",
                Armor_179_Lower: "Royal Guard Boots (v1.4)",
                Armor_180_Head: "Phantom Ganon Skull (v1.4)",
                Armor_180_Upper: "Phantom Ganon Armor (v1.4)",
                Armor_180_Lower: "Phantom Ganon Greaves (v1.4)"
            }
        },

        {
            id: "materials",
            items: {
                Item_Fruit_A: "Apple",
                Item_Fruit_B: "Wildberry",
                Item_Fruit_C: "Voltfruit",
                Item_Fruit_D: "Hearty Durian",
                Item_Fruit_E: "Fleet-Lotus Seeds",
                Item_Fruit_E_00: "Fleet-Lotus Seeds x0",
                Item_Fruit_F: "Hydromelon",
                Item_Fruit_G: "Palm Fruit",
                Item_Fruit_H: "Mighty Bananas",
                Item_Fruit_I: "Spicy Pepper",
                Item_Fruit_J: "Fortified Pumpkin",
                Item_Fruit_K: "Acorn",
                Item_Fruit_L: "Chickaloo Tree Nut",
                Item_Mushroom_A: "Stamella Mushroom",
                Item_MushroomGet_A: "Stamella Mushroom",
                Item_Mushroom_B: "Chillshroom",
                Item_MushroomGet_B: "Chillshroom",
                Item_Mushroom_C: "Sunshroom",
                Item_MushroomGet_C: "Sunshroom",
                Item_Mushroom_D: "Rushroom",
                Item_MushroomGet_D: "Rushroom",
                Item_Mushroom_E: "Hylian Mushroom",
                Item_MushroomGet_E: "Hylian Mushroom",
                Item_Mushroom_F: "Hearty Truffle",
                Item_Mushroom_F_00: "Hearty Truffle x0",
                Item_MushroomGet_F: "Hearty Truffle",
                Item_Mushroom_H: "Zapshroom",
                Item_MushroomGet_H: "Zapshroom",
                Item_Mushroom_J: "Silent Shroom",
                Item_MushroomGet_J: "Silent Shroom",
                Item_Mushroom_L: "Razorshroom",
                Item_MushroomGet_L: "Razorshroom",
                Item_Mushroom_M: "Ironshroom",
                Item_MushroomGet_M: "Ironshroom",
                Item_Mushroom_N: "Big Hearty Truffle",
                Item_MushroomGet_N: "Big Hearty Truffle",
                Item_Mushroom_N_00: "Big Hearty Truffle x0",
                Item_Mushroom_O: "Endura Shroom",
                Item_MushroomGet_O: "Endura Shroom",
                Item_Plant_A: "Hyrule Herb",
                Item_PlantGet_A: "Hyrule Herb",
                Item_Plant_B: "Hearty Radish",
                Item_PlantGet_B: "Hearty Radish",
                Item_Plant_C: "Big Hearty Radish",
                Item_PlantGet_C: "Big Hearty Radish",
                Item_Plant_E: "Cool Safflina",
                Item_PlantGet_E: "Cool Safflina",
                Item_Plant_F: "Warm Safflina",
                Item_PlantGet_F: "Warm Safflina",
                Item_Plant_G: "Mighty Thistle",
                Item_PlantGet_G: "Mighty Thistle",
                Item_Plant_H: "Armoranth",
                Item_PlantGet_H: "Armoranth",
                Item_Plant_I: "Blue Nightshade",
                Item_PlantGet_I: "Blue Nightshade",
                Item_Plant_J: "Silent Princess",
                Item_PlantGet_J: "Silent Princess",
                Item_Plant_L: "Electric Safflina",
                Item_PlantGet_L: "Electric Safflina",
                Item_Plant_M: "Swift Carrot",
                Item_PlantGet_M: "Swift Carrot",
                Item_Plant_O: "Swift Violet",
                Item_PlantGet_O: "Swift Violet",
                Item_Plant_Q: "Endura Carrot",
                Item_PlantGet_Q: "Endura Carrot",
                Item_Meat_01: "Raw Meat",
                Item_Meat_02: "Raw Prime Meat",
                Item_Meat_06: "Raw Bird Drumstick",
                Item_Meat_07: "Raw Bird Thigh",
                Item_Meat_11: "Raw Gourmet Meat",
                Item_Meat_12: "Raw Whole Meat",
                Item_FishGet_A: "Hylian Bass",
                Item_FishGet_B: "Hearty Bass",
                Item_FishGet_C: "Chillfin Trout",
                Item_FishGet_D: "Voltfin Trout",
                Item_FishGet_E: "Mighty Carp",
                Item_FishGet_F: "Mighty Porgy",
                Item_FishGet_G: "Armored Porgy",
                Item_FishGet_H: "Armored Carp",
                Item_FishGet_I: "Hearty Salmon",
                Item_FishGet_J: "Sizzlefin Trout",
                Item_FishGet_K: "Hearty Blueshell Snail",
                Item_FishGet_L: "Staminoka Bass",
                Item_FishGet_M: "Sneaky River Snail",
                Item_FishGet_X: "Stealthfin Trout",
                Item_FishGet_Z: "Sanke Carp",
                Animal_Insect_A: "Hot-Footed Frog",
                Item_InsectGet_A: "Hot-Footed Frog",
                Animal_Insect_B: "Tireless Frog",
                Item_InsectGet_B: "Tireless Frog",
                Animal_Insect_C: "Cold Darner",
                Item_InsectGet_C: "Cold Darner",
                Animal_Insect_E: "Sunset Firefly",
                Item_InsectGet_E: "Sunset Firefly",
                Animal_Insect_F: "Fairy",
                Item_InsectGet_F: "Fairy",
                Animal_Insect_G: "Bladed Rhino Beetle",
                Item_InsectGet_G: "Bladed Rhino Beetle",
                Animal_Insect_H: "Restless Cricket",
                Item_InsectGet_H: "Restless Cricket",
                Animal_Insect_I: "Electric Darner",
                Item_InsectGet_I: "Electric Darner",
                Animal_Insect_K: "Razorclaw Crab",
                Item_InsectGet_K: "Razorclaw Crab",
                Animal_Insect_M: "Hearty Lizard",
                Item_InsectGet_M: "Hearty Lizard",
                Animal_Insect_N: "Winterwing Butterfly",
                Item_InsectGet_N: "Winterwing Butterfly",
                Animal_Insect_O: "Ironshell Crab",
                Item_InsectGet_O: "Ironshell Crab",
                Animal_Insect_P: "Rugged Rhino Beetle",
                Item_InsectGet_P: "Rugged Rhino Beetle",
                Animal_Insect_Q: "Summerwing Butterfly",
                Item_InsectGet_Q: "Summerwing Butterfly",
                Animal_Insect_R: "Thunderwing Butterfly",
                Item_InsectGet_R: "Thunderwing Butterfly",
                Animal_Insect_S: "Hightail Lizard",
                Item_InsectGet_S: "Hightail Lizard",
                Animal_Insect_T: "Warm Darner",
                Item_InsectGet_T: "Warm Darner",
                Animal_Insect_X: "Fireproof Lizard",
                Item_InsectGet_X: "Fireproof Lizard",
                Animal_Insect_Z: "Bright-Eyed Crab",
                Item_InsectGet_Z: "Bright-Eyed Crab",
                Animal_Insect_AA: "Energetic Rhino Beetle",
                Item_InsectGet_AA: "Energetic Rhino Beetle",
                Animal_Insect_AB: "Smotherwing Butterfly",
                Item_InsectGet_AB: "Smotherwing Butterfly",
                BeeHome: "Courser Bee Honey",
                Obj_FireWoodBundle: "Wood",
                Item_Enemy_00: "Bokoblin Horn",
                Item_Enemy_01: "Bokoblin Fang",
                Item_Enemy_02: "Bokoblin Guts",
                Item_Enemy_03: "Lizalfos Horn",
                Item_Enemy_04: "Lizalfos Talon",
                Item_Enemy_05: "Lizalfos Tail",
                Item_Enemy_06: "Moblin Horn",
                Item_Enemy_07: "Moblin Fang",
                Item_Enemy_08: "Moblin Guts",
                Item_Enemy_12: "Lynel Horn",
                Item_Enemy_13: "Lynel Hoof",
                Item_Enemy_14: "Lynel Guts",
                Item_Enemy_15: "Red Chuchu Jelly",
                Item_Enemy_16: "Yellow Chuchu Jelly",
                Item_Enemy_17: "White Chuchu Jelly",
                Item_Enemy_18: "Keese Wing",
                Item_Enemy_19: "Keese Eyeball",
                Item_Enemy_20: "Octorok Tentacle",
                Item_Enemy_21: "Tentacle Eyeball",
                Item_Enemy_24: "Molduga Fin",
                Item_Enemy_25: "Molduga Guts",
                Item_Enemy_26: "Ancient Gear",
                Item_Enemy_27: "Ancient Screw",
                Item_Enemy_28: "Ancient Spring",
                Item_Enemy_29: "Ancient Shaft",
                Item_Enemy_30: "Ancient Core",
                Item_Enemy_31: "Giant Ancient Core",
                Item_Enemy_32: "Hinox Toenail",
                Item_Enemy_33: "Hinox Tooth",
                Item_Enemy_34: "Hinox Guts",
                Item_Enemy_38: "Dinraal's Scale",
                Item_Enemy_39: "Dinraal's Claw",
                Item_Enemy_40: "Chuchu Jelly",
                Item_Enemy_41: "Red Lizalfos Tail",
                Item_Enemy_42: "Icy Lizalfos Tail",
                Item_Enemy_43: "Yellow Lizalfos Tail",
                Item_Enemy_44: "Fire Keese Wing",
                Item_Enemy_45: "Electric Keese Wing",
                Item_Enemy_46: "Ice Keese Wing",
                Item_Enemy_47: "Shard of Dinraal's Fang",
                Item_Enemy_48: "Shard of Dinraal's Horn",
                Item_Enemy_49: "Naydra's Scale",
                Item_Enemy_50: "Naydra's Claw",
                Item_Enemy_51: "Shard of Naydra's Fang",
                Item_Enemy_52: "Shard of Naydra's Horn",
                Item_Enemy_53: "Farosh's Scale",
                Item_Enemy_54: "Farosh's Claw",
                Item_Enemy_55: "Shard of Farosh's Fang",
                Item_Enemy_56: "Shard of Farosh's Horn",
                Item_Enemy_57: "Octo Balloon",
                Item_Enemy_Put_57: "Octo Balloon",
                Item_Material_01: "Cane Sugar",
                Item_Material_02: "Goron Spice",
                Item_Material_03: "Hylian Rice",
                Item_Material_04: "Bird Egg",
                Item_Material_05: "Fresh Milk",
                Item_Material_06: "Goat Butter",
                Item_Material_07: "Tabantha Wheat",
                Item_Material_08: "Monster Extract",
                Item_Ore_A: "Diamond",
                Item_Ore_A_00: "Diamant x0",
                Item_Ore_B: "Ruby",
                Item_Ore_C: "Sapphire",
                Item_Ore_D: "Topaz",
                Item_Ore_E: "Opal",
                Item_Ore_F: "Amber",
                Item_Ore_G: "Luminous Stone",
                Item_Ore_H: "Rock Salt",
                Item_Ore_I: "Flint",
                Item_Ore_J: "Star Fragment"
            }
        },

        {
            id: "food",
            items: {
                Item_Boiled_01: "Hard-Boiled Egg",
                Item_ChilledFish_01: "Frozen Bass",
                Item_ChilledFish_02: "Frozen Hearty Salmon",
                Item_ChilledFish_03: "Frozen Trout",
                Item_ChilledFish_04: "Frozen Carp",
                Item_ChilledFish_05: "Frozen Porgy",
                Item_ChilledFish_06: "Frozen Hearty Bass",
                Item_ChilledFish_07: "Frozen Crab",
                Item_ChilledFish_08: "Frozen River Snail",
                Item_ChilledFish_09: "Icy Hearty Blueshell Snail",
                Item_RoastFish_01: "Roasted Bass",
                Item_RoastFish_02: "Roasted Hearty Bass",
                Item_RoastFish_03: "Roasted Trout",
                Item_RoastFish_04: "Roasted Hearty Salmon",
                Item_RoastFish_07: "Roasted Carp",
                Item_RoastFish_09: "Roasted Porgy",
                Item_RoastFish_11: "Blueshell Escargot",
                Item_RoastFish_13: "Sneaky River Escargot",
                Item_RoastFish_15: "Blackened Crab",
                Item_Roast_01: "Seared Steak",
                Item_Roast_02: "Roasted Bird Drumstick",
                Item_Roast_03: "Baked Apple",
                Item_Roast_04: "Toasty Stamella Shroom",
                Item_Roast_05: "Toasted Hearty Truffle",
                Item_Roast_06: "Toasty Hylian Shroom",
                Item_Roast_07: "Roasted Wildberry",
                Item_Roast_08: "Roasted Voltfruit",
                Item_Roast_09: "Roasted Hearty Durian",
                Item_Roast_10: "Baked Palm Fruit",
                Item_Roast_11: "Roasted Mighty Bananas",
                Item_Roast_12: "Roasted Hydromelon",
                Item_Roast_13: "Charred Pepper",
                Item_Roast_15: "Baked Fortified Pumpkin",
                Item_Roast_16: "Roasted Lotus Seed",
                Item_Roast_18: "Roasted Radish",
                Item_Roast_19: "Roasted Big Radish",
                Item_Roast_24: "Roasted Swift Carrot",
                Item_Roast_27: "Roasted Mighty Thistle",
                Item_Roast_28: "Roasted Armoranth",
                Item_Roast_31: "Toasty Chillshroom",
                Item_Roast_32: "Toasty Sunshroom",
                Item_Roast_33: "Toasty Zapshroom",
                Item_Roast_36: "Toasty Rushroom",
                Item_Roast_37: "Toasty Razorshroom",
                Item_Roast_38: "Toasty Ironshroom",
                Item_Roast_39: "Toasty Silent Shroom",
                Item_Roast_40: "Seared Prime Steak",
                Item_Roast_41: "Roasted Bird Thigh",
                Item_Roast_45: "Seared Gourmet Steak",
                Item_Roast_46: "Roasted Whole Bird",
                Item_Roast_48: "Roasted Acorn",
                Item_Roast_49: "Toasted Big Heart Truffle",
                Item_Roast_50: "Roasted Endura Carrot",
                Item_Roast_51: "Campfire Egg",
                Item_Roast_52: "Roasted Tree Nut",
                Item_Roast_53: "Toasty Endura Shroom",
                Item_Chilled_01: "Icy Meat",
                Item_Chilled_02: "Icy Prime Meat",
                Item_Chilled_03: "Icy Gourmet Meat",
                Item_Chilled_04: "Frozen Bird Drumstick",
                Item_Chilled_05: "Frozen Bird Thigh",
                Item_Chilled_06: "Frozen Whole Bird",
                Item_Cook_A_01: "Mushroom Skewer",
                Item_Cook_A_02: "Steamed Mushrooms",
                Item_Cook_A_03: "Steamed Fruit",
                Item_Cook_A_04: "Steamed Fish",
                Item_Cook_A_05: "Steamed Meat",
                Item_Cook_A_07: "Fruit and Mushroom Mix",
                Item_Cook_A_08: "Fish and Mushroom Skewer",
                Item_Cook_A_09: "Meat and Mushroom Skewer",
                Item_Cook_A_10: "Omelet",
                Item_Cook_A_11: "Glazed Mushroom",
                Item_Cook_A_12: "Glazed Meat",
                Item_Cook_A_13: "Glazed Seafood",
                Item_Cook_A_14: "Glazed Veggies",
                Item_Cook_B_01: "Fried Wild Greens",
                Item_Cook_B_02: "Simmered Fruits",
                Item_Cook_B_05: "Fish Skewer",
                Item_Cook_B_06: "Meat Skewer",
                Item_Cook_B_11: "Copious Fried Wild Greens",
                Item_Cook_B_12: "Copious Simmered Fruits",
                Item_Cook_B_13: "Copious Mushroom Skewers",
                Item_Cook_B_15: "Copious Seafood Skewers",
                Item_Cook_B_16: "Copious Meat Skewers",
                Item_Cook_B_17: "Meat and Seafood Fry",
                Item_Cook_B_18: "Prime Meat and Seafood Fry",
                Item_Cook_B_19: "Gourmet Meat and Seafood Fry",
                Item_Cook_B_20: "Meat-Stuffed Pumpkin",
                Item_Cook_B_21: "Sautéed Peppers",
                Item_Cook_B_22: "Sautéed Nuts",
                Item_Cook_B_23: "Seafood Skewers",
                Item_Cook_C_16: "Fairy Tonic",
                Item_Cook_C_17: "Elixir",
                Item_Cook_D_01: "Salt-Grilled Mushrooms",
                Item_Cook_D_02: "Salt-Grilled Greens",
                Item_Cook_D_03: "Salt-Grilled Fish",
                Item_Cook_D_04: "Salt-Grilled Meat",
                Item_Cook_D_05: "Salt-Grilled Prime Meat",
                Item_Cook_D_06: "Salt-Grilled Gourmet Meat",
                Item_Cook_D_07: "Pepper Steak",
                Item_Cook_D_08: "Pepper Seafood",
                Item_Cook_D_09: "Salt-Grilled Crab",
                Item_Cook_D_10: "Crab Stir-Fry",
                Item_Cook_E_01: "Poultry Pilaf",
                Item_Cook_E_02: "Prime Poultry Pilaf",
                Item_Cook_E_03: "Gourmet Poultry Pilaf",
                Item_Cook_E_04: "Fried Egg and Rice",
                Item_Cook_F_01: "Creamy Meat Soup",
                Item_Cook_F_02: "Creamy Seafood Soup",
                Item_Cook_F_03: "Veggie Cream Soup",
                Item_Cook_F_04: "Creamy Heart Soup",
                Item_Cook_G_02: "Seafood Rice Balls",
                Item_Cook_G_03: "Veggie Rice Balls",
                Item_Cook_G_04: "Mushroom Rice Balls",
                Item_Cook_G_05: "Meat and Rice Bowl",
                Item_Cook_G_06: "Prime Meat and Rice Bowl",
                Item_Cook_G_09: "Gourmet Meat and Rice Bowl",
                Item_Cook_G_10: "Seafood Fried Rice",
                Item_Cook_G_11: "Curry Pilaf",
                Item_Cook_G_12: "Mushroom Risotto",
                Item_Cook_G_13: "Vegetable Risotto",
                Item_Cook_G_14: "Salmon Risotto",
                Item_Cook_G_15: "Meaty Rice Balls",
                Item_Cook_G_16: "Crab Omelet with Rice",
                Item_Cook_G_17: "Crab Risotto",
                Item_Cook_H_01: "Seafood Meunière",
                Item_Cook_H_02: "Porgy Meunière",
                Item_Cook_H_03: "Salmon Meunière",
                Item_Cook_I_01: "Fruit Pie",
                Item_Cook_I_02: "Apple Pie",
                Item_Cook_I_03: "Egg Tart",
                Item_Cook_I_04: "Meat Pie",
                Item_Cook_I_05: "Carrot Cake",
                Item_Cook_I_06: "Pumpkin Pie",
                Item_Cook_I_07: "Hot Buttered Apple",
                Item_Cook_I_08: "Honeyed Apple",
                Item_Cook_I_09: "Honeyed Fruits",
                Item_Cook_I_10: "Plain Crepe",
                Item_Cook_I_11: "Wildberry Crepe",
                Item_Cook_I_12: "Nutcake",
                Item_Cook_I_13: "Fried Bananas",
                Item_Cook_I_14: "Egg Pudding",
                Item_Cook_I_15: "Fish Pie",
                Item_Cook_I_16: "Honey Candy",
                Item_Cook_I_17: "Honey Crepe",
                Item_Cook_J_01: "Curry Rice",
                Item_Cook_J_02: "Vegetable Curry",
                Item_Cook_J_03: "Seafood Curry",
                Item_Cook_J_04: "Poultry Curry",
                Item_Cook_J_05: "Prime Poultry Curry",
                Item_Cook_J_06: "Meat Curry",
                Item_Cook_J_07: "Prime Meat Curry",
                Item_Cook_J_08: "Gourmet Poultry Curry",
                Item_Cook_J_09: "Gourmet Meat Curry",
                Item_Cook_K_01: "Meat Stew",
                Item_Cook_K_02: "Prime Meat Stew",
                Item_Cook_K_03: "Pumpkin Stew",
                Item_Cook_K_04: "Clam Chowder",
                Item_Cook_K_05: "Gourmet Meat Stew",
                Item_Cook_K_06: "Cream of Mushroom Soup",
                Item_Cook_K_07: "Cream of Vegetable Soup",
                Item_Cook_K_08: "Carrot Stew",
                Item_Cook_K_09: "Milk",
                Item_Material_05_00: "Milk x0",
                Item_Cook_L_01: "Monster Stew",
                Item_Cook_L_02: "Monster Soup",
                Item_Cook_L_03: "Monster Cake",
                Item_Cook_L_04: "Monster Rice Balls",
                Item_Cook_L_05: "Monster Curry",
                Item_Cook_M_01: "Wheat Bread",
                Item_Cook_N_01: "Seafood Paella",
                Item_Cook_N_02: "Fruitcake",
                Item_Cook_N_03: "Vegetable Omelet",
                Item_Cook_N_04: "Mushroom Omelet",
                Item_Cook_O_01: "Dubious Food",
                Item_Cook_O_02: "Rock-Hard Food",
                Item_Cook_P_01: "Fragrant Mushroom Sauté",
                Item_Cook_P_02: "Herb Sauté",
                Item_Cook_P_03: "Spiced Meat Skewer",
                Item_Cook_P_04: "Prime Spiced Meat Skewer",
                Item_Cook_P_05: "Gourmet Spiced Meat Skewer"
            }
        },

        //
        //  Note:
        //  What's unique about Breath of the Wild and nearly every object in the game is that
        //  They all inherit in-game entity properties and implement inventory functionality. For 
        //  Example, replacing your bomb arrows with the internal identifier for materialized diamond
        //  Ore will cause ore to spawn when you draw your bow with the bomb arrow slot equipped.
        //
        {
            id: "other",
            items: {
                Obj_DungeonClearSeal: "Spirit Orb",
                Obj_KorokNuts: "Korok Seed",
                PlayerStole2: "Paraglider",
                Obj_ProofBook: "Classified Envelope",
                Obj_DRStone_Get: "Sheikah Slate",
                Obj_HeroSoul_Zora: "Mipha's Grace",
                Obj_HeroSoul_Gerudo: "Urbosa's Fury",
                Obj_HeroSoul_Goron: "Daruk's Protection",
                Obj_HeroSoul_Rito: "Revali's Gale",
                Obj_DLC_HeroSoul_Zora: "Mipha's Grace + (v1.4)",
                Obj_DLC_HeroSoul_Gerudo: "Urbosa's Fury + (v1.4)",
                Obj_DLC_HeroSoul_Goron: "Daruk's Protection + (v1.4)",
                Obj_DLC_HeroSoul_Rito: "Revali's Gale + (v1.4)",
                Obj_Maracas: "Hestu's Maracas",
                Obj_ProofKorok: "Hestu's Gift",
                Obj_ProofSandwormKiller: "Medal of Honor: Molduga",
                Obj_ProofGiantKiller: "Medal of Honor: Hinox",
                Obj_ProofGolemKiller: "Medal of Honor: Talus",
                KeySmall: "Small Key",
                Obj_Armor_115_Head: "Thunder Helm",
                GameRomHorseReins_00: "Stable Bridle",
                GameRomHorseReins_01: "Traveler's Bridle",
                GameRomHorseReins_02: "Royal Reins",
                GameRomHorseReins_03: "Knight's Bridle",
                GameRomHorseReins_04: "Monster Bridle",
                GameRomHorseReins_05: "Extravagant Bridle",
                GameRomHorseReins_10: "Ancient Bridle (v1.4)",
                GameRomHorseSaddle_00: "Stable Saddle",
                GameRomHorseSaddle_01: "Traveler's Saddle",
                GameRomHorseSaddle_02: "Royal Saddle",
                GameRomHorseSaddle_03: "Knight's Saddle",
                GameRomHorseSaddle_04: "Monster Saddle",
                GameRomHorseSaddle_05: "Extravagant Saddle",
                GameRomHorseSaddle_10: "Ancient Saddle (v1.4)",
                GameRomHorse00S: "Donkey",
                GameRomHorseNushi: "Lord of the Mountain",
                GameRomHorseEpona: "Epona",
                GameRomHorseBone: "Stalhorse",
                GameRomHorse00L: "Giant Horse",
                GameRomHorseZelda: "Royal White Stallion",
                Obj_WarpDLC: "Travel Medallion (v1.3)",
                Get_TwnObj_DLC_MemorialPicture_A_01: "Picture of the Champions (v1.4)"
            }
        }
    ]
};


SavegameEditor =
{
    Name:       "The Legend of Zelda: Breath of the Wild",
    Filename:   "game_data.sav",
    Version:    20180520,

    Constants:
    {
        MAX_ITEMS:      410,
        STRING_SIZE:    0x80,
        FILESIZE:       [896976, 897160, 897112, 907824, 1020648, 1027208, 1027208],
        HEADER:         [0x24e2, 0x24ee, 0x2588, 0x29c0, 0x3ef8, 0x471a, 0x471b],
        VERSION:        ["v1.0", "v1.1", "v1.2", "v1.3", "v1.3.3", "v1.4", "v1.5"],
        MAP_ICONS:      0x9383490e,
        MAP_POS:        0xea9def3f,
        ICON_TYPES:
        {
            SWORD:  27,
            BOW:    28,
            SHIELD: 29,
            POT:    30,
            STAR:   31,
            CHEST:  32,
            SKULL:  33,
            LEAF:   34,
            TOWER:  35
        }
    },

    OffsetsAll:
    {
        RUPEES:                     [0x23149bf8, 0x00e0a0, 0x00e110, 0x00e110, 0x00e678, 0x00e730, 0x00eaf8, 0x00eaf8],
        MONS:                       [0xce7afed3, 0x0bc480, 0x0bc558, 0x0bc538, 0x0be728, 0x0d6ac8, 0x0d7fa8, 0x0d7fa8],
        MAX_HEARTS:                 [0x2906f327, 0x00fd28, 0x00fdb8, 0x00fdb8, 0x010438, 0x010508, 0x010970, 0x010970],
        MAX_STAMINA:                [0x3adff047, 0x043208, 0x0432c0, 0x0432c0, 0x043c98, 0x04fdb0, 0x0503c8, 0x0503c8],
        ITEMS:                      [0x5f283289, 0x052828, 0x0528d8, 0x0528c0, 0x053890, 0x05fa48, 0x060408, 0x060408],
        ITEMS_QUANTITY:             [0x6a09fc59, 0x063340, 0x0633f0, 0x0633d8, 0x064550, 0x070730, 0x0711c8, 0x0711c8],
        FLAGS_WEAPON:               [0x57ee221d, 0x050328, 0x0503d8, 0x0503c0, 0x051270, 0x05d420, 0x05dd20, 0x05dd20],
        FLAGSV_WEAPON:              [0xa6d926bc, 0x0a9ca8, 0x0a9d78, 0x0a9d58, 0x0ab8d0, 0x0c3bd8, 0x0c4c68, 0x0c4c68],
        FLAGS_BOW:                  [0x0cbf052a, 0x0045f0, 0x0045f8, 0x0045f8, 0x0047e8, 0x004828, 0x004990, 0x004990],
        FLAGSV_BOW:                 [0x1e3fd294, 0x00a8e0, 0x00a940, 0x00a940, 0x00ae08, 0x00ae90, 0x00b1e0, 0x00b1e0],
        FLAGS_SHIELD:               [0xc5238d2b, 0x0b5810, 0x0b58e8, 0x0b58c8, 0x0b7910, 0x0cfc70, 0x0d1038, 0x0d1038],
        FLAGSV_SHIELD:              [0x69f17e8a, 0x063218, 0x0632c8, 0x0632b0, 0x064420, 0x070600, 0x071098, 0x071098],
        HORSE_SADDLES:              [0x333aa6e5, 0x03d0e8, 0x03d190, 0x03d190, 0x03d9d8, 0x049ab8, 0x04a008, 0x04a008],
        HORSE_REINS:                [0x6150c6be, 0x060508, 0x0605b8, 0x0605a0, 0x0615d0, 0x06d7a0, 0x06e190, 0x06e190],
        HORSE_NAMES:                [0x7b74e117, 0x070320, 0x0703c0, 0x0703a8, 0x071820, 0x07da30, 0x07e640, 0x07e640],
        HORSE_MANES:                [0x9c6cfd3f, 0x0a6478, 0x0a6538, 0x0a6520, 0x0a7f18, 0x0c01c0, 0x0c1168, 0x0c1168],
        HORSE_TYPES:                [0xc247b696, 0x0b46f8, 0x0b47d8, 0x0b47b8, 0x0b6780, 0x0cead8, 0x0cfe40, 0x0cfe40],
        HORSE_BONDS:                [0xe1a0ca54, 0x0c3670, 0x0c3738, 0x0c3710, 0x0c5bb0, 0x0de2a0, 0x0df960, 0x0df960],
        HORSE_POSITION:             [0x982ba201, 0x07aed0, 0x07af90, 0x07af78, 0x07c8f8, 0x088b78, 0x089a80, 0x089a80],
        KOROK_SEED_COUNTER:         [0x8a94e07a, 0x076148, 0x0761f8, 0x0761e0, 0x0778f8, 0x083b60, 0x084908, 0x084908],
        DEFEATED_HINOX_COUNTER:     [0x54679940, 0x04d2b8, 0x04d368, 0x04d358, 0x04e158, 0x05a2f0, 0x05ab78, 0x05ab78],
        DEFEATED_TALUS_COUNTER:     [0x698266be, 0x063010, 0x0630c0, 0x0630a8, 0x064218, 0x0703f0, 0x070e88, 0x070e88],
        DEFEATED_MOLDUGA_COUNTER:   [0x441b7231, 0x0466d0, 0x046788, 0x046780, 0x0472a8, 0x0533e8, 0x053b00, 0x053b00],
        PLAYTIME:                   [0x73c29681, 0x067888, 0x067920, 0x067908, 0x068c40, 0x074e40, 0x075998, 0x075998],
        RELIC_GERUDO:               [0x97f925c3, 0x07adc0, 0x07ae80, 0x07ae68, 0x07c7e0, 0x088a60, 0x089968, 0x089968],
        RELIC_GORON:                [0xf1cf4807, 0x0cb3c0, 0x0cb488, 0x0cb460, 0x0cdbf8, 0x0e6340, 0x0e7ba0, 0x0e7ba0],
        RELIC_RITO:                 [0xfda0cde4, 0x0da0d8, 0x0da190, 0x0da160, 0x0dcac0, 0x0f8370, 0x0f9cc8, 0x0f9cc8],
        MOTORCYCLE:                 [0xc9328299, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x0d2660, 0x0d2660],
        PLAYER_POSITION:            [0xa40ba103, 0x0a8cd8, 0x0a8da8, 0x0a8d90, 0x0aa8a8, 0x0c2b98, 0x0c3bf0, 0x0c3bf0],
        MAP:                        [0x0bee9e46, 0x004128, 0x004130, 0x004130, 0x004310, 0x004348, 0x0044a0, 0x0044a0],
        MAPTYPE:                    [0xd913b769, 0x0c0588, 0x0c0658, 0x0c0630, 0x0c29b0, 0x0db080, 0x0dc658, 0x0dc658]
    },

    SaveFile: {},
    VirtualFields: {},

    getValue: function(f)
    {
        return this.VirtualFields[f]; 
    },

    setValue: function(f, val)
    {
        this.VirtualFields[f] = val;
    },

    setNestedValue: function(f, sf, val)
    {
        if (typeof this.VirtualFields[f] == "undefined")
            this.VirtualFields[f] = {};

        var temp = this.VirtualFields[f];
        temp[sf] = val;

        this.VirtualFields[f] = temp;
    },

    _toHexInt: function(i)
    {
        var s = i.toString(16);
        while (s.length < 8)
            s = "0" + s;
        return "0x" + s;
    },

    _writeBoolean: function(offset, val, arrayPos)
    {
        if (arrayPos)
            this.SaveFile.writeInt(
                offset + 8 * i,
                val? 1 : 0);
        else 
            this.SaveFile.writeInt(
                offset,
                val? 1 : 0);
    },

    _writeValue: function(offset, val, arrayPos)
    {
        if (arrayPos)
            this.SaveFile.writeInt(
                offset + 8 * i,
                val);
        else
            this.SaveFile.writeInt(
                offset,
                val);
    },

    _writeString: function(offset, str)
    {
        for (var i = 0; i < 16; i++)
        {
            this.SaveFile.writeBytes(offset, [0, 0, 0, 0]);
            var fourBytes = str.substr(i * 4, 4);

            for (j = 0; j < fourBytes.length; j++)
                this.SaveFile.writeByte(
                    offset + j,
                    fourBytes.charCodeAt(j));

            offset += 8;
        }
    },

    _writeStringShort: function(offset, str)
    {
        for (var i = 0; i < 8; i++)
        {
            this.SaveFile.writeBytes(offset, [0, 0, 0, 0]);
            var fourBytes = str.substr(i * 4, 4);

            for (j = 0; j < fourBytes.length; j++)
                this.SaveFile.writeByte(
                    offset + j,
                    fourBytes.charCodeAt(j));

            offset += 8;
        }
    },

    _searchHash: function(hash)
    {
        for (var i = 0x0c; i < this.SaveFile.fileSize; i += 8)
            if (hash === this.SaveFile.readInt(i))
                return i;
        return false;
    },

    _readFromHash: function(hash)
    {
        var offset = this._searchHash(hash);
        if (typeof offset === "number")
            return this.SaveFile.readInt(offset + 4);
        return false;
    },

    _writeValueAtHash: function(hash, val)
    {
        var offset = this._searchHash(hash);

        if (typeof offset === "number")
            this._writeValue(offset + 4, val);
    },

    _getOffsets(v)
    {
        this.Offsets = {};
        if (v < this.OffsetsAll.RUPEES.length)
            for (prop in this.OffsetsAll)
                this.Offsets[prop] = this.OffsetsAll[prop][v + 1];
    },

    _getItemTranslation: function(itemId)
    {
        for (var i = 0; i < BOTW_Data.Translations.length; i++)
            if (BOTW_Data.Translations[i].items[itemId])
                return BOTW_Data.Translations[i].items[itemId];

        return itemId;
    },

    _getItemCategory: function(itemId)
    {
        for (var i = 0; i < BOTW_Data.Translations.length; i++)
            if (BOTW_Data.Translations[i].items[itemId])
                return BOTW_Data.Translations[i].id;

        return "other";
    },

    _readString: function(offset)
    {
        var txt = "";
        for (var j = 0; j < 16; j++)
        {
            txt += this.SaveFile.readString(offset, 4);
            offset += 8;
        }
        return txt;
    },

    _readStringShort: function(offset)
    {
        var txt = "";
        for (var j = 0; j < 8; j++)
        {
            txt += this.SaveFile.readString(offset, 4);
            offset += 8;
        }
        return txt;
    },

    _loadItemName: function(i)
    {
        return this._readString(this.Offsets.ITEMS + i * 0x80);
    },

    _writeItemName: function(i, newItemNameId)
    {
        this._writeString(this.Offsets.ITEMS + i * 0x80, newItemNameId);
    },

    _getItemMaximumQuantity: function(itemId)
    {
        var cat = this._getItemCategory(itemId);

        if (itemId.endsWith("Arrow") ||
            itemId.endsWith("Arrow_A") ||
            cat === "materials" ||
            cat === "food")
            return 999;

        else
        if (cat === "weapons" ||
            cat === "bows" ||
            cat === "shields")
            return 6553500;

        else
        if (itemId === "Obj_DungeonClearSeal")
            return 120;

        else
        if (itemId === "Obj_KorokNuts")
            return 900;

        else
        return 0xffffffff;
    },

    _getItemQuantityOffset: function(i)
    {
        return this.Offsets.ITEMS_QUANTITY + i * 0x08;
    },

    _getModifierOffset1: function(type)
    {
        if (type === "bows")
            return this.Offsets.FLAGS_BOW;

        else
        if (type === "shields")
            return this.Offsets.FLAGS_SHIELDS;

        else 
        return this.Offsets.FLAGS_WEAPON;
    },

    _getModifierOffset2: function(type)
    {
        if (type === "bows")
            return this.Offsets.FLAGSV_BOW;

        else
        if (type === "shields")
            return this.Offsets.FLAGSV_SHIELD;

        else
        return this.Offsets.FLAGSV_WEAPON;
    },

    editModifier2: function(type, i, modifier, val)
    {
        this.SaveFile.writeInt(this._getModifierOffset1(type) + i * 0x08, modifier);
        this.SaveFile.writeInt(this._getModifierOffset2(type) + i * 0x08, val);
    },

    _arrayToSelectOpts: function(arr)
    {
        var arr2 = [];
        for (var i = 0; i < arr.length; i++)
        {
            var name = BOTW_Data.Translations[6].items[arr[i]] || arr[i];
            arr2.push(
            {
                name: name,
                value: arr[i]
            });
        }
        return arr2;
    },

    _checkValidSavegameByConsole: function(switchMode)
    {
        var CONSOLE = switchMode ? "Switch" : "Wii U";

        this.SaveFile.littleEndian = switchMode;

        for (var i = 0; i < this.Constants.FILESIZE.length; i++)
        {
            var versionHash = this.SaveFile.readInt(0);

            if (versionHash === 0x2a46) //v1.3.0 switch?
                versionHash = 0x29c0;

            if (versionHash === 0x3ef9) //v1.3.3 switch?
                versionHash = 0x3ef8;

            var found = (
                this.SaveFile.fileSize      === this.Constants.FILESIZE[i] && 
                versionHash                 === this.Constants.HEADER[i] && 
                this.SaveFile.readInt(4)    === 0xffffffff
            );

            if (found)
            {
                this._getOffsets(i);
                this.setValue("version", this.Constants.VERSION[i] + " (" + CONSOLE + ")");
                return true;
            }
        }

        return false;
    },

    checkValidSavegame: function()
    {
        return (
        this._checkValidSavegameByConsole(false) || 
        this._checkValidSavegameByConsole(true));
    },

    _timeToString: function(timeVal)
    {
        var seconds = timeVal % 60;
        if (seconds < 10) seconds = "0" + seconds;
        var minutes = parseInt(timeVal / 60) % 60;
        if (minutes < 10) seconds = "0" + seconds;
        return parseInt(timeVal / 3600) + ":" + minutes + ":" + seconds;
    },

    load: function()
    {
        this.SaveFile.fileName = "game_data.sav";
        this.setValue("rupees",              this.SaveFile.readInt(this.Offsets.RUPEES));
        this.setValue("mons",                this.SaveFile.readInt(this.Offsets.MONS));
        this.setValue("max-hearts",          this.SaveFile.readInt(this.Offsets.MAX_HEARTS));
        this.setValue("max-stamina",         this.SaveFile.readInt(this.Offsets.MAX_STAMINA));
        this.setValue("relic-gerudo",        this.SaveFile.readInt(this.Offsets.RELIC_GERUDO));
        this.setValue("relic-goron",         this.SaveFile.readInt(this.Offsets.RELIC_GORON));
        this.setValue("relic-rito",          this.SaveFile.readInt(this.Offsets.RELIC_RITO));
        this.setValue("koroks",              this.SaveFile.readInt(this.Offsets.KOROK_SEED_COUNTER));
        this.setValue("defeated-hinox",      this.SaveFile.readInt(this.Offsets.DEFEATED_HINOX_COUNTER));
        this.setValue("defeated-talus",      this.SaveFile.readInt(this.Offsets.DEFEATED_TALUS_COUNTER));
        this.setValue("defeated-molduga",    this.SaveFile.readInt(this.Offsets.DEFEATED_MOLDUGA_COUNTER));
        this.setValue("playtime",            this._timeToString(this.SaveFile.readInt(this.Offsets.PLAYTIME)));
        this.setValue("motorcycle",          this.SaveFile.readInt(this.Offsets.MOTORCYCLE));
        this.setValue("pos-x",               this.SaveFile.readFloat32(this.Offsets.PLAYER_POSITION));
        this.setValue("pos-y",               this.SaveFile.readFloat32(this.Offsets.PLAYER_POSITION + 8));
        this.setValue("pos-z",               this.SaveFile.readFloat32(this.Offsets.PLAYER_POSITION + 16));

        var map     = this._readStringShort(this.Offsets.MAP);
        var mapType = this._readStringShort(this.Offsets.MAPTYPE);
        // getField("pos-map").children[0].value = map;
        // getField("pos-map").children[0].innerHTML = "* " + map + " *";
        // getField("pos-maptype").children[0].value = mapType;
        // getField("pos-maptype").children[0].innerHTML = "* " + mapType + " *";
        this.setValue("pos-map",             map)
        this.setValue("pos-maptype",         mapType)
        this.setValue("pos-x-horse",         this.SaveFile.readFloat32(this.Offsets.HORSE_POSITION));
        this.setValue("pos-y-horse",         this.SaveFile.readFloat32(this.Offsets.HORSE_POSITION + 8));
        this.setValue("pos-z-horse",         this.SaveFile.readFloat32(this.Offsets.HORSE_POSITION + 16));

        this.loadMapPins();

        for (var i = 0; i < this.Constants.MAX_ITEMS; i++)
        {
            var iid = this._loadItemName(i);
            if (iid === "")
                break;

            var icat = this._getItemCategory(iid);
            var inventory_item = {
                id: iid,
                category: icat,
                label: this._getItemTranslation(iid),
                quantity: this.SaveFile.readInt(this._getItemQuantityOffset(i)),
                modifier: this.SaveFile.readInt(this._getModifierOffset1(icat) + i * 8),
                modifier_val: this.SaveFile.readInt(this._getModifierOffset2(icat) + i * 8),
                modifier_desc: "",
                slot: i
            };

            for (var j in BOTW_Data.MODIFIERS)
            {
                var name = BOTW_Data.MODIFIERS[j].name;
                var value = BOTW_Data.MODIFIERS[j].value;

                if (value == inventory_item.modifier)
                    inventory_item.modifier_desc = name;
            }

            this.setNestedValue(
                "inventory",
                "slot" + i,
                inventory_item);
        }    
    },

    save: function()
    {
        this.SaveFile.writeInt(this.Offsets.RUPEES,                     this.getValue("rupees"));
        this.SaveFile.writeInt(this.Offsets.MONS,                       this.getValue("mons"));
        this.SaveFile.writeInt(this.Offsets.MAX_HEARTS,                 this.getValue("max-hearts"));
        this.SaveFile.writeInt(this.Offsets.MAX_STAMINA,                this.getValue("max-stamina"));
        this.SaveFile.writeInt(this.Offsets.RELIC_GERUDO,               this.getValue("relic-gerudo"));
        this.SaveFile.writeInt(this.Offsets.RELIC_GORON,                this.getValue("relic-goron"));
        this.SaveFile.writeInt(this.Offsets.RELIC_RITO,                 this.getValue("relic-rito"));
        this.SaveFile.writeInt(this.Offsets.KOROK_SEED_COUNTER,         this.getValue("koroks"));
        this.SaveFile.writeInt(this.Offsets.DEFEATED_HINOX_COUNTER,     this.getValue("defeated-hinox"));
        this.SaveFile.writeInt(this.Offsets.DEFEATED_TALUS_COUNTER,     this.getValue("defeated-talus"));
        this.SaveFile.writeInt(this.Offsets.DEFEATED_MOLDUGA_COUNTER,   this.getValue("defeated-molduga"));

        if (this.Offsets.MOTORCYCLE)
            this.SaveFile.writeInt(this.Offsets.MOTORCYCLE, this.getValue("motorcycle"));

        this.SaveFile.writeFloat32(this.Offsets.PLAYER_POSITION,        this.getValue("pos-x"));
        this.SaveFile.writeFloat32(this.Offsets.PLAYER_POSITION + 8,    this.getValue("pos-y"));
        this.SaveFile.writeFloat32(this.Offsets.PLAYER_POSITION + 16,   this.getValue("pos-z"));
        this._writeStringShort(this.Offsets.MAP,                        this.getValue("pos-map"))
        this._writeStringShort(this.Offsets.MAPTYPE,                    this.getValue("pos-maptype"))
        this.SaveFile.writeFloat32(this.Offsets.HORSE_POSITION,         this.getValue("pos-x-horse"));
        this.SaveFile.writeFloat32(this.Offsets.HORSE_POSITION + 8,     this.getValue("pos-y-horse"));
        this.SaveFile.writeFloat32(this.Offsets.HORSE_POSITION + 16,    this.getValue("pos-z-horse"));

        var inventory = getValue("inventory");

        for (var i in inventory)
        {
            var inventory_item = inventory[i];

            this.SaveFile.writeInt(this.Offsets.FLAGS_WEAPON + i * 8, this.getValue("modifier-weapons-" + i));
            this.SaveFile.writeInt(this.Offsets.FLAGSV_WEAPON + i * 8, this.getValue("modifier-weapons-value-" + i));
        }

        for (var i = 0; i < this.Constants.MAX_ITEMS; i++)
        {
            if (document.getElementById("number-item" + i) || document.getElementById("select-item" + i)) this.SaveFile.writeInt(this._getItemQuantityOffset(i), this.getValue("item" + i));
            else break;
        }
        /* modifiers */
        for (var i = 0; document.getElementById("select-modifier-weapons-" + i); i++)
        {
            this.SaveFile.writeInt(this.Offsets.FLAGS_WEAPON + i * 8, this.getValue("modifier-weapons-" + i));
            this.SaveFile.writeInt(this.Offsets.FLAGSV_WEAPON + i * 8, this.getValue("modifier-weapons-value-" + i));
        }
        for (var i = 0; document.getElementById("select-modifier-bows-" + i); i++)
        {
            this.SaveFile.writeInt(this.Offsets.FLAGS_BOW + i * 8, this.getValue("modifier-bows-" + i));
            this.SaveFile.writeInt(this.Offsets.FLAGSV_BOW + i * 8, this.getValue("modifier-bows-value-" + i));
        }
        for (var i = 0; document.getElementById("select-modifier-shields-" + i); i++)
        {
            this.SaveFile.writeInt(this.Offsets.FLAGS_SHIELD + i * 8, this.getValue("modifier-shields-" + i));
            this.SaveFile.writeInt(this.Offsets.FLAGSV_SHIELD + i * 8, this.getValue("modifier-shields-value-" + i));
        }
    },














    setBooleans: function(hashTable, counterElement)
    {
        var counter = 0;

        for (var i = 0; i < hashTable.length; i++)
        {
            var offset = SavegameEditor._searchHash(hashTable[i]);

            if (offset && !this.SaveFile.readInt(offset + 4))
            {
                this.SaveFile.writeInt(offset + 4, 1);
                counter++;
            }
        }

        if (counterElement) 
            this.setValue(
                counterElement,
                parseInt(this.getValue(counterElement)) + counter);

        return counter;
    },

    unlockKoroks: function()
    {
        var unlockedKoroks = setBooleans(BOTW_Data.KOROKS, "koroks");
        var offset = SavegameEditor._searchHash(0x64622a86);
        this.SaveFile.writeInt(offset + 4, 1);

        for (var i = 0; i < SavegameEditor.Constants.MAX_ITEMS; i++)
        {
            if (SavegameEditor._loadItemName(i) === "Obj_KorokNuts")
            {
                this.setValue("item" + i, parseInt(this.getValue("item" + i)) + unlockedKoroks);
                break;
            }
        }
    },

    defeatAllHinox: function()
    {
        setBooleans(
            BOTW_Data.DEFEATED_HINOX,
            "defeated-hinox");
    },

    defeatAllTalus: function()
    {
        setBooleans(
            BOTW_Data.DEFEATED_TALUS,
            "defeated-talus");
    },

    defeatAllMolduga: function()
    {
        setBooleans(
            BOTW_Data.DEFEATED_MOLDUGA,
            "defeated-molduga");
    },

    visitAllLocations: function()
    {
        setBooleans(BOTW_Data.LOCATIONS);
    },

    setCompendiumToStock: function()
    {
        var setToStock = 0;
        for (var i = 0; i < BOTW_Data.PICTURE_BOOK_SIZE.length; i++)
        {
            var offset = SavegameEditor._searchHash(BOTW_Data.PICTURE_BOOK_SIZE[i]);
            if (typeof offset === "number")
            {
                var val = this.SaveFile.readInt(offset + 4);
                if (val && val !== 0xffffffff)
                {
                    this.SaveFile.writeInt(offset + 4, 0xffffffff);
                    setToStock++;
                }
            }
        }
    },

    loadMapPins: function()
    {
        var mapPinCount = 0;
        var MAX_MAP_PINS = 100;

        var count = 0;
        this.iterateMapPins(function(val)
        {
            if (val == 0xffffffff)
                return false;

            count++;
            //console.log(count, val)
            return true;
        })
        // to debug saved locations
        // var i = 0;
        // iterateMapPinLocations(function(val, offset){
        //  if (i % 3 == 0){
        //      console.log("-----")
        //      if (val == -100000){
        //          return false;
        //      }
        //  }
        //  i++
        //  console.log(val)
        //  return true
        // })
        mapPinCount = count;
        this.setValue("number-map-pins", count);
    },

    guessMainFieldGrid: function()
    {
        if (this.getValue("pos-maptype") == "MainField")
            this.setValue(
                "pos-map",
                guessMainFieldGridInternal(
                    this.getValue("pos-x"),
                    this.getValue("pos-z")));
    },

    fixDungeonCoordinates: function()
    {
        var dungeon = this.getValue("pos-map");

        if (dungeon == "RemainsFire")
        {
            this.setValue("pos-x", 0);
            this.setValue("pos-y", 16.8);
            this.setValue("pos-z", 69.5);
        }

        else
        if (dungeon == "RemainsWater")
        {
            this.setValue("pos-x", 47.7);
            this.setValue("pos-y", 6.05);
            this.setValue("pos-z", 6.3);
        }

        else
        if (dungeon == "RemainsWind")
        {
            this.setValue("pos-x", 0);
            this.setValue("pos-y", 3.4);
            this.setValue("pos-z", -77.7);
        }

        else
        if (dungeon == "RemainsElectric")
        {
            this.setValue("pos-x", 0);
            this.setValue("pos-y", 71.9);
            this.setValue("pos-z", 3.7);
        }

        else
        if (dungeon == "FinalTrial")
        {
            this.setValue("pos-x", 0);
            this.setValue("pos-y", -0.4);
            this.setValue("pos-z", 64.5);
        }
    },

    guessMainFieldGridInternal: function(xpos, zpos)
    {
        // A1 = -4974.629, -3974.629
        // J8 =  4974.629,  3974.629
        // X and letter part of grid: west/east
        // Z and number part of grid: north/south
        // grid also visible at https://mrcheeze.github.io/botw-object-map/
        // idea: Take position fraction out of the whole grid and divide equally.
        var gridvalX = Math.min(10, Math.max(1, Math.trunc((xpos + 4974.629) / 9949.258 * 10 + 1)))
        var gridvalZ = Math.min(8, Math.max(1, Math.trunc((zpos + 3974.629) / 7949.258 * 8 + 1)))
        return String.fromCharCode(64 + gridvalX) + "-" + gridvalZ
    },

    clearMapPins: function()
    {
        var count = 0;

        this.iterateMapPins(function(val, offset)
        {
            if (val != 0xffffffff)
            {
                count++;
                this.SaveFile.writeInt(offset, 0xffffffff);
            }

            return true;
        });

        var count2 = 0;
        var i = 0;

        this.iterateMapPinLocations(function(val, offset)
        {
            var expect = i % 3 == 0 ? -100000 : 0;
            i++;
            if (val != expect)
            {
                count2++;
                this.SaveFile.writeFloat32(offset, expect);
            }
            return true;
        });

        if (count2 / 3 > count)
            count = count2 / 3;

        mapPinCount = 0;
        this.setValue("number-map-pins", 0);
    },

    iterateMapPins: function(f)
    {
        var offset = SavegameEditor._searchHash(SavegameEditor.Constants.MAP_ICONS);

        for (var i = 0;; i++)
        {
            var base = offset + (8 * i);
            var hdr = this.SaveFile.readInt(base);
            var val = this.SaveFile.readInt(base + 4);

            if (hdr != SavegameEditor.Constants.MAP_ICONS)
                break;

            if (!f(val, base + 4))
                break;
        }
    },

    iterateMapPinLocations: function(f)
    {
        offset = SavegameEditor._searchHash(SavegameEditor.Constants.MAP_POS);

        for (var i = 0;; i++)
        {
            var base = offset + (8 * i);
            var hdr = this.SaveFile.readInt(base);
            var val = this.SaveFile.readFloat32(base + 4);

            if (hdr != SavegameEditor.Constants.MAP_POS)
                break;

            if (!f(val, base + 4))
                break;
        }
    },

    dist: function(px, py, pz, l)
    {
        return (
        Math.sqrt(
            (Math.pow(l[0] - px, 2)) + 
            (Math.pow(l[2] - pz, 2))));
    },

    addToMap: function(data, icon)
    {
        var px = this.SaveFile.readFloat32(SavegameEditor.Offsets.PLAYER_POSITION);
        var py = this.SaveFile.readFloat32(SavegameEditor.Offsets.PLAYER_POSITION + 8);
        var pz = this.SaveFile.readFloat32(SavegameEditor.Offsets.PLAYER_POSITION + 16);
        var points = [];

        for (var i = 0; i < data.length; i++)
        {
            var l = BOTW_Data.COORDS[data[i]];
            if (l)
            {
                points.push(
                {
                    H: data[i],
                    L: l
                });
            }
        }

        points.sort(function(a, b)
        {
            aDist = dist(px, py, pz, a.L);
            bDist = dist(px, py, pz, b.L);
            return aDist - bDist;
        });

        var count = 0;
        for (var i = 0; i < points.length && mapPinCount < MAX_MAP_PINS; i++)
        {
            var pt = points[i];
            var hash = pt.H;
            var offset = SavegameEditor._searchHash(hash);
            if (offset && !this.SaveFile.readInt(offset + 4))
            {
                addMapPin(icon, pt.L);
                count++;
                mapPinCount++;
            }
        }

        this.setValue("number-map-pins", mapPinCount);
        return count;
    },

    addMapPin: function(icon, location)
    {
        this.iterateMapPins(function(val, offset)
        {
            if (val == 0xffffffff)
            {
                this.SaveFile.writeInt(offset, icon);
                return false;
            }
            return true;
        });

        var i = 0;
        var added = false;

        this.iterateMapPinLocations(function(val, offset)
        {
            if (i % 3 != 0)
            {
                i++;
                return true;
            }

            i++;

            if (val == -100000)
            {
                added = true;
                this.SaveFile.writeFloat32(offset, location[0]);
                this.SaveFile.writeFloat32(offset + 8, location[1]);
                this.SaveFile.writeFloat32(offset + 16, location[2]);
                return false;
            }

            return true;
        });
    },

    addKoroksToMap: function()
    {
        this.addToMap(
            BOTW_Data.KOROKS,
            SavegameEditor.Constants.ICON_TYPES.LEAF);
    },

    addHinoxToMap: function()
    {
        this.addToMap(
            BOTW_Data.DEFEATED_HINOX,
            SavegameEditor.Constants.ICON_TYPES.SKULL);
    },

    addTalusToMap: function()
    {
        this.addToMap(
            BOTW_Data.DEFEATED_TALUS,
            SavegameEditor.Constants.ICON_TYPES.SHIELD);
    },

    addMoldugaToMap: function()
    {
        this.addToMap(
            BOTW_Data.DEFEATED_MOLDUGA,
            SavegameEditor.Constants.ICON_TYPES.CHEST);
    },

    addLocationsToMap: function()
    {
        this.addToMap(
            BOTW_Data.LOCATIONS,
            SavegameEditor.Constants.ICON_TYPES.STAR);
    },

    chromeTest: function()
    {
        var finput = document.createElement("input");
        finput.type = "file";
        finput.style = "display: none;";
        finput.id = "finput";
        finput.addEventListener("change", function()
        {
            var file = finput.files[0];

            SavegameEditor.SaveFile = new MarcBinFile(
                file,
                function()
                {
                    SavegameEditor.checkValidSavegame();
                    SavegameEditor.load();
                }); 
        });

        document.body.append(finput);
        finput.click();
    }
}