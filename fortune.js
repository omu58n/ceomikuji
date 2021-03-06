const userNameInput = document.getElementById('user-name');
const fortuneButton = document.getElementById('fortune');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

function removeAllChildren(element) {
    while (element.firstChild) { 
        element.removeChild(element.firstChild);
    }
}

function fortune(area, userName, pushtime) {
    let sumOfcharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
    }
    sumOfcharCode += pushtime.getFullYear();
    sumOfcharCode += pushtime.getMonth() + 1;
    sumOfcharCode += pushtime.getDate();

    const result_index = sumOfcharCode % answers.length;
    let result = answers[result_index];
    const item_index = sumOfcharCode % item.length;
    let result_item = item[item_index];
    const color_index = sumOfcharCode % color_name.length;
    let result_color = color_name[color_index];

    result = result.replace(/{userName}/g, userName);
    result = result.replace(/{item}/g, result_item);
    result = result.replace(/{color}/g, result_color);
    area.style.color = color_code[color_index];
    return result;
}

userNameInput.onkeydown = (event) => {
    if (event.key === 'Enter') {
        assessmentButton.onclick();
    }
};

fortuneButton.onclick = () => {
    const userName = userNameInput.value;
    const time = new Date();
    if (userName.length === 0) { 
        return;
    }

    // 診断結果表示エリア
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = fortune(paragraph, userName, time);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    // ツイートエリア
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
        + encodeURIComponent('せおみくじ')
        + '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #せおみくじ';
    tweetDivided.appendChild(anchor);
    twttr.widgets.load();

};

const item = [
    'りんご', 'いす', '机', 'リップ', 'テレビ', 'パソコン', 'コアラ', '鉛筆', '雑巾', 'ペットボトル',
    'マンゴージュース', '本', 'ベッド', '掃除機', '冷蔵庫', '新幹線', '扇風機', '洗濯ばさみ', 'モップ',
    '漫画', '小説', '剃刀', '封筒', '定規', '洋服', 'フライパン', '味覇', '味噌', 'ノート', 'キーホルダー',
    'マウス', 'キーボード', '消しゴム', '空気清浄機', 'エアコン', '加湿器', '鉛筆削り', '電気ケトル', '石鹸',
    '指輪', 'イヤホン', 'バッグ', '財布', 'マフラー', '手袋'
];

