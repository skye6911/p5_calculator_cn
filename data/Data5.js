var rarePersonae = ["Regent", "Queen's Necklace", "Stone of Scone", "Koh-i-Noor", "Orlov", "Emperor's Amulet", "Hope Diamond", "水晶骷髏"];
var rareCombos = {
    "愚者": [-1, +1, -1, +1, -1, -1, +1, +2],
    "魔術師": [+1, -1, +2, -1, +1, +1, +1, +1],
    "女教皇": [-1, +1, -1, +2, +1, -1, +1, +1],
    "女皇": [-1, +2, -1, +1, +1, +1, -1, +1],
    "Emperor": [+2, -1, +1, -1, -1, +1, +1, -1],
    "Hierophant": [+1, -1, +1, -2, +1, -1, -1, -1],
    "Lovers": [-1, +1, -1, +1, -1, -1, -2, +1],
    "戰車": [+1, -1, +1, -1, +1, -2, -1, -1],
    "正義": [+1, -1, -1, +2, +1, +1, -1, +1],
    "Hermit": [+2, -1, -1, +1, +1, +1, +1, -2],
    "Fortune": [+1, -1, +2, -1, -2, -1, +1, -1],
    "Strength": [-1, +1, -2, +1, +1, +1, -1, -1],
    "Hanged Man": [+1, +1, -1, -1, +1, +2, -1, -1],
    "Death": [+1, -1, +1, +1, -1, -1, +2, +1],
    "Temperance": [-1, +1, -1, -1, +1, +1, -1, +2],
    "Devil": [-2, +1, -1, +1, +1, +2, -1, -1],
    "Tower": [-1, -2, +1, +1, +1, +1, -1, -1],
    "Star": [+1, -1, +1, -1, +1, -1, +1, +1],
    "Moon": [-1, +2, +1, -1, +1, -1, -1, -1],
    "Sun": [+1, -1, -1, +1, +1, -1, +2, +1],
    "審判": [-1, -1, +1, -1, +1, +1, -1, -1]
};
var arcana2Combos = [
    { 'source': ['愚者', '愚者'], 'result': '愚者' },
    { 'source': ['愚者', '魔術師'], 'result': 'Death' },
    { 'source': ['愚者', '女教皇'], 'result': 'Moon' },
    { 'source': ['愚者', '女皇'], 'result': 'Hanged Man' },
    { 'source': ['愚者', 'Emperor'], 'result': 'Temperance' },
    { 'source': ['愚者', 'Hierophant'], 'result': 'Hermit' },
    { 'source': ['愚者', 'Lovers'], 'result': '戰車' },
    { 'source': ['愚者', '戰車'], 'result': 'Moon' },
    { 'source': ['愚者', '正義'], 'result': 'Star' },
    { 'source': ['愚者', 'Hermit'], 'result': '女教皇' },
    { 'source': ['愚者', 'Fortune'], 'result': 'Lovers' },
    { 'source': ['愚者', 'Strength'], 'result': 'Death' },
    { 'source': ['愚者', 'Hanged Man'], 'result': 'Tower' },
    { 'source': ['愚者', 'Death'], 'result': 'Strength' },
    { 'source': ['愚者', 'Temperance'], 'result': 'Hierophant' },
    { 'source': ['愚者', 'Devil'], 'result': 'Temperance' },
    { 'source': ['愚者', 'Tower'], 'result': '女皇' },
    { 'source': ['愚者', 'Star'], 'result': '魔術師' },
    { 'source': ['愚者', 'Moon'], 'result': '正義' },
    { 'source': ['愚者', 'Sun'], 'result': '正義' },
    { 'source': ['愚者', '審判'], 'result': 'Sun' },
    { 'source': ['魔術師', '魔術師'], 'result': '魔術師' },
    { 'source': ['魔術師', '女教皇'], 'result': 'Temperance' },
    { 'source': ['魔術師', '女皇'], 'result': '正義' },
    { 'source': ['魔術師', 'Emperor'], 'result': 'Hanged Man' },
    { 'source': ['魔術師', 'Hierophant'], 'result': 'Death' },
    { 'source': ['魔術師', 'Lovers'], 'result': 'Devil' },
    { 'source': ['魔術師', '戰車'], 'result': '女教皇' },
    { 'source': ['魔術師', '正義'], 'result': 'Emperor' },
    { 'source': ['魔術師', 'Hermit'], 'result': 'Lovers' },
    { 'source': ['魔術師', 'Fortune'], 'result': '正義' },
    { 'source': ['魔術師', 'Strength'], 'result': '愚者' },
    { 'source': ['魔術師', 'Hanged Man'], 'result': '女皇' },
    { 'source': ['魔術師', 'Death'], 'result': 'Hermit' },
    { 'source': ['魔術師', 'Temperance'], 'result': '戰車' },
    { 'source': ['魔術師', 'Devil'], 'result': 'Hierophant' },
    { 'source': ['魔術師', 'Tower'], 'result': 'Temperance' },
    { 'source': ['魔術師', 'Star'], 'result': '女教皇' },
    { 'source': ['魔術師', 'Moon'], 'result': 'Lovers' },
    { 'source': ['魔術師', 'Sun'], 'result': 'Hierophant' },
    { 'source': ['魔術師', '審判'], 'result': 'Strength' },
    { 'source': ['女教皇', '女教皇'], 'result': '女教皇' },
    { 'source': ['女教皇', '女皇'], 'result': 'Emperor' },
    { 'source': ['女教皇', 'Emperor'], 'result': '女皇' },
    { 'source': ['女教皇', 'Hierophant'], 'result': '魔術師' },
    { 'source': ['女教皇', 'Lovers'], 'result': 'Fortune' },
    { 'source': ['女教皇', '戰車'], 'result': 'Hierophant' },
    { 'source': ['女教皇', '正義'], 'result': 'Death' },
    { 'source': ['女教皇', 'Hermit'], 'result': 'Temperance' },
    { 'source': ['女教皇', 'Fortune'], 'result': '魔術師' },
    { 'source': ['女教皇', 'Strength'], 'result': 'Devil' },
    { 'source': ['女教皇', 'Hanged Man'], 'result': 'Death' },
    { 'source': ['女教皇', 'Death'], 'result': '魔術師' },
    { 'source': ['女教皇', 'Temperance'], 'result': 'Devil' },
    { 'source': ['女教皇', 'Devil'], 'result': 'Moon' },
    { 'source': ['女教皇', 'Tower'], 'result': 'Hanged Man' },
    { 'source': ['女教皇', 'Star'], 'result': 'Hermit' },
    { 'source': ['女教皇', 'Moon'], 'result': 'Hierophant' },
    { 'source': ['女教皇', 'Sun'], 'result': '戰車' },
    { 'source': ['女教皇', '審判'], 'result': '正義' },
    { 'source': ['女皇', '女皇'], 'result': '女皇' },
    { 'source': ['女皇', 'Emperor'], 'result': '正義' },
    { 'source': ['女皇', 'Hierophant'], 'result': '愚者' },
    { 'source': ['女皇', 'Lovers'], 'result': '審判' },
    { 'source': ['女皇', '戰車'], 'result': 'Star' },
    { 'source': ['女皇', '正義'], 'result': 'Lovers' },
    { 'source': ['女皇', 'Hermit'], 'result': 'Strength' },
    { 'source': ['女皇', 'Fortune'], 'result': 'Hermit' },
    { 'source': ['女皇', 'Strength'], 'result': '戰車' },
    { 'source': ['女皇', 'Hanged Man'], 'result': '女教皇' },
    { 'source': ['女皇', 'Death'], 'result': '愚者' },
    { 'source': ['女皇', 'Temperance'], 'result': '女教皇' },
    { 'source': ['女皇', 'Devil'], 'result': 'Sun' },
    { 'source': ['女皇', 'Tower'], 'result': 'Emperor' },
    { 'source': ['女皇', 'Star'], 'result': 'Lovers' },
    { 'source': ['女皇', 'Moon'], 'result': 'Fortune' },
    { 'source': ['女皇', 'Sun'], 'result': 'Tower' },
    { 'source': ['女皇', '審判'], 'result': 'Emperor' },
    { 'source': ['Emperor', 'Emperor'], 'result': 'Emperor' },
    { 'source': ['Emperor', 'Hierophant'], 'result': 'Fortune' },
    { 'source': ['Emperor', 'Lovers'], 'result': '愚者' },
    { 'source': ['Emperor', '戰車'], 'result': 'Strength' },
    { 'source': ['Emperor', '正義'], 'result': '戰車' },
    { 'source': ['Emperor', 'Hermit'], 'result': 'Hierophant' },
    { 'source': ['Emperor', 'Fortune'], 'result': 'Sun' },
    { 'source': ['Emperor', 'Strength'], 'result': 'Tower' },
    { 'source': ['Emperor', 'Hanged Man'], 'result': 'Devil' },
    { 'source': ['Emperor', 'Death'], 'result': 'Hermit' },
    { 'source': ['Emperor', 'Temperance'], 'result': 'Devil' },
    { 'source': ['Emperor', 'Devil'], 'result': '正義' },
    { 'source': ['Emperor', 'Tower'], 'result': 'Star' },
    { 'source': ['Emperor', 'Star'], 'result': 'Lovers' },
    { 'source': ['Emperor', 'Moon'], 'result': 'Tower' },
    { 'source': ['Emperor', 'Sun'], 'result': '審判' },
    { 'source': ['Emperor', '審判'], 'result': '女教皇' },
    { 'source': ['Hierophant', 'Hierophant'], 'result': 'Hierophant' },
    { 'source': ['Hierophant', 'Lovers'], 'result': 'Strength' },
    { 'source': ['Hierophant', '戰車'], 'result': 'Star' },
    { 'source': ['Hierophant', '正義'], 'result': 'Hanged Man' },
    { 'source': ['Hierophant', 'Hermit'], 'result': 'Fortune' },
    { 'source': ['Hierophant', 'Fortune'], 'result': '正義' },
    { 'source': ['Hierophant', 'Strength'], 'result': '愚者' },
    { 'source': ['Hierophant', 'Hanged Man'], 'result': 'Sun' },
    { 'source': ['Hierophant', 'Death'], 'result': '戰車' },
    { 'source': ['Hierophant', 'Temperance'], 'result': 'Death' },
    { 'source': ['Hierophant', 'Devil'], 'result': 'Hanged Man' },
    { 'source': ['Hierophant', 'Tower'], 'result': '審判' },
    { 'source': ['Hierophant', 'Star'], 'result': 'Tower' },
    { 'source': ['Hierophant', 'Moon'], 'result': '女教皇' },
    { 'source': ['Hierophant', 'Sun'], 'result': 'Lovers' },
    { 'source': ['Hierophant', '審判'], 'result': '女皇' },
    { 'source': ['Lovers', 'Lovers'], 'result': 'Lovers' },
    { 'source': ['Lovers', '戰車'], 'result': 'Temperance' },
    { 'source': ['Lovers', '正義'], 'result': '審判' },
    { 'source': ['Lovers', 'Hermit'], 'result': '戰車' },
    { 'source': ['Lovers', 'Fortune'], 'result': 'Strength' },
    { 'source': ['Lovers', 'Strength'], 'result': 'Death' },
    { 'source': ['Lovers', 'Hanged Man'], 'result': 'Sun' },
    { 'source': ['Lovers', 'Death'], 'result': 'Temperance' },
    { 'source': ['Lovers', 'Temperance'], 'result': 'Strength' },
    { 'source': ['Lovers', 'Devil'], 'result': 'Moon' },
    { 'source': ['Lovers', 'Tower'], 'result': '女皇' },
    { 'source': ['Lovers', 'Star'], 'result': '戰車' },
    { 'source': ['Lovers', 'Moon'], 'result': '魔術師' },
    { 'source': ['Lovers', 'Sun'], 'result': '女皇' },
    { 'source': ['Lovers', '審判'], 'result': 'Hanged Man' },
    { 'source': ['戰車', '戰車'], 'result': '戰車' },
    { 'source': ['戰車', '正義'], 'result': 'Moon' },
    { 'source': ['戰車', 'Hermit'], 'result': 'Devil' },
    { 'source': ['戰車', 'Fortune'], 'result': '女教皇' },
    { 'source': ['戰車', 'Strength'], 'result': 'Hermit' },
    { 'source': ['戰車', 'Hanged Man'], 'result': '愚者' },
    { 'source': ['戰車', 'Death'], 'result': 'Devil' },
    { 'source': ['戰車', 'Temperance'], 'result': 'Strength' },
    { 'source': ['戰車', 'Devil'], 'result': 'Temperance' },
    { 'source': ['戰車', 'Tower'], 'result': 'Fortune' },
    { 'source': ['戰車', 'Star'], 'result': 'Moon' },
    { 'source': ['戰車', 'Moon'], 'result': 'Lovers' },
    { 'source': ['戰車', 'Sun'], 'result': '女教皇' },
    { 'source': ['正義', '正義'], 'result': '正義' },
    { 'source': ['正義', 'Hermit'], 'result': '魔術師' },
    { 'source': ['正義', 'Fortune'], 'result': 'Emperor' },
    { 'source': ['正義', 'Strength'], 'result': 'Hierophant' },
    { 'source': ['正義', 'Hanged Man'], 'result': 'Lovers' },
    { 'source': ['正義', 'Death'], 'result': '愚者' },
    { 'source': ['正義', 'Temperance'], 'result': 'Emperor' },
    { 'source': ['正義', 'Devil'], 'result': '愚者' },
    { 'source': ['正義', 'Tower'], 'result': 'Sun' },
    { 'source': ['正義', 'Star'], 'result': '女皇' },
    { 'source': ['正義', 'Moon'], 'result': 'Devil' },
    { 'source': ['正義', 'Sun'], 'result': 'Hanged Man' },
    { 'source': ['Hermit', 'Hermit'], 'result': 'Hermit' },
    { 'source': ['Hermit', 'Fortune'], 'result': 'Star' },
    { 'source': ['Hermit', 'Strength'], 'result': 'Hierophant' },
    { 'source': ['Hermit', 'Hanged Man'], 'result': 'Star' },
    { 'source': ['Hermit', 'Death'], 'result': 'Strength' },
    { 'source': ['Hermit', 'Temperance'], 'result': 'Strength' },
    { 'source': ['Hermit', 'Devil'], 'result': '女教皇' },
    { 'source': ['Hermit', 'Tower'], 'result': '審判' },
    { 'source': ['Hermit', 'Star'], 'result': 'Strength' },
    { 'source': ['Hermit', 'Moon'], 'result': '女教皇' },
    { 'source': ['Hermit', 'Sun'], 'result': 'Devil' },
    { 'source': ['Hermit', '審判'], 'result': 'Emperor' },
    { 'source': ['Fortune', 'Fortune'], 'result': 'Fortune' },
    { 'source': ['Fortune', 'Strength'], 'result': 'Temperance' },
    { 'source': ['Fortune', 'Hanged Man'], 'result': 'Emperor' },
    { 'source': ['Fortune', 'Death'], 'result': 'Star' },
    { 'source': ['Fortune', 'Temperance'], 'result': '女皇' },
    { 'source': ['Fortune', 'Devil'], 'result': 'Hierophant' },
    { 'source': ['Fortune', 'Tower'], 'result': 'Hanged Man' },
    { 'source': ['Fortune', 'Star'], 'result': 'Devil' },
    { 'source': ['Fortune', 'Moon'], 'result': 'Sun' },
    { 'source': ['Fortune', 'Sun'], 'result': 'Star' },
    { 'source': ['Fortune', '審判'], 'result': 'Tower' },
    { 'source': ['Strength', 'Strength'], 'result': 'Strength' },
    { 'source': ['Strength', 'Hanged Man'], 'result': 'Temperance' },
    { 'source': ['Strength', 'Death'], 'result': 'Hierophant' },
    { 'source': ['Strength', 'Temperance'], 'result': '戰車' },
    { 'source': ['Strength', 'Devil'], 'result': 'Death' },
    { 'source': ['Strength', 'Tower'], 'result': '戰車' },
    { 'source': ['Strength', 'Star'], 'result': 'Moon' },
    { 'source': ['Strength', 'Moon'], 'result': '魔術師' },
    { 'source': ['Strength', 'Sun'], 'result': 'Moon' },
    { 'source': ['Hanged Man', 'Hanged Man'], 'result': 'Hanged Man' },
    { 'source': ['Hanged Man', 'Death'], 'result': 'Moon' },
    { 'source': ['Hanged Man', 'Temperance'], 'result': 'Death' },
    { 'source': ['Hanged Man', 'Devil'], 'result': 'Fortune' },
    { 'source': ['Hanged Man', 'Tower'], 'result': 'Hermit' },
    { 'source': ['Hanged Man', 'Star'], 'result': '正義' },
    { 'source': ['Hanged Man', 'Moon'], 'result': 'Strength' },
    { 'source': ['Hanged Man', 'Sun'], 'result': 'Hierophant' },
    { 'source': ['Hanged Man', '審判'], 'result': 'Star' },
    { 'source': ['Death', 'Death'], 'result': 'Death' },
    { 'source': ['Death', 'Temperance'], 'result': 'Hanged Man' },
    { 'source': ['Death', 'Devil'], 'result': '戰車' },
    { 'source': ['Death', 'Tower'], 'result': 'Sun' },
    { 'source': ['Death', 'Star'], 'result': 'Devil' },
    { 'source': ['Death', 'Moon'], 'result': 'Hierophant' },
    { 'source': ['Death', 'Sun'], 'result': '女教皇' },
    { 'source': ['Temperance', 'Temperance'], 'result': 'Temperance' },
    { 'source': ['Temperance', 'Devil'], 'result': '愚者' },
    { 'source': ['Temperance', 'Tower'], 'result': 'Fortune' },
    { 'source': ['Temperance', 'Star'], 'result': 'Sun' },
    { 'source': ['Temperance', 'Moon'], 'result': 'Fortune' },
    { 'source': ['Temperance', 'Sun'], 'result': '魔術師' },
    { 'source': ['Temperance', '審判'], 'result': 'Hermit' },
    { 'source': ['Devil', 'Devil'], 'result': 'Devil' },
    { 'source': ['Devil', 'Tower'], 'result': '魔術師' },
    { 'source': ['Devil', 'Star'], 'result': 'Strength' },
    { 'source': ['Devil', 'Moon'], 'result': '戰車' },
    { 'source': ['Devil', 'Sun'], 'result': 'Hermit' },
    { 'source': ['Devil', '審判'], 'result': 'Lovers' },
    { 'source': ['Tower', 'Tower'], 'result': 'Tower' },
    { 'source': ['Tower', 'Star'], 'result': 'Death' },
    { 'source': ['Tower', 'Moon'], 'result': 'Hermit' },
    { 'source': ['Tower', 'Sun'], 'result': 'Emperor' },
    { 'source': ['Tower', '審判'], 'result': 'Moon' },
    { 'source': ['Star', 'Star'], 'result': 'Star' },
    { 'source': ['Star', 'Moon'], 'result': 'Temperance' },
    { 'source': ['Star', 'Sun'], 'result': '審判' },
    { 'source': ['Star', '審判'], 'result': 'Fortune' },
    { 'source': ['Moon', 'Moon'], 'result': 'Moon' },
    { 'source': ['Moon', 'Sun'], 'result': '女皇' },
    { 'source': ['Moon', '審判'], 'result': '愚者' },
    { 'source': ['Sun', 'Sun'], 'result': 'Sun' },
    { 'source': ['Sun', '審判'], 'result': 'Death' },
    { 'source': ['審判', '審判'], 'result': '審判' }
];
var specialCombos = [
    { 'result': 'Alice', 'sources': ['Nebiros', 'Belial'] },
    { 'result': 'Ardha', 'sources': ['Parvati', 'Shiva'] },
    { 'result': 'Asura-Ou', 'sources': ['Zouchouten', 'Jikokuten', 'Koumokuten', 'Bishamonten'] },
    { 'result': '邪惡霜精', 'sources': ['Jack-o\'-Lantern', 'Jack Frost', 'King Frost'] },
    { 'result': '巴古斯', 'sources': ['Pixie', 'Pisaca', 'Hariti'] },
    { 'result': 'Chi You', 'sources': ['Hecatoncheires', 'White Rider', 'Thor', '義經', 'Cu Chulainn'] },
    { 'result': 'Flauros', 'sources': ['Berith', 'Andras', 'Eligor'] },
    { 'result': 'Kohryu', 'sources': ['Genbu', 'Seiryu', 'Suzaku', 'Byakko'] },
    { 'result': 'Lucifer', 'sources': ['Anubis', 'Ananta', 'Trumpeter', 'Michael', 'Metatron', 'Satan'] },
    { 'result': 'Metatron', 'sources': ['Principality', 'Power', 'Dominion', 'Melchizedek', 'Sandalphon', 'Michael'] },
    { 'result': 'Michael', 'sources': ['Raphael', 'Gabriel', 'Uriel'] },
    { 'result': 'Neko Shogun', 'sources': ['Kodama', 'Sudama', '安祖'] },
    { 'result': 'Ongyo-Ki', 'sources': ['Kin-Ki', 'Sui-Ki', 'Fuu-Ki'] },
    { 'result': '撒坦耶爾', 'sources': ['亞森', '安祖', 'Ishtar', 'Satan', 'Lucifer', 'Michael'] },
    { 'result': 'Seth', 'sources': ['Isis', 'Thoth', 'Anubis', 'Horus'] },
    { 'result': 'Shiva', 'sources': ['Rangda', 'Barong'] },
    { 'result': 'Sraosha', 'sources': ['Mithra', 'Mithras', 'Melchizedek', 'Lilith', 'Gabriel'] },
    { 'result': 'Throne', 'sources': ['Power', 'Melchizedek', 'Dominion'] },
    { 'result': 'Trumpeter', 'sources': ['White Rider', 'Red Rider', 'Black Rider', 'Pale Rider'] },
    { 'result': 'Vasuki', 'sources': ['Naga', 'Raja Naga', 'Ananta'] },
    { 'result': '義經', 'sources': ['Okuninushi', 'Shiki-Ouji', 'Arahabaki', 'Yatagarasu', 'Futsunushi'] }
];
var dlcPersona = [["Orpheus", "Orpheus Picaro"], ["Izanagi", "Izanagi Picaro"], ["Thanatos", "Thanatos Picaro"],
    ["Magatsu-Izanagi", "Magatsu-Izanagi Picaro"], ["Kaguya", "Kaguya Picaro"], ["Ariadne", "Ariadne Picaro"],
    ["Asterius", "Asterius Picaro"], ["Tsukiyomi", "Tsukiyomi Picaro"], ["Messiah", "Messiah Picaro"]];