const color_name = [
    "桜色さくらいろ",
    "小豆色あずきいろ",
    "黄金こがね",
    "萌葱色もえぎいろ",
    "古代紫こだいむらさき",
    "薄桜うすざくら",
    "枯茶からちゃ",
    "櫨染はじぞめ",
    "花緑青はなろくしょう",
    "茄子紺なすこん",
    "桜鼠さくらねず",
    "飴色あめいろ",
    "黄朽葉色きくちばいろ",
    "翡翠色ひすいいろ",
    "二藍ふたあい",
    "鴇鼠ときねず",
    "駱駝色らくだいろ",
    "山吹茶やまぶきちゃ",
    "青緑あおみどり",
    "京紫きょうむらさき",
    "虹色にじいろ",
    "珊瑚色さんごいろ",
    "黄唐茶きがらちゃ",
    "豆がら茶まめがらちゃ",
    "錆浅葱さびあさぎ",
    "若紫わかむらさき",
    "一斤染いっこんぞめ",
    "桑染くわぞめ",
    "麹塵きくじん",
    "青碧せいへき",
    "紅紫べにむらさき",
    "宍色ししいろ",
    "櫨色はじいろ",
    "山鳩色やまばといろ",
    "御召茶おめしちゃ",
    "梅紫うめむらさき",
    "紅梅色こうばいいろ",
    "黄橡きつるばみ",
    "利休鼠りきゅうねずみ",
    "湊鼠みなとねずみ",
    "菖蒲色あやめいろ",
    "薄紅うすべに",
    "丁字染ちょうじぞめ",
    "海松茶みるちゃ",
    "高麗納戸こうらいなんど",
    "紅藤色べにふじいろ",
    "甚三紅じんざもみ",
    "香染こうぞめ",
    "藍海松茶あいみるちゃ",
    "百入茶ももしおちゃ",
    "浅紫あさむらさき",
    "桃色ももいろ",
    "枇杷茶びわちゃ",
    "藍媚茶あいこびちゃ",
    "錆鼠さびねず",
    "紫水晶むらさきすいしょう",
    "鴇色ときいろ",
    "芝翫茶しかんちゃ",
    "千歳茶せんさいちゃ",
    "錆鉄御納戸さびてつおなんど",
    "薄梅鼠うすうめねず",
    "撫子色なでしこいろ",
    "焦香こがれこう",
    "岩井茶いわいちゃ",
    "藍鼠あいねず",
    "暁鼠あかつきねず",
    "灰梅はいうめ",
    "胡桃色くるみいろ",
    "仙斎茶せんさいちゃ",
    "錆御納戸さびおなんど",
    "牡丹鼠ぼたんねず",
    "灰桜はいざくら",
    "渋紙色しぶかみいろ",
    "黒緑くろみどり",
    "舛花色ますはないろ",
    "霞色かすみいろ",
    "淡紅藤あわべにふじ",
    "朽葉色くちばいろ",
    "柳煤竹やなぎすすたけ",
    "熨斗目花色のしめはないろ",
    "藤鼠ふじねず",
    "石竹色せきちくいろ",
    "桑茶くわちゃ",
    "樺茶色かばちゃいろ",
    "御召御納戸おめしおなんど",
    "半色はしたいろ",
    "薄紅梅うすこうばい",
    "路考茶ろこうちゃ",
    "空五倍子色うつぶしいろ",
    "鉄御納戸てつおなんど",
    "薄色うすいろ",
    "桃花色ももはないろ",
    "国防色こくぼうしょく",
    "生壁色なまかべいろ",
    "紺鼠こんねず",
    "薄鼠うすねず",
    "水柿みずがき",
    "伽羅色きゃらいろ",
    "肥後煤竹ひごすすたけ",
    "藍鉄あいてつ",
    "鳩羽鼠はとばねずみ",
    "ときがら茶ときがらちゃ",
    "江戸茶えどちゃ",
    "媚茶こびちゃ",
    "青褐あおかち",
    "鳩羽色はとばいろ",
    "退紅あらぞめ",
    "樺色かばいろ",
    "白橡しろつるばみ",
    "褐返かちかえし",
    "桔梗鼠ききょうねず",
    "薄柿うすがき",
    "紅鬱金べにうこん",
    "亜麻色あまいろ",
    "褐色かちいろ",
    "紫鼠むらさきねず",
    "長春色ちょうしゅんいろ",
    "土器色かわらけいろ",
    "榛色はしばみいろ",
    "月白げっぱく",
    "葡萄鼠ぶどうねずみ",
    "梅鼠うめねず",
    "狐色きつねいろ",
    "灰汁色あくいろ",
    "白菫色しろすみれいろ",
    "濃色こきいろ",
    "鴇浅葱ときあさぎ",
    "黄土色おうどいろ",
    "利休茶りきゅうちゃ",
    "白花色しらはないろ",
    "紫鳶むらさきとび",
    "梅染うめぞめ",
    "琥珀色こはくいろ",
    "鶯茶うぐいすちゃ",
    "藍白あいじろ",
    "濃鼠こいねず",
    "蘇芳香すおうこう",
    "赤茶あかちゃ",
    "木蘭色もくらんじき",
    "白藍しらあい",
    "藤煤竹ふじすすたけ",
    "浅蘇芳あさすおう",
    "代赭たいしゃ",
    "砂色すないろ",
    "水色みずいろ",
    "滅紫けしむらさき",
    "真朱まそお",
    "煉瓦色れんがいろ",
    "油色あぶらいろ",
    "瓶覗かめのぞき",
    "紅消鼠べにけしねずみ",
    "赤紫あかむらさき",
    "雀茶すずめちゃ",
    "利休色りきゅういろ",
    "秘色色ひそくいろ",
    "似せ紫にせむらさき",
    "躑躅色つつじいろ",
    "団十郎茶だんじゅうろうちゃ",
    "梅幸茶ばいこうちゃ",
    "空色そらいろ",
    "灰黄緑はいきみどり",
    "牡丹色ぼたんいろ",
    "柿渋色かきしぶいろ",
    "璃寛茶りかんちゃ",
    "勿忘草色わすれなぐさいろ",
    "蕎麦切色そばきりいろ",
    "今様色いまよういろ",
    "紅鳶べにとび",
    "黄海松茶きみるちゃ",
    "青藤色あおふじいろ",
    "薄雲鼠うすくもねず",
    "中紅なかべに",
    "灰茶はいちゃ",
    "菜種油色なたねゆいろ",
    "白群びゃくぐん",
    "枯野色かれのいろ",
    "薔薇色ばらいろ",
    "茶色ちゃいろ",
    "青朽葉あおくちば",
    "浅縹あさはなだ",
    "潤色うるみいろ",
    "韓紅からくれない",
    "檜皮色ひわだいろ",
    "根岸色ねぎしいろ",
    "薄花色うすはないろ",
    "利休白茶りきゅうしろちゃ",
    "銀朱ぎんしゅ",
    "鳶色とびいろ",
    "鶸茶ひわちゃ",
    "納戸色なんどいろ",
    "茶鼠ちゃねずみ",
    "赤紅あかべに",
    "柿茶かきちゃ",
    "柳茶やなぎちゃ",
    "浅葱色あさぎいろ",
    "胡桃染くるみぞめ",
    "紅緋べにひ",
    "弁柄色べんがらいろ",
    "海松色みるいろ",
    "花浅葱はなあさぎ",
    "江戸鼠えどねず",
    "赤あか",
    "赤錆色あかさびいろ",
    "鶯色うぐいすいろ",
    "新橋色しんばしいろ",
    "煤色すすいろ",
    "猩々緋しょうじょうひ",
    "褐色かっしょく",
    "緑黄色りょくおうしょく",
    "天色あまいろ",
    "丁子茶ちょうじちゃ",
    "紅くれない",
    "栗梅くりうめ",
    "鶸色ひわいろ",
    "露草色つゆくさいろ",
    "柴染ふしぞめ",
    "深緋こきひ",
    "紅檜皮べにひはだ",
    "抹茶色まっちゃいろ",
    "青あお",
    "宗伝唐茶そうでんからちゃ",
    "緋色ひいろ",
    "海老茶えびちゃ",
    "若草色わかくさいろ",
    "薄藍うすあい",
    "砺茶とのちゃ",
    "赤丹あかに",
    "唐茶からちゃ",
    "黄緑きみどり",
    "縹色はなだいろ",
    "煎茶色せんちゃいろ",
    "紅赤べにあか",
    "栗色くりいろ",
    "若芽色わかめいろ",
    "紺碧こんぺき",
    "銀煤竹ぎんすすだけ",
    "臙脂えんじ",
    "赤銅色しゃくどういろ",
    "若菜色わかないろ",
    "薄群青うすぐんじょう",
    "黄枯茶きがらちゃ",
    "朱・緋あけ",
    "錆色さびいろ",
    "若苗色わかなえいろ",
    "薄花桜うすはなざくら",
    "煤竹色すすたけいろ",
    "茜色あかねいろ",
    "赤褐色せっかっしょく",
    "青丹あおに",
    "群青色ぐんじょういろ",
    "焦茶こげちゃ",
    "紅海老茶べにえびちゃ",
    "茶褐色ちゃかっしょく",
    "草色くさいろ",
    "杜若色かきつばたいろ",
    "黒橡くろつるばみ",
    "蘇芳すおう",
    "栗皮茶くりかわちゃ",
    "苔色こけいろ",
    "瑠璃色るりいろ",
    "憲法色けんぽういろ",
    "真紅しんく",
    "黒茶くろちゃ",
    "萌黄もえぎ",
    "薄縹うすはなだ",
    "涅色くりいろ",
    "濃紅こいくれない",
    "葡萄茶えびちゃ",
    "苗色なえいろ",
    "瑠璃紺るりこん",
    "檳榔子染びんろうじぞめ",
    "象牙色ぞうげいろ",
    "葡萄色えびいろ",
    "若葉色わかばいろ",
    "紺瑠璃こんるり",
    "黒鳶くろとび",
    "練色ねりいろ",
    "萱草色かんぞういろ",
    "松葉色まつばいろ",
    "藍色あいいろ",
    "赤墨あかすみ",
    "灰白色かいはくしょく",
    "柑子色こうじいろ",
    "夏虫色なつむしいろ",
    "青藍せいらん",
    "黒紅くろべに",
    "蒸栗色むしぐりいろ",
    "金茶きんちゃ",
    "鶸萌黄ひわもえぎ",
    "深縹こきはなだ",
    "白しろ",
    "女郎花おみなえし",
    "蜜柑色みかんいろ",
    "柳色やなぎいろ",
    "紺色こんいろ",
    "胡粉色ごふんいろ",
    "枯草色かれくさいろ",
    "鉛丹色えんたんいろ",
    "青白橡あおしろつるばみ",
    "紺青こんじょう",
    "卯の花色うのはないろ",
    "淡黄たんこう",
    "黄丹おうに",
    "柳鼠やなぎねず",
    "留紺とめこん",
    "白磁はくじ",
    "白茶しらちゃ",
    "柿色かきいろ",
    "裏葉柳うらはやなぎ",
    "濃藍こいあい",
    "生成り色きなりいろ",
    "赤白橡あかしろつるばみ",
    "黄赤きあか",
    "山葵色わさびいろ",
    "鉄紺てつこん",
    "乳白色にゅうはくしょく",
    "洗柿あらいがき",
    "人参色にんじんいろ",
    "老竹色おいたけいろ",
    "漆黒しっこく",
    "白練しろねり",
    "鳥の子色とりのこいろ",
    "橙色だいだいいろ",
    "白緑びゃくろく",
    "淡藤色あわふじいろ",
    "素色そしょく",
    "蜂蜜色はちみついろ",
    "照柿てりがき",
    "淡萌黄うすもえぎ",
    "藤色ふじいろ",
    "白梅鼠しらうめねず",
    "肌色はだいろ",
    "赤橙あかだいだい",
    "柳染やなぎぞめ",
    "紅掛空色べにかけそらいろ",
    "白鼠しろねず",
    "薄卵色うすたまごいろ",
    "金赤きんあか",
    "薄萌葱うすもえぎ",
    "紅碧べにみどり",
    "絹鼠きぬねず",
    "雄黄ゆうおう",
    "朱色しゅいろ",
    "深川鼠ふかがわねずみ",
    "紺桔梗こんききょう",
    "灰青はいあお",
    "洒落柿しゃれがき",
    "小麦色こむぎいろ",
    "若緑わかみどり",
    "花色はないろ",
    "銀鼠ぎんねず",
    "赤香あかこう",
    "丹色にいろ",
    "浅緑あさみどり",
    "紺藍こんあい",
    "薄鈍うすにび",
    "砥粉色とのこいろ",
    "黄茶きちゃ",
    "薄緑うすみどり",
    "紅桔梗べにききょう",
    "薄墨色うすずみいろ",
    "肉色にくいろ",
    "肉桂色にっけいいろ",
    "青鈍あおにび",
    "桔梗色ききょういろ",
    "錫色すずいろ",
    "人色ひといろ",
    "赤朽葉色あかくちばいろ",
    "青磁鼠せいじねず",
    "藤納戸ふじなんど",
    "素鼠すねずみ",
    "丁子色ちょうじいろ",
    "黄櫨染こうろぜん",
    "薄青うすあお",
    "紅掛花色べにかけはないろ",
    "鼠色ねずみいろ",
    "香色こういろ",
    "蒲公英色たんぽぽいろ",
    "錆青磁さびせいじ",
    "紫苑色しおんいろ",
    "源氏鼠げんじねず",
    "薄香うすこう",
    "黄色きいろ",
    "緑青色ろくしょういろ",
    "白藤色しらふじいろ",
    "灰色はいいろ",
    "浅黄うすき",
    "中黄ちゅうき",
    "千歳緑ちとせみどり",
    "藤紫ふじむらさき",
    "鉛色なまりいろ",
    "枯色かれいろ",
    "菜の花色なのはないろ",
    "若竹色わかたけいろ",
    "菫色すみれいろ",
    "鈍色にびいろ",
    "淡香うすこう",
    "黄檗色きはだいろ",
    "緑みどり",
    "青紫あおむらさき",
    "墨すみ",
    "杏色あんずいろ",
    "卵色たまごいろ",
    "常磐色ときわいろ",
    "菖蒲色しょうぶいろ",
    "丼鼠どぶねずみ",
    "東雲色しののめいろ",
    "花葉色はなばいろ",
    "千草鼠ちぐさねず",
    "竜胆色りんどういろ",
    "消炭色けしずみいろ",
    "曙色あけぼのいろ",
    "刈安色かりやすいろ",
    "千草色ちぐさいろ",
    "江戸紫えどむらさき",
    "藍墨茶あいすみちゃ",
    "珊瑚朱色さんごしゅいろ",
    "玉蜀黍色とうもろこしいろ",
    "青磁色せいじいろ",
    "本紫ほんむらさき",
    "羊羹色ようかんいろ",
    "深支子こきくちなし",
    "金糸雀色かなりあいろ",
    "青竹色あおたけいろ",
    "葡萄色ぶどういろ",
    "蝋色ろういろ",
    "纁そひ",
    "黄支子色きくちなしいろ",
    "常磐緑ときわみどり",
    "深紫ふかむらさき",
    "黒くろ",
    "浅緋うすきひ",
    "支子色くちなしいろ",
    "木賊色とくさいろ",
    "紫黒しこく",
    "烏羽色からすばいろ",
    "真赭まそほ",
    "向日葵色ひまわりいろ",
    "天鵞絨びろうど",
    "紫むらさき",
    "鉄黒てつぐろ",
    "洗朱あらいしゅ",
    "山吹色やまぶきいろ",
    "虫襖むしあお",
    "薄葡萄うすぶどう",
    "濡羽色ぬればいろ",
    "遠州茶えんしゅうちゃ",
    "鬱金色うこんいろ",
    "革色かわいろ",
    "紫紺しこん",
    "黒檀こくたん",
    "紅樺色べにかばいろ",
    "藤黄とうおう",
    "深緑ふかみどり",
    "暗紅色あんこうしょく",
    "憲法黒茶けんぽうくろちゃ",
    "赭そほ",
    "金色こんじき",
    "鉄色てついろ",
    "桑の実色くわのみいろ",
    "暗黒色あんこくしょく",
];
const color_code = [
    "#fef4f4",
    "#96514d",
    "#e6b422",
    "#006e54",
    "#895b8a",
    "#fdeff2",
    "#8d6449",
    "#d9a62e",
    "#00a381",
    "#824880",
    "#e9dfe5",
    "#deb068",
    "#d3a243",
    "#38b48b",
    "#915c8b",
    "#e4d2d8",
    "#bf794e",
    "#c89932",
    "#00a497",
    "#9d5b8b",
    "#f6bfbc",
    "#f5b1aa",
    "#b98c46",
    "#8b968d",
    "#5c9291",
    "#bc64a4",
    "#f5b199",
    "#b79b5b",
    "#6e7955",
    "#478384",
    "#b44c97",
    "#efab93",
    "#b77b57",
    "#767c6b",
    "#43676b",
    "#aa4c8f",
    "#f2a0a1",
    "#b68d4c",
    "#888e7e",
    "#80989b",
    "#cc7eb1",
    "#f0908d",
    "#ad7d4c",
    "#5a544b",
    "#2c4f54",
    "#cca6bf",
    "#ee827c",
    "#ad7d4c",
    "#56564b",
    "#1f3134",
    "#c4a3bf",
    "#f09199",
    "#ae7c4f",
    "#555647",
    "#47585c",
    "#e7e7eb",
    "#f4b3c2",
    "#ad7e4e",
    "#494a41",
    "#485859",
    "#dcd6d9",
    "#eebbcb",
    "#ae7c58",
    "#6b6f59",
    "#6c848d",
    "#d3cfd9",
    "#e8d3c7",
    "#a86f4c",
    "#474b42",
    "#53727d",
    "#d3ccd6",
    "#e8d3d1",
    "#946243",
    "#333631",
    "#5b7e91",
    "#c8c2c6",
    "#e6cde3",
    "#917347",
    "#5b6356",
    "#426579",
    "#a6a5c4",
    "#e5abbe",
    "#956f29",
    "#726250",
    "#4c6473",
    "#a69abd",
    "#e597b2",
    "#8c7042",
    "#9d896c",
    "#455765",
    "#a89dac",
    "#e198b4",
    "#7b6c3e",
    "#94846a",
    "#44617b",
    "#9790a4",
    "#e4ab9b",
    "#d8a373",
    "#897858",
    "#393f4c",
    "#9e8b8e",
    "#e09e87",
    "#cd8c5c",
    "#716246",
    "#393e4f",
    "#95859c",
    "#d69090",
    "#cd5e3c",
    "#cbb994",
    "#203744",
    "#95949a",
    "#d4acad",
    "#cb8347",
    "#d6c6af",
    "#4d4c61",
    "#71686c",
    "#c97586",
    "#c37854",
    "#bfa46f",
    "#eaf4fc",
    "#705b67",
    "#c099a0",
    "#c38743",
    "#9e9478",
    "#eaedf7",
    "#634950",
    "#b88884",
    "#c39143",
    "#a59564",
    "#e8ecef",
    "#5f414b",
    "#b48a76",
    "#bf783a",
    "#715c1f",
    "#ebf6f7",
    "#4f455c",
    "#a86965",
    "#bb5535",
    "#c7b370",
    "#c1e4e9",
    "#5a5359",
    "#a25768",
    "#bb5520",
    "#dcd3b2",
    "#bce2e8",
    "#594255",
    "#ec6d71",
    "#b55233",
    "#a19361",
    "#a2d7dd",
    "#524748",
    "#eb6ea5",
    "#aa4f37",
    "#8f8667",
    "#abced8",
    "#513743",
    "#e95295",
    "#9f563a",
    "#887938",
    "#a0d8ef",
    "#e6eae3",
    "#e7609e",
    "#9f563a",
    "#6a5d21",
    "#89c3eb",
    "#d4dcd6",
    "#d0576b",
    "#9a493f",
    "#918754",
    "#84a2d4",
    "#d4dcda",
    "#c85179",
    "#98623c",
    "#a69425",
    "#83ccd2",
    "#d3cbc6",
    "#e9546b",
    "#965042",
    "#ada250",
    "#84b9cb",
    "#c8c2be",
    "#e95464",
    "#965036",
    "#938b4b",
    "#698aab",
    "#b3ada0",
    "#c85554",
    "#95483f",
    "#8c8861",
    "#008899",
    "#a99e93",
    "#c53d43",
    "#954e2a",
    "#a1a46d",
    "#00a3af",
    "#a58f86",
    "#e83929",
    "#8f2e14",
    "#726d40",
    "#2a83a2",
    "#928178",
    "#e60033",
    "#8a3319",
    "#928c36",
    "#59b9c6",
    "#887f7a",
    "#e2041b",
    "#8a3b00",
    "#dccb18",
    "#2ca9e1",
    "#b4866b",
    "#d7003a",
    "#852e19",
    "#d7cf3a",
    "#38a1db",
    "#b28c6e",
    "#c9171e",
    "#7b4741",
    "#c5c56a",
    "#0095d9",
    "#a16d5d",
    "#d3381c",
    "#773c30",
    "#c3d825",
    "#0094c8",
    "#9f6f55",
    "#ce5242",
    "#783c1d",
    "#b8d200",
    "#2792c3",
    "#8c6450",
    "#d9333f",
    "#762f07",
    "#e0ebaf",
    "#007bbb",
    "#856859",
    "#b94047",
    "#752100",
    "#d8e698",
    "#5383c3",
    "#765c47",
    "#ba2636",
    "#6c3524",
    "#c7dc68",
    "#5a79ba",
    "#6f514c",
    "#b7282e",
    "#683f36",
    "#99ab4e",
    "#4c6cb3",
    "#6f4b3e",
    "#a73836",
    "#664032",
    "#7b8d42",
    "#3e62ad",
    "#544a47",
    "#9e3d3f",
    "#6d3c32",
    "#69821b",
    "#1e50a2",
    "#543f32",
    "#a22041",
    "#583822",
    "#aacf53",
    "#507ea4",
    "#554738",
    "#a22041",
    "#6c2c2f",
    "#b0ca71",
    "#19448e",
    "#433d3c",
    "#f8f4e6",
    "#640125",
    "#b9d08b",
    "#164a84",
    "#432f2f",
    "#ede4cd",
    "#f8b862",
    "#839b5c",
    "#165e83",
    "#3f312b",
    "#e9e4d4",
    "#f6ad49",
    "#cee4ae",
    "#274a78",
    "#302833",
    "#ebe1a9",
    "#f39800",
    "#82ae46",
    "#2a4073",
    "#ffffff",
    "#f2f2b0",
    "#f08300",
    "#a8c97f",
    "#223a70",
    "#fffffc",
    "#e4dc8a",
    "#ec6d51",
    "#9ba88d",
    "#192f60",
    "#f7fcfe",
    "#f8e58c",
    "#ee7948",
    "#c8d5bb",
    "#1c305c",
    "#f8fbf8",
    "#ddbb99",
    "#ed6d3d",
    "#c1d8ac",
    "#0f2350",
    "#fbfaf5",
    "#d7a98c",
    "#ec6800",
    "#a8bf93",
    "#17184b",
    "#f3f3f3",
    "#f2c9ac",
    "#ec6800",
    "#769164",
    "#0d0015",
    "#f3f3f2",
    "#fff1cf",
    "#ee7800",
    "#d6e9ca",
    "#bbc8e6",
    "#eae5e3",
    "#fddea5",
    "#eb6238",
    "#93ca76",
    "#bbbcde",
    "#e5e4e6",
    "#fce2c4",
    "#ea5506",
    "#93b881",
    "#8491c3",
    "#dcdddd",
    "#fde8d0",
    "#ea5506",
    "#badcad",
    "#8491c3",
    "#dddcd6",
    "#f9c89b",
    "#eb6101",
    "#97a791",
    "#4d5aaf",
    "#c0c6c9",
    "#f7bd8f",
    "#e49e61",
    "#98d98e",
    "#4d5aaf",
    "#afafb0",
    "#f6b894",
    "#e45e32",
    "#88cb7f",
    "#4a488e",
    "#adadad",
    "#f4dda5",
    "#e17b34",
    "#69b076",
    "#4d4398",
    "#a3a3a2",
    "#f1bf99",
    "#dd7a56",
    "#6b7b6e",
    "#5654a2",
    "#9ea1a3",
    "#f1bf99",
    "#db8449",
    "#bed2c3",
    "#706caa",
    "#9fa0a0",
    "#efcd9a",
    "#d66a35",
    "#93b69c",
    "#68699b",
    "#949495",
    "#efcd9a",
    "#ffd900",
    "#a6c8b2",
    "#867ba9",
    "#888084",
    "#f0cfa0",
    "#ffd900",
    "#47885e",
    "#dbd0e6",
    "#7d7d7d",
    "#edd3a1",
    "#ffea00",
    "#316745",
    "#a59aca",
    "#7b7c7d",
    "#e0c38c",
    "#ffec47",
    "#68be8d",
    "#7058a3",
    "#727171",
    "#f3bf88",
    "#fef263",
    "#3eb370",
    "#674598",
    "#595857",
    "#f7b977",
    "#fcd575",
    "#007b43",
    "#674196",
    "#595455",
    "#f19072",
    "#fbd26b",
    "#bed3ca",
    "#9079ad",
    "#524e4d",
    "#f19072",
    "#f5e56b",
    "#92b5a9",
    "#745399",
    "#474a4d",
    "#ee836f",
    "#eec362",
    "#7ebea5",
    "#65318e",
    "#383c3c",
    "#eb9b6f",
    "#ebd842",
    "#7ebeab",
    "#522f60",
    "#2b2b2b",
    "#e0815e",
    "#ffdb4f",
    "#028760",
    "#493759",
    "#2b2b2b",
    "#df7163",
    "#fbca4d",
    "#3b7960",
    "#2e2930",
    "#180614",
    "#d57c6b",
    "#fcc800",
    "#2f5d50",
    "#884898",
    "#281a14",
    "#d0826c",
    "#f8b500",
    "#3a5b52",
    "#c0a2c7",
    "#000b00",
    "#ca8269",
    "#fabf14",
    "#475950",
    "#460e44",
    "#250d00",
    "#bb5548",
    "#f7c114",
    "#00552e",
    "#74325c",
    "#241a08",
    "#ab6953",
    "#e6b422",
    "#005243",
    "#55295b",
    "#16160e",
];
const answers = [
    '今日の{userName}は輝いています！ラッキーアイテムは{item}、ラッキーカラーは{color}です！',
    '今日の{userName}はいい感じです！ラッキーアイテムは{item}、ラッキーカラーは{color}です！',
    '今日の{userName}は普通です。ラッキーアイテムは{item}、ラッキーカラーは{color}です！',
    '今日の{userName}はまあまあです。ラッキーアイテムは{item}、ラッキーカラーは{color}です！',
    '今日の{userName}はくもりがちです、、ラッキーアイテムは{item}、ラッキーカラーは{color}です！',
    '今日の{userName}はちょっとダメです、、ラッキーアイテムは{item}、ラッキーカラーは{color}です！',
];
