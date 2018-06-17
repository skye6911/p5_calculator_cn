// from https://github.com/aqiu384/aqiu384.github.io/blob/master/p5-tool/js/full_skills.js
var skillMap = {
    "Absorb Bless": {
        "effect": "Absorb Bless attacks.",
        "element": "被動",
        "personas": {
            "Cybele": 77
        }
    },
    "Absorb Curse": {
        "effect": "Absorb Curse attacks.",
        "element": "被動",
        "personas": {
            "Attis": 86,
            "Tsukiyomi": 0,
            "Tsukiyomi Picaro": 0
        }
    },
    "Absorb Elec": {
        "effect": "Absorb Electric attacks.",
        "element": "被動",
        "personas": {}
    },
    "Absorb Fire": {
        "effect": "Absorb Fire attacks.",
        "element": "被動",
        "personas": {
            "Moloch": 64
        }
    },
    "Absorb Ice": {
        "effect": "Absorb Ice attacks.",
        "element": "被動",
        "personas": {
            "Satan": 98
        }
    },
    "Absorb Nuke": {
        "effect": "Absorb Nuclear attacks.",
        "element": "被動",
        "personas": {
            "Kali": 82
        }
    },
    "Absorb Phys": {
        "effect": "Absorb Phys attacks.",
        "element": "被動",
        "personas": {
            "Abaddon": 79,
            "Lucifer": 99,
            "Messiah": 85
        }
    },
    "Absorb Psy": {
        "effect": "Absorb Psy attacks.",
        "element": "被動",
        "personas": {
            "Chi You": 90
        }
    },
    "Absorb Wind": {
        "effect": "Absorb Wind attacks.",
        "element": "被動",
        "personas": {
            "Ishtar": 0
        }
    },
    "Adverse Resolve": {
        "effect": "Increase critical rate when being ambushed.",
        "element": "被動",
        "personas": {
            "Arsene": 7,
            "Jikokuten": 31,
            "Rakshasa": 30,
            "Raphael": 82,
            "Thanatos Picaro": 73,
            "Yamata-no-Orochi": 67
        },
        "talk": "Rakshasa"
    },
    "Agi": {
        "cost": 400,
        "effect": "Deal weak Fire damage to 1 foe.",
        "element": "火炎",
        "personas": {
            "Hua Po": 0,
            "Jack-o'-Lantern": 0,
            "Onmoraki": 13,
            "Succubus": 8
        },
        "talk": "Jack-o'-Lantern"
    },
    "Agidyne": {
        "cost": 1200,
        "effect": "Deal heavy Fire damage to 1 foe.",
        "element": "火炎",
        "fuse": ["Cerberus", "Orpheus Picaro"],
        "personas": {
            "Baphomet": 0,
            "Belial": 0,
            "Cerberus": 0,
            "Emperor's Amulet": 0,
            "Mada": 0,
            "Moloch": 62,
            "Orpheus Picaro": 32,
            "Queen Mab": 48,
            "Seth": 0,
            "Surt": 0,
            "Yatagarasu": 0
        },
        "talk": "Belial"
    },
    "Agilao": {
        "cost": 800,
        "effect": "Deal medium Fire damage to 1 foe.",
        "element": "火炎",
        "fuse": "Hua Po",
        "personas": {
            "Decarabia": 0,
            "Hell Biker": 0,
            "Isis": 0,
            "Lamia": 0,
            "Orpheus": 0,
            "Orthrus": 0,
            "Stone of Scone": 0
        },
        "talk": "Hua Po"
    },
    "Agneyastra": {
        "cost": 24,
        "effect": "Deal 1 to 3 times medium Phys damage to all foes.",
        "element": "物理",
        "fuse": "Ardha",
        "personas": {
            "Ardha": 87,
            "Messiah Picaro": 0,
            "Ongyo-Ki": 81
        }
    },
    "Ailment Boost": {
        "effect": "Increase chance of inflicting all ailments.",
        "element": "被動",
        "personas": {
            "Dionysus": 63,
            "White Rider": 45
        },
        "talk": "Dionysus"
    },
    "Ali Dance": {
        "effect": "Half hit rate of all incoming attacks.",
        "element": "被動",
        "personas": {
            "Futsunushi": 0,
            "Gabriel": 79,
            "Vishnu": 0
        }
    },
    "Almighty Amp": {
        "effect": "Strengthen Almighty attacks by 50%.",
        "element": "被動",
        "personas": {},
        "note": "Available from Network Fusion"
    },
    "Almighty Boost": {
        "effect": "Strengthen Almighty attacks by 25%.",
        "element": "被動",
        "personas": {
            "Messiah": 87,
            "Messiah Picaro": 96
        },
        "note": "Also available from Network Fusion"
    },
    "Ambient Aid": {
        "effect": "Greatly increase inflicting rate of all status effects under rainy day or special weather warning.",
        "element": "被動",
        "personas": {
            "Black Ooze": 31,
            "Black Rider": 60,
            "Mothman": 36,
            "Narcissus": 55,
            "Pazuzu": 45,
            "Sudama": 20
        }
    },
    "Amrita Drop": {
        "cost": 600,
        "effect": "Cure all ailments of 1 ally except for unique status.",
        "element": "回復",
        "fuse": "Seiryu",
        "personas": {
            "Fortuna": 50,
            "Melchizedek": 65,
            "Norn": 55,
            "Seiryu": 66
        }
    },
    "Amrita Shower": {
        "cost": 1200,
        "effect": "Cure all ailments of party except for unique status.",
        "element": "回復",
        "personas": {
            "Dionysus": 66,
            "Garuda": 0,
            "Kaguya": 18,
            "Kaguya Picaro": 27,
            "Kushinada-Hime": 47,
            "Lakshmi": 72,
            "Mada": 88,
            "Sandalphon": 0,
            "Sraosha": 84
        },
        "talk": "Scathach"
    },
    "Angelic Grace": {
        "effect": "Double evasion against Fire/Ice/Elec/Wind/Nuke/Psy/Bless/Curse attacks.",
        "element": "被動",
        "fuse": "Sandalphon",
        "personas": {
            "Sandalphon": 77,
            "Sraosha": 83,
            "Uriel": 85
        }
    },
    "Apt Pupil": {
        "effect": "Increase critical rate.",
        "element": "被動",
        "personas": {
            "Andras": 13,
            "Ariadne": 0,
            "Ariadne Picaro": 0,
            "Bicorn": 8,
            "Futsunushi": 80,
            "Sudama": 22
        },
        "talk": "Andras"
    },
    "Arms Master": {
        "effect": "Half HP cost for physical skills.",
        "element": "被動",
        "fuse": "Chi You",
        "personas": {
            "Ongyo-Ki": 77,
            "Raphael": 83,
            "Tsukiyomi": 56
        }
    },
    "Assault Dive": {
        "cost": 13,
        "effect": "Deal heavy Phys damage to 1 foe.",
        "element": "物理",
        "personas": {
            "Anzu": 27,
            "Flauros": 29,
            "Koumokuten": 0,
            "Nue": 25,
            "Take-Minakata": 0,
            "Unicorn": 0
        },
        "talk": "Take-Minakata"
    },
    "Atomic Flare": {
        "cost": 4800,
        "effect": "Deal severe Nuclear damage to 1 foe.",
        "element": "核熱",
        "personas": {
            "Asura-Ou": 0
        }
    },
    "Attack Master": {
        "effect": "Automatic Tarukaja at the start of battle.",
        "element": "被動",
        "personas": {
            "Ariadne": 31,
            "Koumokuten": 51,
            "Magatsu-Izanagi": 48,
            "Scathach": 49,
            "Thor": 70,
            "Valkyrie": 45,
            "Yaksini": 23,
            "Zouchouten": 36
        }
    },
    "Auto-Maraku": {
        "effect": "Automatic Marakukaja at the start of battle. (Overwrites Defense Master)",
        "element": "被動",
        "personas": {
            "Cybele": 76,
            "Hope Diamond": 0,
            "Throne": 76
        }
    },
    "Auto-Masuku": {
        "effect": "Automatic Masukukaja at the start of battle. (Overwrites Speed Master)",
        "element": "被動",
        "personas": {
            "Ardha": 88,
            "Asterius Picaro": 63,
            "Hope Diamond": 0
        }
    },
    "Auto-Mataru": {
        "effect": "Automatic Matarukaja at the start of battle. (Overwrites Attack Master)",
        "element": "被動",
        "personas": {
            "Ariadne Picaro": 43,
            "Asterius": 57,
            "Asura-Ou": 78,
            "Bugs": 51,
            "Hope Diamond": 0,
            "King Frost": 64,
            "Shiva": 87,
            "Siegfried": 72
        },
        fuse: "Ariadne Picaro"
    },
    "Bad Beat": {
        "cost": 21,
        "effect": "Deal medium Phys damage and inflict Despair (low odds) to all foes.",
        "element": "物理",
        "fuse": "Black Rider",
        "personas": {
            "Dakini": 0,
            "Kin-Ki": 30,
            "Pazuzu": 47
        }
    },
    "Baisudi": {
        "cost": 400,
        "effect": "Cure Burn/Freeze/Shock of 1 ally.",
        "element": "回復",
        "fuse": "Angel",
        "personas": {
            "Agathion": 0,
            "Angel": 14,
            "Jack Frost": 0,
            "Nigi Mitama": 0
        }
    },
    "Abysmal Surge": {
        "cost": 1200,
        "effect": "Inflict Despair (medium odds) to all foes.",
        "element": "異常",
        "personas": {
            "Ananta": 45,
            "Arahabaki": 0,
            "Dionysus": 0,
            "Pale Rider": 0,
            "Pisaca": 32,
            "Trumpeter": 0,
            "Zaou-Gongen": 0
        },
        "talk": "Arahabaki"
    },
    "Black Viper": {
        "cost": 4800,
        "effect": "Deal severe Almighty damage to 1 foe.",
        "element": "萬能",
        "personas": {
            "Satan": 94
        },
        "unique": "Satan"
    },
    "Bless Amp": {
        "effect": "Strengthen (non instant death) Bless attacks by 50%.",
        "element": "被動",
        "personas": {
            "Cybele": 74,
            "Metatron": 94,
            "Throne": 74
        }
    },
    "Bless Boost": {
        "effect": "Strengthen (non instant death) Bless attacks by 25%.",
        "element": "被動",
        "personas": {
            "Daisoujou": 44,
            "Mithra": 36,
            "Principality": 34
        }
    },
    "Nocturnal Flash": {
        "cost": 1200,
        "effect": "Inflict Dizzy (medium odds) to all foes.",
        "element": "異常",
        "personas": {
            "Dominion": 0,
            "Hariti": 42,
            "Narcissus": 0,
            "Norn": 0
        },
        "talk": "Narcissus"
    },
    "Bloodbath": {
        "cost": 19,
        "effect": "Deal heavy Phys damage and inflict Fear (low odds) to all foes.",
        "element": "物理",
        "fuse": "Rangda",
        "personas": {
            "Black Rider": 61,
            "Chernobog": 0,
            "Magatsu-Izanagi": 46,
            "Magatsu-Izanagi Picaro": 50,
            "Rangda": 0,
            "Uriel": 0
        },
        "talk": "Chernobog"
    },
    "Life Drain": {
        "cost": 300,
        "effect": "Drains HP from 1 foe.",
        "element": "萬能",
        "personas": {
            "Choronzon": 0,
            "Incubus": 0,
            "Legion": 0,
            "Tsukiyomi": 0
        },
        "talk": "Incubus"
    },
    "Brain Buster": {
        "cost": 21,
        "effect": "Deal heavy Phys damage and inflict Brainwash (low odds) to all foes.",
        "element": "物理",
        "personas": {
            "Kurama Tengu": 0,
            "Trumpeter": 0
        },
        "talk": "Kurama Tengu"
    },
    "Brain Jack": {
        "cost": 1200,
        "effect": "Inflict Brainwash (medium odds) to all foes.",
        "element": "異常",
        "personas": {
            "Black Ooze": 34,
            "Oberon": 0,
            "Vasuki": 0,
            "Yurlungur": 0
        }
    },
    "Brain Shake": {
        "cost": 9,
        "effect": "Deal medium Phys damage and inflict Brainwash (medium odds) to 1 foe.",
        "element": "物理",
        "fuse": "Inugami",
        "personas": {
            "Inugami": 18,
            "Pale Rider": 0
        },
        "talk": "Inugami"
    },
    "Brainwash Boost": {
        "effect": "Increase chance of inflicting Brainwash.",
        "element": "被動",
        "personas": {
            "Succubus": 11,
            "Vasuki": 72
        },
        "talk": "Succubus"
    },
    "Brave Blade": {
        "cost": 24,
        "effect": "Deal grave Phys damage to 1 foe.",
        "element": "物理",
        "fuse": "Futsunushi",
        "personas": {
            "Futsunushi": 82,
            "Yoshitsune": 0
        }
    },
    "Bufu": {
        "cost": 400,
        "effect": "Deal weak Ice damage to 1 foe.",
        "element": "冰凍",
        "fuse": "Koropokkuru",
        "personas": {
            "Andras": 0,
            "Apsaras": 0,
            "Genbu": 0,
            "Jack Frost": 0,
            "Koropokkuru": 0,
            "Kusi Mitama": 0,
            "Saki Mitama": 0,
            "Silky": 0
        },
        "talk": "Jack Frost"
    },
    "Bufudyne": {
        "cost": 1200,
        "effect": "Deal heavy Ice damage to 1 foe.",
        "element": "冰凍",
        "personas": {
            "Baphomet": 59,
            "Byakko": 55,
            "Emperor's Amulet": 0,
            "King Frost": 0,
            "Lakshmi": 0,
            "Seiryu": 0,
            "Skadi": 58
        },
        "talk": "King Frost"
    },
    "Bufula": {
        "cost": 800,
        "effect": "Deal medium Ice damage to 1 foe.",
        "element": "冰凍",
        "personas": {
            "Ame-no-Uzume": 0,
            "Belphegor": 0,
            "Lachesis": 0,
            "Lilim": 0,
            "Stone of Scone": 0,
            "Sui-Ki": 0
        },
        "talk": "Belphegor"
    },
    "Burn Boost": {
        "effect": "Increase chance of inflicting Burn.",
        "element": "被動",
        "fuse": "Orthrus",
        "personas": {
            "Asterius": 0,
            "Asterius Picaro": 0,
            "Baphomet": 0,
            "Hua Po": 15,
            "Mada": 0,
            "Orthrus": 22
        }
    },
    "Cadenza": {
        "cost": 2400,
        "effect": "Restore 50% HP of party and increase evasion rate.",
        "element": "回復",
        "personas": {
            "Orpheus": 0,
            "Orpheus Picaro": 0
        },
        "unique": "Orpheus"
    },
    "Cleave": {
        "cost": 6,
        "effect": "Deal weak Phys damage to 1 foe.",
        "element": "物理",
        "fuse": "Berith",
        "personas": {
            "Arsene": 2,
            "Berith": 0
        },
        "talk": "Berith"
    },
    "Life Aid": {
        "effect": "Recover 8% HP and SP after a successful battle.",
        "element": "被動",
        "fuse": "Lakshmi",
        "personas": {
            "Kohryu": 78,
            "Lakshmi": 74,
            "Messiah Picaro": 93,
            "Trumpeter": 64
        }
    },
    "Cosmic Flare": {
        "cost": 5400,
        "effect": "Deal severe Nuclear damage to all foes.",
        "element": "核熱",
        "personas": {
            "Ardha": 0,
            "Michael": 92,
            "Satanael": 96
        }
    },
    "Counter": {
        "effect": "10% chance of reflecting Phys attacks.",
        "element": "被動",
        "fuse": "Setanta",
        "personas": {
            "Ippon-Datara": 18,
            "Jikokuten": 28,
            "Oni": 0,
            "Setanta": 0,
            "Yaksini": 0
        }
    },
    "Counterstrike": {
        "effect": "15% chance of reflecting Phys attacks.",
        "element": "被動",
        "personas": {
            "Byakko": 0,
            "Kaguya": 0,
            "Kin-Ki": 31,
            "Ose": 0,
            "Rakshasa": 28,
            "Rangda": 0,
            "Valkyrie": 0
        },
        "talk": "Valkyrie"
    },
    "Cross Slash": {
        "cost": 20,
        "dlc": true,
        "effect": "Deal 2 times heavy Phys damage to 1 foe. High accuracy.",
        "element": "物理",
        "personas": {
            "Izanagi": 0,
            "Izanagi Picaro": 0
        },
        "unique": "Izanagi"
    },
    "Curse Amp": {
        "effect": "Strengthen (non instant death) Curse attacks by 50%.",
        "element": "被動",
        "personas": {
            "Beelzebub": 85,
            "Nebiros": 65,
            "Thanatos": 66,
            "Tsukiyomi": 53,
            "Tsukiyomi Picaro": 58
        }
    },
    "Curse Boost": {
        "effect": "Strengthen (non instant death) Curse attacks by 25%.",
        "element": "被動",
        "personas": {
            "Choronzon": 32,
            "Nue": 26,
            "Pale Rider": 55
        }
    },
    "Sword Dance": {
        "cost": 21,
        "effect": "Deal grave Phys damage to 1 foe.",
        "element": "物理",
        "personas": {
            "Metatron": 0,
            "Michael": 89,
            "Raphael": 0,
            "Sandalphon": 79
        }
    },
    "Dazzler": {
        "cost": 500,
        "effect": "Inflict Dizzy (high odds) to 1 foe.",
        "element": "異常",
        "fuse": "Archangel",
        "personas": {
            "Angel": 0,
            "Archangel": 0,
            "Jack-o'-Lantern": 5,
            "Mokoi": 0,
            "Naga": 27
        }
    },
    "Deadly Fury": {
        "cost": 18,
        "effect": "Deal severe Phys damage to 1 foe. More powerful under Baton Pass .",
        "element": "物理",
        "fuse": "Chernobog",
        "personas": {
            "Bishamonten": 68,
            "Chernobog": 0,
            "Cu Chulainn": 0,
            "Koumokuten": 55
        }
    },
    "Deathbound": {
        "cost": 22,
        "effect": "Deal 1 to 2 times medium Phys damage to all foes.",
        "element": "物理",
        "fuse": "Dakini",
        "personas": {
            "Abaddon": 0,
            "Chernobog": 64,
            "Dakini": 53,
            "Hanuman": 65,
            "Pale Rider": 58,
            "Uriel": 0,
            "Valkyrie": 46,
            "Yamata-no-Orochi": 0
        }
    },
    "Debilitate": {
        "cost": 3000,
        "effect": "Decrease 1 foe's Attack, Defense and Agility for 3 turns.",
        "element": "輔助",
        "fuse": "Trumpeter",
        "personas": {
            "Michael": 0,
            "Mother Harlot": 85,
            "Sraosha": 85,
            "Trumpeter": 65
        }
    },
    "Defense Master": {
        "effect": "Automatic Rakukaja at the start of battle.",
        "element": "被動",
        "personas": {
            "Ananta": 0,
            "Arahabaki": 39,
            "Genbu": 12,
            "Jikokuten": 0,
            "Neko Shogun": 34,
            "Take-Minakata": 32
        }
    },
    "Dekaja": {
        "cost": 1000,
        "effect": "Negate all -kaja buff effects of all foes.",
        "element": "輔助",
        "fuse": "Anzu",
        "personas": {
            "Anzu": 28,
            "Flauros": 0,
            "Kumbhanda": 45,
            "Obariyon": 12,
            "Orobas": 0,
            "Raphael": 0,
            "Sarasvati": 52,
            "Shiki-Ouji": 24,
            "Succubus": 10
        }
    },
    "Dekunda": {
        "cost": 1000,
        "effect": "Negate all -nda debuff effects of party.",
        "element": "輔助",
        "fuse": "Mokoi",
        "personas": {
            "Alice": 0,
            "Angel": 17,
            "Anubis": 40,
            "Cu Chulainn": 70,
            "Jikokuten": 27,
            "Mithra": 35,
            "Mokoi": 14,
            "Unicorn": 0,
            "Yatagarasu": 0
        }
    },
    "Devil Smile": {
        "cost": 1200,
        "effect": "Inflict Fear (medium odds) to all foes.",
        "element": "異常",
        "personas": {
            "Beelzebub": 0,
            "Decarabia": 37,
            "Lilim": 0,
            "Moloch": 0,
            "Pazuzu": 46
        },
        "talk": "Decarabia"
    },
    "Evil Touch": {
        "cost": 500,
        "effect": "Inflict Fear (high odds) to 1 foe.",
        "element": "異常",
        "personas": {
            "Black Ooze": 0,
            "Incubus": 0,
            "Kodama": 13,
            "Nekomata": 0,
            "Skadi": 0,
            "Slime": 0,
            "White Rider": 0
        },
        "talk": "Black Ooze"
    },
    "Dia": {
        "cost": 300,
        "effect": "Slightly restore 1 ally's HP.",
        "element": "回復",
        "fuse": "Pixie",
        "personas": {
            "Agathion": 0,
            "Angel": 0,
            "Pixie": 0,
            "Silky": 7
        },
        "talk": "Pixie"
    },
    "Diamond Dust": {
        "cost": 4800,
        "effect": "Deal severe Ice damage to 1 foe.",
        "element": "冰凍",
        "personas": {
            "Black Frost": 72,
            "Satan": 0
        }
    },
    "Diarahan": {
        "cost": 1800,
        "effect": "Fully restore 1 ally's HP.",
        "element": "回復",
        "fuse": ["Norn", "Kaguya Picaro"],
        "personas": {
            "Bishamonten": 0,
            "Daisoujou": 45,
            "Kaguya": 21,
            "Kaguya Picaro": 30,
            "Lakshmi": 0,
            "Norn": 54,
            "Parvati": 58,
            "Sarasvati": 54,
            "Seiryu": 0
        },
        "talk": "Norn"
    },
    "Diarama": {
        "cost": 600,
        "effect": "Moderately restore 1 ally's HP.",
        "element": "回復",
        "fuse": "High Pixie",
        "personas": {
            "Ame-no-Uzume": 0,
            "Phoenix": 23,
            "High Pixie": 18,
            "Horus": 0,
            "Isis": 0,
            "Mithra": 0,
            "Neko Shogun": 0,
            "Parvati": 0,
            "Power": 44
        },
        "talk": "High Pixie"
    },
    "Die For Me!": {
        "cost": 4400,
        "effect": "High chance of instantly killing all foes.",
        "element": "咒怨",
        "personas": {
            "Alice": 81
        },
        "unique": "Alice"
    },
    "Despair Boost": {
        "effect": "Increase chance of inflicting Despair.",
        "element": "被動",
        "fuse": "Lamia",
        "personas": {
            "Lamia": 31,
            "Pisaca": 33
        }
    },
    "Divine Grace": {
        "effect": "Effects of healing magic are increased by 50%.",
        "element": "被動",
        "fuse": "Kikuri-Hime",
        "personas": {
            "Ame-no-Uzume": 32,
            "Kaguya": 17,
            "Kaguya Picaro": 26,
            "Kikuri-Hime": 45,
            "Nigi Mitama": 22
        }
    },
    "Divine Judgement": {
        "cost": 4800,
        "effect": "Half remaining HP of 1 foe.",
        "element": "祝福",
        "personas": {
            "Gabriel": 78,
            "Metatron": 95,
            "Michael": 0
        }
    },
    "Dizzy Boost": {
        "effect": "Increase chance of inflicting Dizzy.",
        "element": "被動",
        "personas": {
            "Hariti": 45,
            "Narcissus": 53
        }
    },
    "Dodge Bless": {
        "effect": "Double evasion rate against (non instant death) Bless attacks.",
        "element": "被動",
        "personas": {
            "Koh-i-Noor": 0,
            "Lilim": 35
        }
    },
    "Dodge Curse": {
        "effect": "Double evasion rate against (non instant death) Curse attacks.",
        "element": "被動",
        "personas": {
            "Angel": 15,
            "Incubus": 9,
            "Koh-i-Noor": 0,
            "Shiisaa": 20
        }
    },
    "Dodge Elec": {
        "effect": "Double evasion rate against Electric attacks.",
        "element": "被動",
        "personas": {
            "Agathion": 8,
            "Choronzon": 30,
            "Koh-i-Noor": 0,
            "Makami": 20,
            "Mokoi": 13,
            "Nekomata": 22,
            "Shiisaa": 21
        }
    },
    "Dodge Fire": {
        "effect": "Double evasion rate against Fire attacks.",
        "element": "被動",
        "personas": {
            "Atropos": 44,
            "Belphegor": 0,
            "Berith": 11,
            "Koh-i-Noor": 0,
            "Sui-Ki": 29
        }
    },
    "Dodge Ice": {
        "effect": "Double evasion rate against Ice attacks.",
        "element": "被動",
        "personas": {
            "Koh-i-Noor": 0,
            "Koropokkuru": 11,
            "Orthrus": 0
        }
    },
    "Dodge Nuke": {
        "effect": "Double evasion rate against Nuclear attacks.",
        "element": "被動",
        "personas": {
            "Koh-i-Noor": 0
        }
    },
    "Dodge Physical": {
        "effect": "Double evasion rate against Phys attacks.",
        "element": "被動",
        "personas": {
            "Flauros": 26,
            "Izanagi": 22,
            "Valkyrie": 49
        }
    },
    "Dodge Psy": {
        "effect": "Double evasion rate against Psy attacks.",
        "element": "被動",
        "personas": {
            "Jatayu": 33,
            "Kin-Ki": 27,
            "Koh-i-Noor": 0
        }
    },
    "Dodge Wind": {
        "effect": "Double evasion rate against Wind attacks.",
        "element": "被動",
        "personas": {
            "Fuu-Ki": 26,
            "Koh-i-Noor": 0
        }
    },
    "Door of Hades": {
        "cost": 3200,
        "dlc": true,
        "effect": "Deal heavy Almighty damage to all foes with medium chance of instant kill.",
        "element": "萬能",
        "personas": {
            "Thanatos": 0,
            "Thanatos Picaro": 0
        },
        "unique": "Thanatos"
    },
    "Dormin Rush": {
        "cost": 16,
        "effect": "Deal medium Phys damage and inflict Sleep (low odds) to all foes.",
        "element": "物理",
        "fuse": "Shiki-Ouji",
        "personas": {
            "Flauros": 0,
            "Sandman": 0,
            "Setanta": 0
        }
    },
    "Dormina": {
        "cost": 500,
        "effect": "Inflict Sleep (high odds) to 1 foe.",
        "element": "異常",
        "personas": {
            "High Pixie": 0,
            "Hua Po": 0,
            "Sandman": 0,
            "Silky": 0
        },
        "talk": "Sandman"
    },
    "Double Fangs": {
        "cost": 10,
        "effect": "Deal 2 times medium Phys damage to 1 foe.",
        "element": "物理",
        "personas": {
            "Berith": 10,
            "Eligor": 18,
            "Makami": 0,
            "Naga": 0,
            "Orthrus": 0,
            "Shiisaa": 0
        },
        "talk": "Orthrus"
    },
    "Dream Needle": {
        "cost": 8,
        "effect": "Deal medium Phys damage and inflict Sleep (medium odds) to 1 foe.",
        "element": "物理",
        "fuse": "Incubus",
        "personas": {
            "Arsene": 5,
            "Phoenix": 0,
            "Inugami": 15,
            "Pisaca": 0
        }
    },
    "Eiga": {
        "cost": 800,
        "effect": "Deal medium Curse damage to 1 foe.",
        "element": "咒怨",
        "personas": {
            "Anubis": 43,
            "Choronzon": 31,
            "Leanan Sidhe": 23,
            "Stone of Scone": 0
        },
        "talk": "Choronzon"
    },
    "Eigaon": {
        "cost": 1200,
        "effect": "Deal heavy Curse damage to 1 foe.",
        "element": "咒怨",
        "fuse": "Nebiros",
        "personas": {
            "Emperor's Amulet": 0,
            "Nebiros": 0,
            "Pale Rider": 0,
            "Pazuzu": 48,
            "Rangda": 49
        },
        "talk": "Nebiros"
    },
    "Eiha": {
        "cost": 400,
        "effect": "Deal weak Curse damage to 1 foe.",
        "element": "咒怨",
        "personas": {
            "Arsene": 1,
            "Incubus": 7,
            "Slime": 11
        }
    },
    "Wild Thunder": {
        "cost": 5400,
        "effect": "Deal severe Electric damage to all foes.",
        "element": "電擊",
        "personas": {
            "Odin": 84
        }
    },
    "Elec Amp": {
        "effect": "Strengthen Electric attacks by 50%.",
        "element": "被動",
        "fuse": "Oberon",
        "personas": {
            "Oberon": 72,
            "Odin": 87,
            "Thor": 66,
            "Yoshitsune": 84
        }
    },
    "Elec Boost": {
        "effect": "Strengthen Electric attacks by 25%.",
        "element": "被動",
        "fuse": "Naga",
        "personas": {
            "Atropos": 43,
            "Naga": 26,
            "Take-Minakata": 34,
            "Yurlungur": 48
        }
    },
    "Elec Break": {
        "cost": 1500,
        "effect": "Negate Electric resistances of all foes.",
        "element": "輔助",
        "personas": {
            "Atropos": 0,
            "Barong": 0,
            "Raja Naga": 0,
            "Take-Minakata": 0,
            "Yurlungur": 45
        }
    },
    "Elec Wall": {
        "cost": 1800,
        "effect": "Create a shield on 1 ally to reduce damage of Electric attacks for 3 turns.",
        "element": "輔助",
        "personas": {
            "Ananta": 0,
            "Apsaras": 14,
            "Lachesis": 36,
            "Nekomata": 21
        },
        "talk": "Apsaras"
    },
    "Endure": {
        "effect": "Survive one fatal blow with 1 HP remaining.",
        "element": "被動",
        "fuse": "Hecatoncheires",
        "personas": {
            "Ganesha": 56,
            "Hecatoncheires": 43,
            "Hope Diamond": 0,
            "Orpheus": 27,
            "Orpheus Picaro": 30,
            "Scathach": 50
        }
    },
    "Enduring Soul": {
        "effect": "Survive one fatal blow with HP completely recovered.",
        "element": "被動",
        "fuse": "Attis",
        "personas": {
            "Attis": 84,
            "Cerberus": 60,
            "Cu Chulainn": 72,
            "Koumokuten": 54,
            "Mada": 90,
            "Messiah": 83,
            "Messiah Picaro": 92,
            "Shiva": 0,
            "Thanatos": 70,
            "Thanatos Picaro": 74,
            "Zaou-Gongen": 83
        }
    },
    "Energy Drop": {
        "cost": 400,
        "effect": "Cure Confuse/Fear/Despair/Rage/Brainwash of 1 ally.",
        "element": "回復",
        "fuse": "Mandrake",
        "personas": {
            "Kikuri-Hime": 0,
            "Makami": 0,
            "Mandrake": 0,
            "Narcissus": 0,
            "Saki Mitama": 0
        }
    },
    "Energy Shower": {
        "cost": 800,
        "effect": "Cure Confuse/Fear/Despair/Rage/Brainwash of party.",
        "element": "回復",
        "personas": {
            "Clotho": 30,
            "Hariti": 0,
            "Parvati": 57
        },
        "talk": "Parvati"
    },
    "Evade Bless": {
        "effect": "Triple evasion rate against (non instant death) Bless attacks.",
        "element": "被動",
        "personas": {
            "Nebiros": 66,
            "Pale Rider": 57
        }
    },
    "Evade Curse": {
        "effect": "Triple evasion rate against (non instant death) Curse attacks.",
        "element": "被動",
        "personas": {
            "Dominion": 73,
            "Gabriel": 80,
            "Throne": 75
        }
    },
    "Evade Elec": {
        "effect": "Triple evasion rate against Electric attacks.",
        "element": "被動",
        "personas": {
            "Fortuna": 51,
            "Garuda": 55
        }
    },
    "Evade Fire": {
        "effect": "Triple evasion rate against Fire attacks.",
        "element": "被動",
        "personas": {
            "Baphomet": 0,
            "Byakko": 52
        }
    },
    "Evade Ice": {
        "effect": "Triple evasion rate against Ice attacks.",
        "element": "被動",
        "personas": {
            "Kali": 79
        }
    },
    "Evade Nuke": {
        "effect": "Triple evasion rate against Nuclear attacks.",
        "element": "被動",
        "personas": {
            "Okuninushi": 47
        }
    },
    "Evade Physical": {
        "effect": "Triple evasion rate against Phys attacks.",
        "element": "被動",
        "personas": {
            "Ariadne": 34,
            "Ariadne Picaro": 46,
            "Bugs": 54,
            "Zaou-Gongen": 82
        }
    },
    "Evade Psy": {
        "effect": "Triple evasion rate against Psy attacks.",
        "element": "被動",
        "personas": {
            "Forneus": 68
        }
    },
    "Evade Wind": {
        "effect": "Triple evasion rate against Wind attacks.",
        "element": "被動",
        "personas": {
            "Raja Naga": 60,
            "Vasuki": 70
        }
    },
    "Demonic Decree": {
        "cost": 4800,
        "effect": "Half remaining HP of 1 foe.",
        "element": "咒怨",
        "personas": {
            "Beelzebub": 87
        }
    },
    "Fast Heal": {
        "effect": "Half the time needed to recover from ailments.",
        "element": "被動",
        "fuse": "Fortuna",
        "personas": {
            "Bugs": 55,
            "Hope Diamond": 0,
            "Odin": 86,
            "Yoshitsune": 82
        }
    },
    "Fear Boost": {
        "effect": "Increase chance of inflicting Fear.",
        "element": "被動",
        "fuse": "Kodama",
        "personas": {
            "Chernobog": 66,
            "Kodama": 15
        }
    },
    "Fire Amp": {
        "effect": "Strengthen Fire attacks by 50%.",
        "element": "被動",
        "fuse": "Surt",
        "personas": {
            "Asterius": 59,
            "Asterius Picaro": 65,
            "Mada": 0
        }
    },
    "Fire Boost": {
        "effect": "Strengthen Fire attacks by 25%.",
        "element": "被動",
        "fuse": "Decarabia",
        "personas": {
            "Decarabia": 35,
            "Hell Biker": 40,
            "Orpheus": 32,
            "Orpheus Picaro": 35
        }
    },
    "Fire Break": {
        "cost": 1500,
        "effect": "Negate Fire resistances of all foes.",
        "element": "輔助",
        "personas": {
            "Orobas": 20,
            "Seth": 54,
            "Surt": 0
        },
        "talk": "Orobas"
    },
    "Fire Wall": {
        "cost": 1800,
        "effect": "Create a shield on 1 ally to reduce damage of Fire attacks for 3 turns.",
        "element": "輔助",
        "personas": {
            "Atropos": 0,
            "Koropokkuru": 13,
            "Slime": 13
        },
        "talk": "Koropokkuru"
    },
    "Firm Stance": {
        "effect": "Half all incoming damage by sacrificing evasion completely.",
        "element": "被動",
        "personas": {
            "Futsunushi": 81,
            "Mara": 78,
            "Messiah Picaro": 94,
            "Ongyo-Ki": 79
        }
    },
    "Flash Bomb": {
        "cost": 19,
        "effect": "Deal medium Phys damage and inflict Dizzy (low odds) to all foes.",
        "element": "物理",
        "fuse": "Jatayu",
        "personas": {
            "Black Ooze": 35,
            "Black Rider": 0,
            "Jatayu": 0
        }
    },
    "Forget Boost": {
        "effect": "Increase chance of inflicting Forget.",
        "element": "被動",
        "fuse": "Kusi Mitama",
        "personas": {
            "Kaiwan": 37,
            "Kusi Mitama": 18
        }
    },
    "Foul Breath": {
        "cost": 800,
        "effect": "Increase susceptibility to all ailments of 1 foe.",
        "element": "萬能",
        "fuse": "Mothman",
        "personas": {
            "Girimehkala": 46,
            "Hecatoncheires": 45,
            "Lamia": 28,
            "White Rider": 44
        }
    },
    "Freeze Boost": {
        "effect": "Increase chance of inflicting Freeze.",
        "element": "被動",
        "fuse": "Apsaras",
        "personas": {
            "Baphomet": 63,
            "Jack Frost": 15,
            "King Frost": 62,
            "Lilim": 34
        },
        "talk": "Baphomet"
    },
    "Frei": {
        "cost": 400,
        "effect": "Deal weak Nuclear damage to 1 foe.",
        "element": "核熱",
        "personas": {
            "Makami": 0,
            "Suzaku": 0
        },
        "talk": "Makami"
    },
    "Freidyne": {
        "cost": 1200,
        "effect": "Deal heavy Nuclear damage to 1 foe.",
        "element": "核熱",
        "personas": {
            "Ananta": 48,
            "Bishamonten": 0,
            "Emperor's Amulet": 0,
            "Mithras": 45,
            "Titania": 0
        },
        "talk": "Titania"
    },
    "Freila": {
        "cost": 800,
        "effect": "Deal medium Nuclear damage to 1 foe.",
        "element": "核熱",
        "fuse": "Ara Mitama",
        "personas": {
            "Ara Mitama": 0,
            "Phoenix": 0,
            "Stone of Scone": 0,
            "Thoth": 0
        }
    },
    "Garu": {
        "cost": 300,
        "effect": "Deal weak Wind damage to 1 foe.",
        "element": "疾風",
        "fuse": "Bicorn",
        "personas": {
            "Bicorn": 6,
            "High Pixie": 0,
            "Kelpie": 0,
            "Kodama": 0,
            "Koppa Tengu": 0,
            "Kusi Mitama": 0
        },
        "talk": "Kelpie"
    },
    "Garudyne": {
        "cost": 1000,
        "effect": "Deal heavy Wind damage to 1 foe.",
        "element": "疾風",
        "fuse": "Kurama Tengu",
        "personas": {
            "Emperor's Amulet": 0,
            "Fortuna": 47,
            "Garuda": 0,
            "Kurama Tengu": 57,
            "Norn": 0,
            "Quetzalcoatl": 0
        },
        "talk": "Garuda"
    },
    "Garula": {
        "cost": 600,
        "effect": "Deal medium Wind damage to 1 foe.",
        "element": "疾風",
        "fuse": "Matador",
        "personas": {
            "Anzu": 0,
            "Fuu-Ki": 0,
            "Isis": 30,
            "Jatayu": 0,
            "Matador": 23,
            "Sandman": 0,
            "Stone of Scone": 0,
            "Sudama": 23
        },
        "talk": "Isis"
    },
    "Ghastly Wail": {
        "cost": 2800,
        "effect": "Instantly kill all foes under Fear.",
        "element": "萬能",
        "personas": {
            "Black Rider": 63,
            "Magatsu-Izanagi": 0,
            "Magatsu-Izanagi Picaro": 0,
            "Moloch": 63,
            "Skadi": 56
        },
        "talk": "Skadi"
    },
    "Giant Slice": {
        "cost": 9,
        "effect": "Deal medium Phys damage to 1 foe.",
        "element": "物理",
        "fuse": "Valkyrie",
        "personas": {
            "Dakini": 0,
            "Flauros": 0,
            "Ganesha": 0,
            "Inugami": 0,
            "Oni": 21,
            "Rakshasa": 0,
            "Setanta": 0,
            "Zouchouten": 0
        }
    },
    "Gigantomachia": {
        "cost": 25,
        "effect": "Deal grave Phys damage to all foes.",
        "element": "物理",
        "personas": {
            "Abaddon": 80,
            "Asterius": 62,
            "Asterius Picaro": 68,
            "Chi You": 0,
            "Lucifer": 0
        },
        fuse: "Asterius Picaro"
    },
    "God's Hand": {
        "cost": 25,
        "effect": "Deal grave Phys damage to 1 foe.",
        "element": "物理",
        "fuse": "Zaou-Gongen",
        "personas": {
            "Ardha": 0,
            "Bishamonten": 73,
            "Melchizedek": 67,
            "Messiah": 0,
            "Zaou-Gongen": 0
        }
    },
    "Growth 1": {
        "effect": "Persona gains 1/4 EXP while inactive.",
        "element": "被動",
        "fuse": "Koppa Tengu",
        "personas": {
            "Koppa Tengu": 12,
            "Saki Mitama": 7
        }
    },
    "Growth 2": {
        "effect": "Persona gains 1/2 EXP while inactive.",
        "element": "被動",
        "fuse": "Thoth",
        "personas": {
            "Ananta": 46,
            "Lachesis": 0,
            "Thoth": 42
        }
    },
    "Growth 3": {
        "effect": "Persona gains full EXP even while inactive.",
        "element": "被動",
        "fuse": "Izanagi Picaro",
        "personas": {
            "Izanagi": 25,
            "Izanagi Picaro": 28,
            "Kurama Tengu": 58,
            "Narcissus": 52,
            "Quetzalcoatl": 65,
            "Raphael": 81
        }
    },
    "Hama": {
        "cost": 800,
        "effect": "Small chance of instantly killing 1 foe.",
        "element": "祝福",
        "personas": {
            "Angel": 0,
            "Archangel": 0
        },
        "talk": "Angel"
    },
    "Hama Boost": {
        "effect": "Increase success rate of instant death by Bless skills.",
        "element": "被動",
        "personas": {
            "Dominion": 71,
            "Horus": 54,
            "Melchizedek": 61,
            "Metatron": 92,
            "Parvati": 61,
            "Sraosha": 0,
            "Throne": 0
        }
    },
    "Hamaon": {
        "cost": 1500,
        "effect": "Medium chance of instantly killing 1 foe.",
        "element": "祝福",
        "personas": {
            "Anubis": 0,
            "Dominion": 0,
            "Horus": 53,
            "Melchizedek": 0,
            "Parvati": 0,
            "Power": 0,
            "Unicorn": 44
        },
        "talk": "Anubis"
    },
    "Hassou Tobi": {
        "cost": 25,
        "effect": "Deal 8 times weak Phys damage to all foes.",
        "element": "物理",
        "personas": {
            "Yoshitsune": 86
        },
        "unique": "Yoshitsune"
    },
    "Headbutt": {
        "cost": 9,
        "effect": "Deal medium Phys damage and inflict Forget (medium odds) to 1 foe.",
        "element": "物理",
        "fuse": "Slime",
        "personas": {
            "Black Ooze": 32,
            "Slime": 14,
            "Sui-Ki": 0
        }
    },
    "Heat Riser": {
        "cost": 3000,
        "effect": "Increase 1 ally's Attack, Defense and Agility for 3 turns.",
        "element": "輔助",
        "fuse": ["Raphael", "Magatsu-Izanagi Picaro"],
        "personas": {
            "Lucifer": 96,
            "Magatsu-Izanagi": 50,
            "Magatsu-Izanagi Picaro": 54,
            "Raphael": 80,
            "Satanael": 97
        }
    },
    "Heat Up": {
        "effect": "Recover 5% HP and 10 SP at the start of preemptive turn.",
        "element": "被動",
        "personas": {
            "Ariadne Picaro": 44,
            "Belial": 72,
            "Flauros": 30,
            "Mara": 77,
            "Thor": 68
        }
    },
    "Heat Wave": {
        "cost": 20,
        "effect": "Deal heavy Phys damage to all foes.",
        "element": "物理",
        "personas": {
            "Dionysus": 0,
            "Garuda": 0,
            "Kurama Tengu": 0,
            "Oberon": 0,
            "Okuninushi": 49,
            "Ose": 47
        }
    },
    "High Counter": {
        "effect": "20% chance of reflecting Phys attacks.",
        "element": "被動",
        "personas": {
            "Asura-Ou": 80,
            "Cerberus": 57,
            "Dakini": 52,
            "Hope Diamond": 0,
            "Kaguya Picaro": 0,
            "Kali": 80,
            "Siegfried": 0,
            "Surt": 61,
            "Thor": 0
        },
        "talk": "Kali"
    },
    "Fortified Moxy": {
        "effect": "Increase critical rate when beginning battle with preemptive turn.",
        "element": "被動",
        "personas": {
            "Ardha": 89,
            "Ariadne": 32,
            "Hecatoncheires": 46,
            "Lucifer": 97,
            "Neko Shogun": 36,
            "Thanatos": 69
        }
    },
    "Hysterical Slap": {
        "cost": 9,
        "effect": "Deal medium Phys damage and inflict Rage (medium odds) to 1 foe.",
        "element": "物理",
        "personas": {
            "Kumbhanda": 0,
            "Kushinada-Hime": 0,
            "Nekomata": 18,
            "Yaksini": 0
        },
        "talk": "Kumbhanda"
    },
    "Ice Age": {
        "cost": 5400,
        "effect": "Deal severe Ice damage to all foes.",
        "element": "冰凍",
        "personas": {
            "Mother Harlot": 81,
            "Satan": 0
        }
    },
    "Ice Amp": {
        "effect": "Strengthen Ice attacks by 50%.",
        "element": "被動",
        "personas": {
            "Black Frost": 70,
            "Gabriel": 82,
            "King Frost": 67,
            "Mother Harlot": 82
        }
    },
    "Ice Boost": {
        "effect": "Strengthen Ice attacks by 25%.",
        "element": "被動",
        "fuse": "Lachesis",
        "personas": {
            "Byakko": 51,
            "Lachesis": 40
        }
    },
    "Ice Break": {
        "cost": 1500,
        "effect": "Negate Ice resistances of all foes.",
        "element": "輔助",
        "fuse": "Andras",
        "personas": {
            "Andras": 15,
            "Belphegor": 39,
            "Jack Frost": 0,
            "King Frost": 0
        }
    },
    "Ice Wall": {
        "cost": 1800,
        "effect": "Create a shield on 1 ally to reduce damage of Ice attacks for 3 turns.",
        "element": "輔助",
        "personas": {
            "Apsaras": 0,
            "Bicorn": 7,
            "Cu Chulainn": 0,
            "Onmoraki": 0
        },
        "talk": "Onmoraki"
    },
    "Blazing Hell": {
        "cost": 5400,
        "effect": "Deal severe Fire damage to all foes.",
        "element": "火炎",
        "personas": {
            "Attis": 88,
            "Lucifer": 0,
            "Mada": 87,
            "Zaou-Gongen": 86
        }
    },
    "Inferno": {
        "cost": 4800,
        "effect": "Deal severe Fire damage to 1 foe.",
        "element": "火炎",
        "personas": {
            "Surt": 64
        }
    },
    "Insta-Heal": {
        "effect": "Recover from an ailment in 1 turn.",
        "element": "被動",
        "personas": {
            "Ishtar": 87,
            "Lucifer": 98,
            "Messiah Picaro": 91
        },
        fuse: "Messiah Picaro"
    },
    "Invigorate 1": {
        "effect": "Recover 3 SP each turn in battle.",
        "element": "被動",
        "fuse": "Clotho",
        "personas": {
            "Clotho": 32,
            "Neko Shogun": 31
        }
    },
    "Invigorate 2": {
        "effect": "Recover 5 SP each turn in battle.",
        "element": "被動",
        "fuse": "Barong",
        "personas": {
            "Barong": 54,
            "Hope Diamond": 0
        }
    },
    "Invigorate 3": {
        "effect": "Recover 7 SP each turn in battle.",
        "element": "被動",
        "fuse": "Throne",
        "personas": {
            "Ardha": 0,
            "Messiah": 84,
            "Satan": 95,
            "Throne": 0
        }
    },
    "Kouga": {
        "cost": 800,
        "effect": "Deal medium Bless damage to 1 foe.",
        "element": "祝福",
        "personas": {
            "Mithra": 0,
            "Stone of Scone": 0,
            "Unicorn": 43
        },
        "talk": "Unicorn"
    },
    "Kougaon": {
        "cost": 1200,
        "effect": "Deal heavy Bless damage to 1 foe.",
        "element": "祝福",
        "fuse": "Horus",
        "personas": {
            "Dominion": 0,
            "Emperor's Amulet": 0,
            "Horus": 0,
            "Sraosha": 0
        }
    },
    "Kouha": {
        "cost": 400,
        "effect": "Deal weak Bless damage to 1 foe.",
        "element": "祝福",
        "personas": {
            "Angel": 13
        },
        "talk": "Archangel"
    },
    "Lucky Punch": {
        "cost": 6,
        "effect": "Deal minuscule Phys damage to 1 foe. High critical rate.",
        "element": "物理",
        "fuse": "Obariyon",
        "personas": {
            "Inugami": 17,
            "Obariyon": 9,
            "Sudama": 0
        }
    },
    "Lullaby": {
        "cost": 1200,
        "effect": "Inflict Sleep (medium odds) to all foes.",
        "element": "異常",
        "fuse": "Lilim",
        "personas": {
            "Kikuri-Hime": 0,
            "Lakshmi": 0,
            "Titania": 0
        }
    },
    "Lunge": {
        "cost": 5,
        "effect": "Deal weak Phys damage to 1 foe.",
        "element": "物理",
        "personas": {
            "Agathion": 4,
            "Bicorn": 0,
            "Kelpie": 0,
            "Mandrake": 4,
            "Slime": 0
        },
        "talk": "Bicorn"
    },
    "Mabaisudi": {
        "cost": 800,
        "effect": "Cure Burn/Freeze/Shock of party.",
        "element": "回復",
        "personas": {
            "Hariti": 0,
            "Lachesis": 0,
            "Principality": 32
        }
    },
    "Mabufu": {
        "cost": 1000,
        "effect": "Deal weak Ice damage to all foes.",
        "element": "冰凍",
        "fuse": "Sui-Ki",
        "personas": {
            "Andras": 14,
            "Genbu": 10,
            "Jack Frost": 12,
            "Koropokkuru": 14,
            "Regent": 0,
            "Sui-Ki": 0
        },
        "talk": "Sui-Ki"
    },
    "Mabufudyne": {
        "cost": 2200,
        "effect": "Deal heavy Ice damage to all foes.",
        "element": "冰凍",
        "fuse": "Gabriel, Lilith",
        "personas": {
            "Black Frost": 0,
            "Crystal Skull": 0,
            "Gabriel": 0,
            "Lilith": 0,
            "Michael": 0,
            "Mother Harlot": 0,
            "Seiryu": 65,
            "Yamata-no-Orochi": 0
        },
        "talk": "Yamata-no-Orochi"
    },
    "Mabufula": {
        "cost": 1600,
        "effect": "Deal medium Ice damage to all foes.",
        "element": "冰凍",
        "fuse": "Belphegor",
        "personas": {
            "Belphegor": 41,
            "Byakko": 0,
            "Kushinada-Hime": 0,
            "Lachesis": 38,
            "Lilim": 37,
            "Orlov": 0,
            "Skadi": 0,
            "Sui-Ki": 28
        },
        "talk": "Kushinada-Hime"
    },
    "Maeiga": {
        "cost": 1600,
        "effect": "Deal medium Curse damage to all foes.",
        "element": "咒怨",
        "fuse": "Pazuzu",
        "personas": {
            "Arahabaki": 38,
            "Orlov": 0,
            "Pazuzu": 0,
            "White Rider": 42
        }
    },
    "Maeigaon": {
        "cost": 2200,
        "effect": "Deal heavy Curse damage to all foes.",
        "element": "咒怨",
        "fuse": "Thanatos Picaro",
        "personas": {
            "Beelzebub": 0,
            "Black Rider": 0,
            "Crystal Skull": 0,
            "Mara": 76,
            "Nebiros": 64,
            "Satanael": 0,
            "Thanatos": 0,
            "Thanatos Picaro": 0
        },
        "talk": "Mara"
    },
    "Maeiha": {
        "cost": 1000,
        "effect": "Deal weak Curse damage to all foes.",
        "element": "咒怨",
        "fuse": "Choronzon",
        "personas": {
            "Choronzon": 29,
            "Nue": 0,
            "Regent": 0
        }
    },
    "Mafrei": {
        "cost": 1000,
        "effect": "Deal weak Nuclear damage to all foes.",
        "element": "核熱",
        "fuse": "Suzaku",
        "personas": {
            "Makami": 17,
            "Regent": 0,
            "Suzaku": 22
        }
    },
    "Mafreidyne": {
        "cost": 2200,
        "effect": "Deal heavy Nuclear damage to all foes.",
        "element": "核熱",
        "fuse": "Bishamonten",
        "personas": {
            "Asura-Ou": 79,
            "Bishamonten": 69,
            "Crystal Skull": 0,
            "Titania": 58,
            "Trumpeter": 0
        }
    },
    "Mafreila": {
        "cost": 1600,
        "effect": "Deal medium Nuclear damage to all foes.",
        "element": "核熱",
        "personas": {
            "Ananta": 0,
            "Mithras": 0,
            "Orlov": 0,
            "Thoth": 40
        },
        "talk": "Mithras"
    },
    "Magaru": {
        "cost": 800,
        "effect": "Deal small Wind damage to all foes.",
        "element": "疾風",
        "fuse": "Sudama",
        "personas": {
            "High Pixie": 20,
            "Nekomata": 0,
            "Regent": 0,
            "Sudama": 0
        }
    },
    "Magarudyne": {
        "cost": 2000,
        "effect": "Deal heavy Wind damage to all foes.",
        "element": "疾風",
        "personas": {
            "Baal": 0,
            "Crystal Skull": 0,
            "Garuda": 57,
            "Kurama Tengu": 60,
            "Lilith": 62,
            "Magatsu-Izanagi Picaro": 49,
            "Quetzalcoatl": 67,
            "Vishnu": 0
        },
        "talk": "Baal"
    },
    "Magarula": {
        "cost": 1400,
        "effect": "Deal medium Wind damage to all foes.",
        "element": "疾風",
        "personas": {
            "Fortuna": 0,
            "Narcissus": 0,
            "Orlov": 0,
            "Quetzalcoatl": 0,
            "Sandman": 28,
            "Scathach": 0
        },
        "talk": "Fuu-Ki"
    },
    "Magatsu Mandala": {
        "cost": 3000,
        "dlc": true,
        "effect": "Deal heavy Curse damage to all foes and inflict Confuse/Fear/Despair (medium odds).",
        "element": "咒怨",
        "personas": {
            "Magatsu-Izanagi": 0,
            "Magatsu-Izanagi Picaro": 0
        },
        "unique": "Magatsu-Izanagi"
    },
    "Magic Ability": {
        "effect": "Strengthen all magical attacks by 25%.",
        "element": "被動",
        "personas": {},
        "note": "Available from Network Fusion"
    },
    "Mahama": {
        "cost": 1800,
        "effect": "Small chance of instantly killing all foes.",
        "element": "祝福",
        "personas": {
            "Clotho": 0,
            "Mithra": 0,
            "Unicorn": 0
        },
        "talk": "Power"
    },
    "Mahamaon": {
        "cost": 3400,
        "effect": "medium chance of instantly killing all foes.",
        "element": "祝福",
        "fuse": "Melchizedek",
        "personas": {
            "Asura-Ou": 0,
            "Dominion": 72,
            "Melchizedek": 64,
            "Metatron": 0,
            "Michael": 90,
            "Sandalphon": 0,
            "Sraosha": 0,
            "Throne": 0,
            "Vasuki": 0
        }
    },
    "Makajam": {
        "cost": 500,
        "effect": "Inflict Forget (high odds) to 1 foe.",
        "element": "異常",
        "fuse": "Makami",
        "personas": {
            "Clotho": 0,
            "Kaiwan": 0,
            "Koropokkuru": 0,
            "Kusi Mitama": 0,
            "Makami": 18
        }
    },
    "Makajamon": {
        "cost": 1200,
        "effect": "Inflict Forget (medium odds) to all foes.",
        "element": "異常",
        "personas": {
            "Clotho": 29,
            "Kaiwan": 39,
            "Mothman": 37,
            "Ongyo-Ki": 0,
            "Orobas": 21,
            "Principality": 0,
            "Queen Mab": 0
        },
        "talk": "Mothman"
    },
    "Makara Break": {
        "cost": 1800,
        "effect": "Remove magic-repellent shields from all foes.",
        "element": "輔助",
        "personas": {
            "Lilith": 0,
            "Queen Mab": 46,
            "Titania": 0,
            "Yatagarasu": 0
        }
    },
    "Makarakarn": {
        "cost": 3600,
        "effect": "Create a shield on 1 ally to repel 1 magical attack.",
        "element": "輔助",
        "fuse": "Abaddon",
        "personas": {
            "Abaddon": 0,
            "Arahabaki": 0,
            "Asterius Picaro": 66,
            "Isis": 32,
            "Raja Naga": 58,
            "Seiryu": 67,
            "Vasuki": 73
        }
    },
    "Makouga": {
        "cost": 1600,
        "effect": "Deal medium Bless damage to all foes.",
        "element": "祝福",
        "fuse": "Daisoujou",
        "personas": {
            "Daisoujou": 0,
            "Mithra": 34,
            "Orlov": 0,
            "Power": 43,
            "Principality": 0
        }
    },
    "Makougaon": {
        "cost": 2200,
        "effect": "Deal heavy Bless damage to all foes.",
        "element": "祝福",
        "fuse": "Dominion",
        "personas": {
            "Crystal Skull": 0,
            "Cybele": 0,
            "Dominion": 70,
            "Metatron": 0,
            "Sraosha": 81,
            "Throne": 73
        },
        "talk": "Dominion"
    },
    "Makouha": {
        "cost": 1000,
        "effect": "Deal weak Bless damage to all foes.",
        "element": "祝福",
        "fuse": "Anubis",
        "personas": {
            "Anubis": 0,
            "Archangel": 19,
            "Nigi Mitama": 0,
            "Regent": 0
        }
    },
    "Mamudo": {
        "cost": 1800,
        "effect": "Small chance of instantly killing all foes.",
        "element": "咒怨",
        "personas": {
            "Leanan Sidhe": 21,
            "Nue": 24,
            "Pisaca": 30
        }
    },
    "Mamudoon": {
        "cost": 3400,
        "effect": "medium chance of instantly killing all foes.",
        "element": "咒怨",
        "fuse": "Alice",
        "personas": {
            "Alice": 0,
            "Beelzebub": 0,
            "Belial": 0,
            "Black Rider": 0,
            "Hell Biker": 44,
            "Lilith": 64,
            "Mother Harlot": 0,
            "Nebiros": 0,
            "Thanatos": 0,
            "Thanatos Picaro": 0
        }
    },
    "Mapsi": {
        "cost": 1000,
        "effect": "Deal weak Psy damage to all foes.",
        "element": "念動",
        "personas": {
            "Leanan Sidhe": 22,
            "Regent": 0,
            "Shiki-Ouji": 22
        },
        "talk": "Shiki-Ouji"
    },
    "Mapsiodyne": {
        "cost": 2200,
        "effect": "Deal heavy Psy damage to all foes.",
        "element": "念動",
        "personas": {
            "Crystal Skull": 0,
            "Forneus": 67,
            "Kali": 81,
            "Kohryu": 0,
            "Parvati": 59
        },
        "talk": "Forneus"
    },
    "Mapsio": {
        "cost": 1600,
        "effect": "Deal medium Psy damage to all foes.",
        "element": "念動",
        "fuse": "Kaiwan",
        "personas": {
            "Kaiwan": 40,
            "Okuninushi": 0,
            "Orlov": 0,
            "Red Rider": 0
        }
    },
    "Maragi": {
        "cost": 1000,
        "effect": "Deal weak Fire damage to all foes.",
        "element": "火炎",
        "fuse": "Orobas",
        "personas": {
            "Eligor": 0,
            "Hua Po": 13,
            "Orobas": 0,
            "Regent": 0
        }
    },
    "Maragidyne": {
        "cost": 2200,
        "effect": "Deal heavy Fire damage to all foes.",
        "element": "火炎",
        "fuse": "Mara, Orpheus Picaro",
        "personas": {
            "Asterius": 0,
            "Asterius Picaro": 0,
            "Attis": 0,
            "Belial": 71,
            "Crystal Skull": 0,
            "Dionysus": 65,
            "Lilith": 65,
            "Mara": 0,
            "Surt": 60,
            "Zaou-Gongen": 0
        },
        "talk": "Lilith"
    },
    "Maragion": {
        "cost": 1600,
        "effect": "Deal medium Fire damage to all foes.",
        "element": "火炎",
        "fuse": "Belial",
        "personas": {
            "Decarabia": 33,
            "Hell Biker": 42,
            "Lamia": 30,
            "Orlov": 0,
            "Orpheus": 29,
            "Orpheus Picaro": 0,
            "Scathach": 46
        }
    },
    "Marakukaja": {
        "cost": 2400,
        "effect": "Increase party's Defense for 3 turns.",
        "element": "輔助",
        "personas": {
            "Ananta": 47,
            "Asura-Ou": 0,
            "Kikuri-Hime": 0,
            "Lachesis": 35,
            "Naga": 29,
            "Odin": 0,
            "Orpheus": 30,
            "Seiryu": 0
        },
        "talk": "Sarasvati"
    },
    "Marakunda": {
        "cost": 2400,
        "effect": "Decrease all foes' Defense for 3 turns.",
        "element": "輔助",
        "fuse": "Girimehkala",
        "personas": {
            "Ara Mitama": 33,
            "Girimehkala": 0,
            "Kaiwan": 41,
            "Orobas": 19
        }
    },
    "Marin Karin": {
        "cost": 500,
        "effect": "Inflict Brainwash (high odds) to 1 foe.",
        "element": "異常",
        "personas": {
            "Forneus": 0,
            "Leanan Sidhe": 20,
            "Mokoi": 11,
            "Nebiros": 0,
            "Succubus": 0,
            "Suzaku": 0
        },
        "talk": "Lilim"
    },
    "Masukukaja": {
        "cost": 2400,
        "effect": "Increase party's Agility for 3 turns.",
        "element": "輔助",
        "fuse": "Power",
        "personas": {
            "Anzu": 0,
            "Fortuna": 0,
            "Garuda": 54,
            "Horus": 52,
            "Jatayu": 0,
            "Neko Shogun": 0,
            "Power": 45,
            "Seth": 0,
            "Siegfried": 0,
            "White Rider": 43
        },
        "talk": "Melchizedek"
    },
    "Masukunda": {
        "cost": 2400,
        "effect": "Decrease all foes' Agility for 3 turns.",
        "element": "輔助",
        "fuse": "Forneus",
        "personas": {
            "Bugs": 0,
            "Forneus": 0,
            "Ganesha": 57,
            "Kurama Tengu": 0,
            "Lilim": 0,
            "Thoth": 0
        }
    },
    "Matarukaja": {
        "cost": 2400,
        "effect": "Increase party's Attack power for 3 turns.",
        "element": "輔助",
        "fuse": "Ose",
        "personas": {
            "Baal": 0,
            "Cu Chulainn": 69,
            "Futsunushi": 0,
            "Jikokuten": 30,
            "Koumokuten": 52,
            "Kushinada-Hime": 44,
            "Mot": 0,
            "Oberon": 68,
            "Okuninushi": 0,
            "Orpheus Picaro": 33,
            "Orthrus": 26,
            "Ose": 45,
            "Scathach": 48,
            "Valkyrie": 47
        }
    },
    "Matarunda": {
        "cost": 2400,
        "effect": "Decrease all foes' Attack power for 3 turns.",
        "element": "輔助",
        "personas": {
            "Belial": 0,
            "Black Ooze": 0,
            "Hanuman": 0,
            "Orpheus Picaro": 0,
            "Queen Mab": 44,
            "Rangda": 51,
            "Sarasvati": 53,
            "Suzaku": 24
        },
        "talk": "Rangda"
    },
    "Mazio": {
        "cost": 1000,
        "effect": "Deal weak Electric damage to all foes.",
        "element": "電擊",
        "fuse": "Shiisaa",
        "personas": {
            "Ame-no-Uzume": 0,
            "Regent": 0
        }
    },
    "Maziodyne": {
        "cost": 2200,
        "effect": "Deal heavy Electric damage to all foes.",
        "element": "電擊",
        "personas": {
            "Barong": 57,
            "Crystal Skull": 0,
            "Gabriel": 0,
            "Ishtar": 88,
            "Magatsu-Izanagi": 45,
            "Mot": 0,
            "Oberon": 69,
            "Raja Naga": 59,
            "Shiva": 0,
            "Thor": 67
        },
        "talk": "Thor"
    },
    "Mazionga": {
        "cost": 1600,
        "effect": "Deal medium Electric damage to all foes.",
        "element": "電擊",
        "fuse": "Atropos",
        "personas": {
            "Atropos": 0,
            "Izanagi": 24,
            "Izanagi Picaro": 27,
            "Mothman": 0,
            "Naga": 28,
            "Orlov": 0,
            "Queen Mab": 0,
            "Take-Minakata": 30,
            "Yurlungur": 0
        },
        "talk": "Queen Mab"
    },
    "Me Patra": {
        "cost": 800,
        "effect": "Cure Dizzy/Forget/Sleep/Hunger of party.",
        "element": "回復",
        "fuse": "Nigi Mitama",
        "personas": {
            "Clotho": 0,
            "Daisoujou": 46,
            "Nigi Mitama": 23,
            "Sarasvati": 0
        }
    },
    "Media": {
        "cost": 700,
        "effect": "Slightly restore party's HP.",
        "element": "回復",
        "personas": {
            "Apsaras": 13,
            "High Pixie": 0,
            "Kusi Mitama": 0,
            "Nigi Mitama": 0,
            "Queen's Necklace": 0
        }
    },
    "Mediarahan": {
        "cost": 3000,
        "effect": "Fully restore party's HP.",
        "element": "回復",
        "fuse": "Titania",
        "personas": {
            "Cybele": 0,
            "Ishtar": 0,
            "Kohryu": 0,
            "Lakshmi": 70,
            "Titania": 61,
            "Yatagarasu": 59
        }
    },
    "Mediarama": {
        "cost": 1200,
        "effect": "Moderately restore party's HP.",
        "element": "回復",
        "fuse": "Sarasvati",
        "personas": {
            "Atropos": 41,
            "Hariti": 44,
            "Kaguya": 0,
            "Kaguya Picaro": 0,
            "Kikuri-Hime": 41,
            "Kushinada-Hime": 0,
            "Narcissus": 54,
            "Principality": 31,
            "Sarasvati": 0
        },
        "talk": "Kikuri-Hime"
    },
    "Megaton Raid": {
        "cost": 16,
        "effect": "Deal severe Phys damage to 1 foe.",
        "element": "物理",
        "personas": {
            "Cerberus": 0,
            "King Frost": 0,
            "Melchizedek": 0,
            "Siegfried": 0,
            "Surt": 0,
            "Thor": 0
        },
        "talk": "Cerberus"
    },
    "Megido": {
        "cost": 1500,
        "effect": "Deal medium Almighty damage to all foes.",
        "element": "萬能",
        "personas": {
            "Horus": 0,
            "Thoth": 37,
            "Yurlungur": 0
        },
        "talk": "Thoth"
    },
    "Megidola": {
        "cost": 2400,
        "effect": "Deal heavy Almighty damage to all foes.",
        "element": "萬能",
        "fuse": "Pale Rider",
        "personas": {
            "Black Rider": 64,
            "Magatsu-Izanagi": 0,
            "Magatsu-Izanagi Picaro": 0,
            "Mot": 0,
            "Pale Rider": 54
        }
    },
    "Megidolaon": {
        "cost": 3800,
        "effect": "Deal severe Almighty damage to all foes.",
        "element": "萬能",
        "personas": {
            "Alice": 82,
            "Beelzebub": 89,
            "Messiah": 0,
            "Messiah Picaro": 0,
            "Metatron": 91,
            "Michael": 91,
            "Mot": 76,
            "Nebiros": 68,
            "Satanael": 0,
            "Shiva": 86,
            "Uriel": 84,
            "Vishnu": 0
        },
        "talk": "Mot"
    },
    "Memory Blow": {
        "cost": 15,
        "effect": "Deal light Phys damage and inflict Forget (low odds) to all foes.",
        "element": "物理",
        "fuse": "Jikokuten",
        "personas": {
            "Eligor": 20,
            "Jikokuten": 0,
            "Naga": 0,
            "Oni": 23,
            "Quetzalcoatl": 0
        }
    },
    "Concentrate": {
        "cost": 1500,
        "effect": "Multiply user's next magical attack damage by 2.5.",
        "element": "輔助",
        "fuse": "Mot",
        "personas": {
            "Alice": 83,
            "Atropos": 45,
            "Beelzebub": 86,
            "Belphegor": 44,
            "Chi You": 92,
            "Kohryu": 79,
            "Metatron": 93,
            "Mot": 74,
            "Odin": 85,
            "Satan": 97
        }
    },
    "Mind Slice": {
        "cost": 19,
        "effect": "Deal medium Phys damage and inflict Confuse (low odds) to all foes.",
        "element": "物理",
        "fuse": "Rakshasa",
        "personas": {
            "Rakshasa": 27
        }
    },
    "Miracle Punch": {
        "cost": 8,
        "effect": "Deal medium Phys damage to 1 foe. High critical rate.",
        "element": "物理",
        "fuse": "Ganesha",
        "personas": {
            "Ara Mitama": 0,
            "Ariadne": 0,
            "Ariadne Picaro": 0,
            "Black Frost": 0,
            "Bugs": 0,
            "Ganesha": 0
        },
        "talk": "Ganesha"
    },
    "Morning Star": {
        "cost": 5400,
        "effect": "Deal severe Almighty damage to all foes.",
        "element": "萬能",
        "personas": {
            "Lucifer": 94
        },
        "unique": "Lucifer"
    },
    "Mudo": {
        "cost": 800,
        "effect": "Small chance of instantly killing 1 foe.",
        "element": "咒怨",
        "personas": {
            "Nue": 21,
            "Onmoraki": 0,
            "Succubus": 12
        },
        "talk": "Nue"
    },
    "Mudo Boost": {
        "effect": "Increase success rate of instant death by Curse skills.",
        "element": "被動",
        "personas": {
            "Alice": 0,
            "Mother Harlot": 0,
            "Thanatos Picaro": 70
        }
    },
    "Mudoon": {
        "cost": 1500,
        "effect": "medium chance of instantly killing 1 foe.",
        "element": "咒怨",
        "personas": {
            "Anubis": 0,
            "Chernobog": 0,
            "Girimehkala": 0,
            "Hell Biker": 0,
            "Lilith": 0,
            "Pazuzu": 0,
            "Pisaca": 34,
            "Rangda": 53
        },
        "talk": "Girimehkala"
    },
    "Negative Pile": {
        "cost": 12,
        "effect": "Deal heavy Phys damage and inflict Despair (medium odds) to 1 foe.",
        "element": "物理",
        "personas": {
            "Legion": 0,
            "Red Rider": 42
        },
        "talk": "Lamia"
    },
    "Nuke Amp": {
        "effect": "Strengthen Nuclear attacks by 50%.",
        "element": "被動",
        "fuse": "Moloch",
        "personas": {
            "Bishamonten": 71,
            "Moloch": 65,
            "Titania": 60
        }
    },
    "Nuke Boost": {
        "effect": "Strengthen Nuclear attacks by 25%.",
        "element": "被動",
        "fuse": "Phoenix",
        "personas": {
            "Ananta": 49,
            "Phoenix": 27
        }
    },
    "Nuke Break": {
        "cost": 1500,
        "effect": "Negate Nuclear resistances of all foes.",
        "element": "輔助",
        "personas": {
            "Mithras": 42
        }
    },
    "Nuke Wall": {
        "cost": 1800,
        "effect": "Create a shield on 1 ally to reduce damage of Nuclear attacks for 3 turns.",
        "element": "輔助",
        "personas": {
            "Koumokuten": 53
        }
    },
    "Null Bless": {
        "effect": "Impart immunity against Bless attacks.",
        "element": "被動",
        "personas": {
            "Mother Harlot": 83
        }
    },
    "Null Brainwash": {
        "effect": "Impart immunity against Brainwash.",
        "element": "被動",
        "personas": {
            "Arahabaki": 0
        }
    },
    "Null Curse": {
        "effect": "Impart immunity against Curse attacks.",
        "element": "被動",
        "personas": {
            "Power": 46
        }
    },
    "Null Despair": {
        "effect": "Impart immunity against Despair.",
        "element": "被動",
        "personas": {
            "King Frost": 65,
            "Skadi": 0
        }
    },
    "Null Dizzy": {
        "effect": "Impart immunity against Dizzy.",
        "element": "被動",
        "personas": {
            "Legion": 42,
            "Matador": 0
        }
    },
    "Null Elec": {
        "effect": "Impart immunity against Electric attacks.",
        "element": "被動",
        "personas": {
            "Barong": 55
        }
    },
    "Null Fear": {
        "effect": "Impart immunity against Fear.",
        "element": "被動",
        "personas": {
            "Anubis": 39
        }
    },
    "Null Fire": {
        "effect": "Impart immunity against Fire attacks.",
        "element": "被動",
        "personas": {
            "Decarabia": 36
        }
    },
    "Null Forget": {
        "effect": "Impart immunity against Forget.",
        "element": "被動",
        "personas": {
            "Anzu": 29
        }
    },
    "Null Ice": {
        "effect": "Impart immunity against Ice attacks.",
        "element": "被動",
        "personas": {}
    },
    "Null Nuke": {
        "effect": "Impart immunity against Nuclear attacks.",
        "element": "被動",
        "personas": {
            "Sui-Ki": 26
        }
    },
    "Null Confuse": {
        "effect": "Impart immunity against Confuse.",
        "element": "被動",
        "personas": {}
    },
    "Null Phys": {
        "effect": "Impart immunity against Phys attacks.",
        "element": "被動",
        "personas": {
            "Izanagi Picaro": 25
        }
    },
    "Null Psy": {
        "effect": "Impart immunity against Psy attacks.",
        "element": "被動",
        "personas": {}
    },
    "Null Rage": {
        "effect": "Impart immunity against Rage.",
        "element": "被動",
        "personas": {
            "Belphegor": 38,
            "Byakko": 54,
            "Daisoujou": 47
        }
    },
    "Null Sleep": {
        "effect": "Impart immunity against Sleep.",
        "element": "被動",
        "personas": {
            "Kushinada-Hime": 45,
            "Sandman": 27,
            "Sarasvati": 51
        }
    },
    "Null Wind": {
        "effect": "Impart immunity against Wind attacks.",
        "element": "被動",
        "personas": {
            "Yatagarasu": 62
        }
    },
    "One-shot Kill": {
        "cost": 17,
        "effect": "Deal severe Gun damage to 1 foe. High critical rate.",
        "element": "槍械",
        "fuse": "Seth",
        "personas": {
            "Black Frost": 0,
            "Mara": 0,
            "Seth": 0,
            "Thanatos": 68,
            "Thanatos Picaro": 72
        }
    },
    "Oni Kagura": {
        "cost": 16,
        "effect": "Deal medium Phys damage and inflict Rage (low odds) to all foes.",
        "element": "物理",
        "fuse": "Yamata-no-Orochi",
        "personas": {
            "Cu Chulainn": 0,
            "Ose": 0,
            "Shiki-Ouji": 27,
            "White Rider": 0,
            "Yaksini": 22,
            "Yamata-no-Orochi": 0
        },
        "talk": "Ose"
    },
    "Oratorio": {
        "cost": 3800,
        "effect": "Fully restore party's HP and negate all -nda debuffs.",
        "element": "回復",
        "personas": {
            "Messiah": 0,
            "Messiah Picaro": 0
        },
        "unique": "Messiah"
    },
    "Confuse Boost": {
        "effect": "Increase chance of inflicting Confuse.",
        "element": "被動",
        "fuse": "Onmoraki",
        "personas": {
            "Inugami": 19,
            "Onmoraki": 15
        }
    },
    "Panta Rhei": {
        "cost": 4200,
        "effect": "Deal severe Wind damage to 1 foe",
        "element": "疾風",
        "personas": {
            "Baal": 77
        }
    },
    "Patra": {
        "cost": 400,
        "effect": "Cure Dizzy/Forget/Sleep/Hunger of 1 ally.",
        "element": "回復",
        "fuse": "Genbu",
        "personas": {
            "Genbu": 8,
            "Pixie": 3,
            "Silky": 9
        },
        "talk": "Silky"
    },
    "Charge": {
        "cost": 1500,
        "effect": "Multiply user's next Phys attack damage by 2.5.",
        "element": "輔助",
        "fuse": "Cu Chulainn",
        "personas": {
            "Ariadne": 36,
            "Ariadne Picaro": 48,
            "Baal": 79,
            "Cu Chulainn": 71,
            "Dakini": 55,
            "Futsunushi": 78,
            "Ganesha": 60,
            "Hecatoncheires": 48,
            "Mara": 74,
            "Raphael": 0,
            "Setanta": 34,
            "Siegfried": 70,
            "Vishnu": 86,
            "Yoshitsune": 0
        }
    },
    "Pressing Stance": {
        "effect": "Reduce hit rate by 2/3 of all incoming attack when being ambushed.",
        "element": "被動",
        "personas": {
            "Ongyo-Ki": 0,
            "Red Rider": 45,
            "Yatagarasu": 60,
            "Yoshitsune": 81
        }
    },
    "Psi": {
        "cost": 400,
        "effect": "Deal weak Psy damage to 1 foe.",
        "element": "念動",
        "personas": {
            "Archangel": 0,
            "Kodama": 12,
            "Matador": 0
        },
        "talk": "Kodama"
    },
    "Psy Amp": {
        "effect": "Strengthen Psy attacks by 50%.",
        "element": "被動",
        "personas": {
            "Kohryu": 80
        }
    },
    "Psy Boost": {
        "effect": "Strengthen Psy attacks by 25%.",
        "element": "被動",
        "personas": {
            "Okuninushi": 45
        }
    },
    "Psy Break": {
        "cost": 1500,
        "effect": "Negate Psy resistances of all foes.",
        "element": "輔助",
        "fuse": "Red Rider",
        "personas": {
            "Okuninushi": 46,
            "Red Rider": 0
        }
    },
    "Psy Wall": {
        "cost": 1800,
        "effect": "Create a shield on 1 ally to reduce damage of Psy attacks for 3 turns.",
        "element": "輔助",
        "personas": {
            "Oberon": 70,
            "Thoth": 39
        },
        "talk": "Oberon"
    },
    "Psycho Blast": {
        "cost": 5400,
        "effect": "Deal severe Psy damage to all foes.",
        "element": "念動",
        "personas": {
            "Chi You": 89,
            "Shiva": 88
        }
    },
    "Psycho Force": {
        "cost": 4800,
        "effect": "Deal severe Psy damage to 1 foe.",
        "element": "念動",
        "personas": {
            "Chi You": 0,
            "Kohryu": 0,
            "Shiva": 0
        }
    },
    "Psiodyne": {
        "cost": 1200,
        "effect": "Deal heavy Psy damage to 1 foe.",
        "element": "念動",
        "fuse": "Parvati",
        "personas": {
            "Bugs": 0,
            "Dionysus": 0,
            "Emperor's Amulet": 0,
            "Forneus": 0,
            "Kali": 0,
            "Moloch": 0,
            "Parvati": 0
        },
        "talk": "Moloch"
    },
    "Psio": {
        "cost": 800,
        "effect": "Deal medium Psy damage to 1 foe.",
        "element": "念動",
        "personas": {
            "Kaiwan": 0,
            "Leanan Sidhe": 0,
            "Legion": 39,
            "Neko Shogun": 0,
            "Shiki-Ouji": 26,
            "Stone of Scone": 0
        },
        "talk": "Kaiwan"
    },
    "Pulinpa": {
        "cost": 500,
        "effect": "Inflict Confuse (high odds) to 1 foe.",
        "element": "異常",
        "personas": {
            "Choronzon": 0,
            "Inugami": 0,
            "Mandrake": 0,
            "Nue": 22,
            "Onmoraki": 14
        },
        "talk": "Mandrake"
    },
    "Abyssal Wings": {
        "cost": 3000,
        "dlc": true,
        "effect": "Deal severe Curse damage to all foes.",
        "element": "咒怨",
        "personas": {
            "Tsukiyomi": 0,
            "Tsukiyomi Picaro": 0
        },
        "unique": "Tsukiyomi"
    },
    "Rage Boost": {
        "effect": "Increase chance of inflicting Rage.",
        "element": "被動",
        "fuse": "Kumbhanda",
        "personas": {
            "Ara Mitama": 35,
            "Koppa Tengu": 14,
            "Kumbhanda": 46,
            "Red Rider": 46
        }
    },
    "Myriad Slashes": {
        "cost": 20,
        "effect": "Deal 2 to 3 times medium Phys damage to 1 foe.",
        "element": "物理",
        "fuse": "Ongyo-Ki",
        "personas": {
            "Belial": 74,
            "Chernobog": 67,
            "Futsunushi": 0,
            "Odin": 0,
            "Ongyo-Ki": 0,
            "Tsukiyomi": 0,
            "Tsukiyomi Picaro": 0,
            "Uriel": 0
        }
    },
    "Rainy Play": {
        "effect": "Greatly increase evasion under rainy day or special weather warning.",
        "element": "被動",
        "personas": {
            "Choronzon": 33,
            "Jatayu": 36,
            "Lakshmi": 71,
            "Nigi Mitama": 24
        }
    },
    "Rakukaja": {
        "cost": 800,
        "effect": "Increase 1 ally's Defense for 3 turns.",
        "element": "輔助",
        "fuse": "Saki Mitama",
        "personas": {
            "Agathion": 6,
            "Berith": 0,
            "Izanagi Picaro": 0,
            "Kin-Ki": 0,
            "Lamia": 0,
            "Queen's Necklace": 0,
            "Saki Mitama": 8
        },
        "talk": "Agathion"
    },
    "Rakunda": {
        "cost": 800,
        "effect": "Decrease 1 foe's Defense for 3 turns.",
        "element": "輔助",
        "personas": {
            "Andras": 0,
            "Genbu": 0,
            "Jack Frost": 13,
            "Jack-o'-Lantern": 0,
            "Jikokuten": 0,
            "Kodama": 0,
            "Koropokkuru": 12,
            "Leanan Sidhe": 0,
            "Queen's Necklace": 0
        },
        "talk": "Leanan Sidhe"
    },
    "Rampage": {
        "cost": 13,
        "effect": "Deal 1 to 3 times weak Phys damage to all foes.",
        "element": "物理",
        "fuse": "Oni",
        "personas": {
            "Choronzon": 0,
            "Ippon-Datara": 15,
            "Legion": 0,
            "Oni": 0,
            "Pisaca": 0,
            "Shiisaa": 18
        },
        "talk": "Oni"
    },
    "Rat Fang": {
        "cost": 10,
        "effect": "Deal medium Phys damage to 1 foe. More powerful when being ambushed.",
        "element": "物理",
        "personas": {
            "Neko Shogun": 33,
            "Orthrus": 24
        }
    },
    "Rebellion": {
        "cost": 500,
        "effect": "Increase 1 ally's critical rate for 3 turns.",
        "element": "輔助",
        "personas": {
            "Apsaras": 0,
            "Ara Mitama": 32,
            "Archangel": 18,
            "Cerberus": 56,
            "Dakini": 54,
            "Ganesha": 0,
            "Setanta": 32,
            "Succubus": 0
        }
    },
    "Recarm": {
        "cost": 800,
        "effect": "Revive 1 ally with 50% HP recovered.",
        "element": "回復",
        "fuse": "Leanan Sidhe",
        "personas": {
            "Phoenix": 25,
            "Queen's Necklace": 0
        }
    },
    "Regenerate 1": {
        "effect": "Restore 2% of max HP each turn in battle.",
        "element": "被動",
        "fuse": "Kin-Ki",
        "personas": {
            "Kin-Ki": 0,
            "Kusi Mitama": 15,
            "Rakshasa": 26
        }
    },
    "Regenerate 2": {
        "effect": "Recover 4% of max HP each turn in battle.",
        "element": "被動",
        "fuse": "Koumokuten",
        "personas": {
            "Cerberus": 58,
            "Hecatoncheires": 0,
            "Hope Diamond": 0,
            "Koumokuten": 0
        }
    },
    "Regenerate 3": {
        "effect": "Recover 6% of max HP each turn in battle.",
        "element": "被動",
        "fuse": "Quetzalcoatl",
        "personas": {
            "Futsunushi": 79,
            "Hanuman": 69,
            "Messiah": 82,
            "Ongyo-Ki": 78,
            "Quetzalcoatl": 66,
            "Satan": 0
        }
    },
    "Repel Bless": {
        "effect": "Repel Bless attacks.",
        "element": "被動",
        "personas": {}
    },
    "Repel Curse": {
        "effect": "Repel Curse attacks.",
        "element": "被動",
        "personas": {
            "Sandalphon": 78
        }
    },
    "Repel Elec": {
        "effect": "Repel Electric attacks.",
        "element": "被動",
        "personas": {
            "Mot": 77
        }
    },
    "Repel Fire": {
        "effect": "Repel Fire attacks.",
        "element": "被動",
        "personas": {
            "Black Frost": 71,
            "Vishnu": 87,
            "Yamata-no-Orochi": 66
        }
    },
    "Repel Ice": {
        "effect": "Repel Ice attacks.",
        "element": "被動",
        "personas": {
            "Beelzebub": 88,
            "Skadi": 60
        }
    },
    "Repel Nuke": {
        "effect": "Repel Nuclear attacks.",
        "element": "被動",
        "personas": {
            "Seiryu": 63,
            "Uriel": 83
        }
    },
    "Repel Phys": {
        "effect": "Repel Phys attacks.",
        "element": "被動",
        "personas": {
            "Chi You": 0,
            "Girimehkala": 51,
            "Kaguya": 22,
            "Kaguya Picaro": 31
        }
    },
    "Repel Psy": {
        "effect": "Repel Psy attacks.",
        "element": "被動",
        "personas": {}
    },
    "Repel Wind": {
        "effect": "Repel Wind attacks.",
        "element": "被動",
        "personas": {}
    },
    "Fortify Spirit": {
        "effect": "Reduce susceptibilities to all ailments.",
        "element": "被動",
        "personas": {
            "Chi You": 88,
            "Satan": 96,
            "Seth": 56,
            "Trumpeter": 61
        }
    },
    "Resist Bless": {
        "effect": "Reduce damage from Bless attacks.",
        "element": "被動",
        "personas": {
            "Anubis": 41
        }
    },
    "Resist Brainwash": {
        "effect": "Reduce susceptibility to Brainwash.",
        "element": "被動",
        "personas": {
            "Kelpie": 8
        }
    },
    "Resist Curse": {
        "effect": "Reduce damage from Curse attacks.",
        "element": "被動",
        "personas": {}
    },
    "Resist Despair": {
        "effect": "Reduce susceptibility to Despair.",
        "element": "被動",
        "personas": {
            "Makami": 19
        }
    },
    "Resist Dizzy": {
        "effect": "Reduce susceptibility to Dizzy.",
        "element": "被動",
        "personas": {
            "Ippon-Datara": 0,
            "Saki Mitama": 10
        }
    },
    "Resist Elec": {
        "effect": "Reduce damage from Electric attacks.",
        "element": "被動",
        "personas": {}
    },
    "Resist Fear": {
        "effect": "Reduce susceptibility to Fear.",
        "element": "被動",
        "personas": {
            "Kodama": 17,
            "Obariyon": 10,
            "Onmoraki": 17,
            "Zouchouten": 34
        }
    },
    "Resist Fire": {
        "effect": "Reduce damage from Fire attacks.",
        "element": "被動",
        "personas": {}
    },
    "Resist Forget": {
        "effect": "Reduce susceptibility to Forget.",
        "element": "被動",
        "personas": {
            "Genbu": 11,
            "Hua Po": 12,
            "Isis": 27
        }
    },
    "Resist Ice": {
        "effect": "Reduce damage from Ice attacks.",
        "element": "被動",
        "personas": {}
    },
    "Resist Nuke": {
        "effect": "Reduce damage from Nuclear attacks.",
        "element": "被動",
        "personas": {}
    },
    "Resist Confuse": {
        "effect": "Reduce susceptibility to Confuse.",
        "element": "被動",
        "personas": {
            "Pixie": 6,
            "Red Rider": 44
        }
    },
    "Resist Phys": {
        "effect": "Reduce damage from Phys attacks.",
        "element": "被動",
        "personas": {}
    },
    "Resist Psy": {
        "effect": "Reduce damage from Psy attacks.",
        "element": "被動",
        "personas": {
            "Fuu-Ki": 27
        }
    },
    "Resist Rage": {
        "effect": "Reduce susceptibility to Rage.",
        "element": "被動",
        "personas": {}
    },
    "Resist Sleep": {
        "effect": "Reduce susceptibility to Sleep.",
        "element": "被動",
        "personas": {
            "Jack-o'-Lantern": 7
        }
    },
    "Resist Wind": {
        "effect": "Reduce damage from Wind attacks.",
        "element": "被動",
        "personas": {}
    },
    "Revolution": {
        "cost": 500,
        "effect": "Increase all foes and allies' critical rate for 3 turns.",
        "element": "輔助",
        "personas": {
            "Baal": 0,
            "Hanuman": 0,
            "Koumokuten": 0,
            "Kumbhanda": 47,
            "Melchizedek": 62,
            "Yurlungur": 44
        }
    },
    "Riot Gun": {
        "cost": 24,
        "effect": "Deal severe Gun damage to all foes.",
        "element": "槍械",
        "fuse": "Vishnu",
        "personas": {
            "Satanael": 0,
            "Shiva": 85,
            "Vishnu": 90
        }
    },
    "Rising Slash": {
        "cost": 14,
        "effect": "Deal heavy Phys damage to 1 foe. More powerful under Baton Pass .",
        "element": "物理",
        "personas": {
            "Dakini": 0,
            "Izanagi": 21,
            "Izanagi Picaro": 24,
            "Lamia": 0,
            "Red Rider": 0,
            "Setanta": 31,
            "Valkyrie": 0
        },
        "talk": "Dakini"
    },
    "Salvation": {
        "cost": 4800,
        "effect": "Fully restore HP and cure all ailments of party except for unique status.",
        "element": "回復",
        "fuse": "Ishtar",
        "personas": {
            "Ardha": 90,
            "Attis": 0,
            "Cybele": 79,
            "Gabriel": 83,
            "Ishtar": 90
        }
    },
    "Samarecarm": {
        "cost": 1800,
        "effect": "Revive 1 ally with all HP recovered.",
        "element": "回復",
        "fuse": "Unicorn",
        "personas": {
            "Attis": 85,
            "Cybele": 0,
            "Hariti": 41,
            "Ishtar": 0,
            "Norn": 57,
            "Oberon": 71,
            "Sandalphon": 0,
            "Unicorn": 41
        }
    },
    "Samsara": {
        "cost": 4400,
        "effect": "High chance of instantly killing all foes.",
        "element": "祝福",
        "personas": {
            "Daisoujou": 43
        },
        "unique": "Daisoujou"
    },
    "Sharp Student": {
        "effect": "Lower odds of receiving critical hit.",
        "element": "被動",
        "fuse": "Zouchouten",
        "personas": {
            "Eligor": 0,
            "Ippon-Datara": 16,
            "Jack-o'-Lantern": 4,
            "Oni": 22,
            "Scathach": 0,
            "Silky": 10,
            "Sudama": 0,
            "Zouchouten": 33
        }
    },
    "Snipe": {
        "effect": "Strengthen Gun attacks by 25%.",
        "element": "被動",
        "personas": {
            "Jatayu": 35,
            "White Rider": 41
        }
    },
    "Shining Arrows": {
        "cost": 2200,
        "dlc": true,
        "effect": "Deal 4 to 8 times weak Bless damage to all foes.",
        "element": "祝福",
        "personas": {
            "Kaguya": 0,
            "Kaguya Picaro": 0
        },
        "unique": "Kaguya"
    },
    "Shock Boost": {
        "effect": "Increase chance of inflicting Shock.",
        "element": "被動",
        "fuse": "Baphomet",
        "personas": {
            "Ame-no-Uzume": 34,
            "Baphomet": 62,
            "Mothman": 0,
            "Raja Naga": 57
        }
    },
    "Skull Cracker": {
        "cost": 10,
        "effect": "Deal medium Phys damage and inflict Confuse (medium odds) to 1 foe.",
        "element": "物理",
        "fuse": "Nue",
        "personas": {
            "Mandrake": 7,
            "Mokoi": 0,
            "Mothman": 0,
            "Nue": 0,
            "Shiisaa": 0
        }
    },
    "Sledgehammer": {
        "cost": 10,
        "effect": "Deal medium Phys damage and inflict Dizzy (medium odds) to 1 foe.",
        "element": "物理",
        "fuse": "Ippon-Datara",
        "personas": {
            "Berith": 13,
            "Ippon-Datara": 0,
            "Kin-Ki": 28
        },
        "talk": "Ippon-Datara"
    },
    "Sleep Boost": {
        "effect": "Increase chance of inflicting Sleep.",
        "element": "被動",
        "fuse": "Sandman",
        "personas": {
            "Sandman": 29
        }
    },
    "Snap": {
        "cost": 9,
        "effect": "Deal medium Gun damage to 1 foe.",
        "element": "槍械",
        "personas": {
            "Koppa Tengu": 0,
            "Obariyon": 0,
            "Oni": 0,
            "Shiki-Ouji": 0
        },
        "talk": "Mokoi"
    },
    "Soul Chain": {
        "effect": "Recover 20 SP when performing Baton Pass .",
        "element": "被動",
        "personas": {}
    },
    "Speed Master": {
        "effect": "Automatic Sukukaja at the start of battle.",
        "element": "被動",
        "personas": {
            "Hell Biker": 0,
            "Jatayu": 38,
            "Kaiwan": 38,
            "Magatsu-Izanagi Picaro": 52,
            "Suzaku": 23
        }
    },
    "Spell Master": {
        "effect": "Half SP cost for magic skills.",
        "element": "被動",
        "personas": {
            "Ishtar": 89,
            "Kohryu": 82,
            "Lucifer": 95,
            "Mada": 91,
            "Tsukiyomi Picaro": 61,
            "Uriel": 86
        },
        fuse: "Tsukiyomi Picaro"
    },
    "Spirit Drain": {
        "cost": 300,
        "effect": "Drains SP from 1 foe.",
        "element": "萬能",
        "fuse": "Hariti",
        "personas": {
            "Abaddon": 0,
            "Arahabaki": 37,
            "Daisoujou": 0,
            "Hariti": 46,
            "Lilim": 36,
            "Lilith": 63,
            "Skadi": 59,
            "Tsukiyomi Picaro": 0
        }
    },
    "Stagnant Air": {
        "cost": 500,
        "effect": "Increase susceptibility to all ailments of all foes and allies.",
        "element": "萬能",
        "fuse": "Black Ooze",
        "personas": {
            "Black Ooze": 0,
            "Chernobog": 63,
            "Forneus": 66,
            "Kumbhanda": 0,
            "Moloch": 0,
            "Pisaca": 0
        }
    },
    "Beast Weaver": {
        "cost": 20,
        "dlc": true,
        "effect": "Deal grave Phys damage to 1 foe and user is debuffed with Tarunda.",
        "element": "物理",
        "personas": {
            "Ariadne": 0,
            "Ariadne Picaro": 0
        },
        "unique": "Ariadne"
    },
    "Sukukaja": {
        "cost": 800,
        "effect": "Increase 1 ally's Agility for 3 turns.",
        "element": "輔助",
        "personas": {
            "Isis": 0,
            "Kelpie": 9,
            "Matador": 0,
            "Orobas": 0,
            "Power": 0,
            "Queen's Necklace": 0
        },
        "talk": "Sudama"
    },
    "Sukunda": {
        "cost": 800,
        "effect": "Decrease 1 foe's Agility for 3 turns.",
        "element": "輔助",
        "personas": {
            "Arsene": 4,
            "Eligor": 19,
            "Mandrake": 5,
            "Obariyon": 0,
            "Queen's Necklace": 0,
            "Sandman": 25
        },
        "talk": "Obariyon"
    },
    "Survival Trick": {
        "effect": "Survive one instant death attack with 1 HP remaining.",
        "element": "被動",
        "personas": {
            "Abaddon": 77,
            "Alice": 84,
            "Belial": 70,
            "Forneus": 65,
            "Satanael": 0
        },
        "talk": "Abaddon"
    },
    "Swift Strike": {
        "cost": 17,
        "effect": "Deal 3 to 4 times weak Phys damage to all foes.",
        "element": "物理",
        "fuse": "Byakko",
        "personas": {
            "Byakko": 0,
            "Girimehkala": 0,
            "Hecatoncheires": 0,
            "Matador": 20,
            "Power": 42,
            "Rangda": 0,
            "Unicorn": 42,
            "Zouchouten": 35
        }
    },
    "Tarukaja": {
        "cost": 800,
        "effect": "Increase 1 ally's Attack power for 3 turns.",
        "element": "輔助",
        "fuse": "Eligor",
        "personas": {
            "Andras": 11,
            "Eligor": 0,
            "Fuu-Ki": 0,
            "Hecatoncheires": 0,
            "Inugami": 0,
            "Ippon-Datara": 0,
            "Izanagi": 0,
            "Kodama": 14,
            "Mokoi": 0,
            "Pixie": 5,
            "Queen's Necklace": 0,
            "Rakshasa": 0,
            "Shiki-Ouji": 0
        },
        "talk": "Eligor"
    },
    "Tarunda": {
        "cost": 800,
        "effect": "Decrease 1 foe's Attack power for 3 turns.",
        "element": "輔助",
        "personas": {
            "Bicorn": 0,
            "Hua Po": 11,
            "Incubus": 8,
            "Orpheus": 0,
            "Queen's Necklace": 0,
            "Suzaku": 0
        },
        "talk": "Slime"
    },
    "Taunt": {
        "cost": 500,
        "effect": "Inflict Rage (high odds) to 1 foe.",
        "element": "異常",
        "personas": {
            "Ara Mitama": 0,
            "High Pixie": 19,
            "Koppa Tengu": 13,
            "Shiki-Ouji": 0,
            "Thoth": 0
        },
        "talk": "Koppa Tengu"
    },
    "Tempest Slash": {
        "cost": 17,
        "effect": "Deal 3 to 5 times minuscule Phys damage to 1 foe.",
        "element": "物理",
        "fuse": "Scathach",
        "personas": {
            "Hanuman": 0,
            "Kumbhanda": 43,
            "Okuninushi": 0,
            "Ose": 43,
            "Scathach": 0
        },
        "talk": "Hanuman"
    },
    "Tentarafoo": {
        "cost": 1200,
        "effect": "Inflict Confuse (medium odds) to all foes.",
        "element": "異常",
        "personas": {
            "Ame-no-Uzume": 31,
            "Hell Biker": 41,
            "Kali": 0,
            "Mithras": 0,
            "Mothman": 35,
            "Pazuzu": 0,
            "Raja Naga": 0,
            "Sarasvati": 0
        }
    },
    "Terror Claw": {
        "cost": 8,
        "effect": "Deal medium Phys damage and inflict Fear (medium odds) to 1 foe.",
        "element": "物理",
        "fuse": "Kelpie",
        "personas": {
            "Kelpie": 10,
            "Nekomata": 0,
            "Zouchouten": 32
        },
        "talk": "Nekomata"
    },
    "Tetra Break": {
        "cost": 1800,
        "effect": "Remove physical-repellent shields from all foes.",
        "element": "輔助",
        "personas": {
            "Fuu-Ki": 0,
            "Hanuman": 67,
            "Legion": 40,
            "Mara": 0,
            "Mithras": 41,
            "Yurlungur": 47
        },
        "talk": "Legion"
    },
    "Tetraja": {
        "cost": 2400,
        "effect": "Create shields on party to nullify one instant death attack of Bless or Curse types.",
        "element": "輔助",
        "fuse": "Principality",
        "personas": {
            "Baal": 78,
            "Clotho": 27,
            "Fortuna": 0,
            "Ganesha": 55,
            "Kikuri-Hime": 43,
            "Norn": 56,
            "Principality": 0
        }
    },
    "Tetrakarn": {
        "cost": 3600,
        "effect": "Create a shield on 1 ally to repel 1 Phys attack.",
        "element": "輔助",
        "personas": {
            "Asterius": 60,
            "Bishamonten": 72,
            "Decarabia": 38
        }
    },
    "Thermopylae": {
        "cost": 3000,
        "effect": "Increase party's Attack, Defense and Agility for 3 turns. Only usable if the party is being ambushed.",
        "element": "輔助",
        "fuse": "Dionysus",
        "personas": {
            "Attis": 0,
            "Dionysus": 62,
            "Mithra": 38
        }
    },
    "Thunder Reign": {
        "cost": 4800,
        "effect": "Deal severe Electric damage to 1 foe.",
        "element": "電擊",
        "personas": {
            "Odin": 0
        }
    },
    "Ayamur": {
        "cost": 25,
        "effect": "Deal 3 times medium Phys damage to 1 foe. High critical rate.",
        "element": "物理",
        "personas": {
            "Baal": 80
        },
        "unique": "Baal"
    },
    "Titanomachia": {
        "cost": 3400,
        "dlc": true,
        "effect": "Deal severe Fire damage to all foes and inflict Fear (high odds).",
        "element": "火炎",
        "personas": {
            "Asterius": 0,
            "Asterius Picaro": 0
        },
        "unique": "Asterius"
    },
    "Touch n' Go": {
        "effect": "Apply Sukukaja when performing Baton Pass .",
        "element": "被動",
        "personas": {
            "Fortuna": 49,
            "Gabriel": 81,
            "Horus": 51
        }
    },
    "Trigger Happy": {
        "effect": "Increase critical rate of Gun attacks.",
        "element": "被動",
        "personas": {
            "Hell Biker": 43,
            "Matador": 22,
            "Vasuki": 71
        }
    },
    "Triple Down": {
        "cost": 16,
        "effect": "Deal 3 times small Gun damage to all foes.",
        "element": "槍械",
        "fuse": "White Rider",
        "personas": {
            "Bugs": 52,
            "Vasuki": 0,
            "White Rider": 0
        }
    },
    "Unshaken Will": {
        "effect": "Impart immunity against Confuse, Fear, and Rage.",
        "element": "被動",
        "fuse": "Mada",
        "personas": {
            "Asura-Ou": 81,
            "Mada": 86,
            "Satanael": 98,
            "Yamata-no-Orochi": 69
        }
    },
    "Vacuum Wave": {
        "cost": 4800,
        "effect": "Deal severe Wind damage to all foes.",
        "element": "疾風",
        "personas": {
            "Vishnu": 85
        }
    },
    "Vajra Blast": {
        "cost": 14,
        "effect": "Deal medium Phys damage to all foes.",
        "element": "物理",
        "personas": {
            "Archangel": 21,
            "Kin-Ki": 0
        },
        "talk": "Kin-Ki"
    },
    "Vicious Strike": {
        "cost": 18,
        "effect": "Deal medium Phys damage to all foes.",
        "element": "物理",
        "fuse": "Yaksini",
        "personas": {
            "Mithras": 0,
            "Yaksini": 24
        }
    },
    "Victory Cry": {
        "effect": "Recover full HP and SP after a successful battle.",
        "element": "被動",
        "personas": {
            "Satanael": 99
        }
    },
    "Vorpal Blade": {
        "cost": 23,
        "effect": "Deal severe Phys damage to all foes.",
        "element": "物理",
        "fuse": "Siegfried",
        "personas": {
            "Kali": 0,
            "Siegfried": 74,
            "Tsukiyomi": 55,
            "Tsukiyomi Picaro": 60
        }
    },
    "Wage War": {
        "cost": 1200,
        "effect": "Inflict Rage (medium odds) to all foes.",
        "element": "異常",
        "personas": {
            "Barong": 0,
            "Girimehkala": 48,
            "Koppa Tengu": 15,
            "Kumbhanda": 0,
            "Sui-Ki": 27,
            "Yaksini": 0
        },
        "talk": "Yaksini"
    },
    "Cripple": {
        "effect": "Strengthen Gun attacks by 50%.",
        "element": "被動",
        "personas": {
            "Seth": 53,
            "Trumpeter": 62,
            "Zaou-Gongen": 84
        }
    },
    "Wind Amp": {
        "effect": "Strengthen Wind attacks by 50%.",
        "element": "被動",
        "fuse": "Garuda",
        "personas": {
            "Garuda": 59,
            "Quetzalcoatl": 68,
            "Vishnu": 88
        }
    },
    "Wind Boost": {
        "effect": "Strengthen Wind attacks by 25%.",
        "element": "被動",
        "fuse": "Fuu-Ki",
        "personas": {
            "Fuu-Ki": 25
        }
    },
    "Wind Break": {
        "cost": 1500,
        "effect": "Negate Wind resistances of all foes.",
        "element": "輔助",
        "personas": {
            "Anzu": 0,
            "Nekomata": 20,
            "Yatagarasu": 61
        },
        "talk": "Anzu"
    },
    "Wind Wall": {
        "cost": 1800,
        "effect": "Create a shield on 1 ally to reduce damage of Wind attacks for 3 turns.",
        "element": "輔助",
        "fuse": "Kushinada-Hime",
        "personas": {
            "Apsaras": 16,
            "Kushinada-Hime": 46,
            "Kusi Mitama": 16,
            "Queen Mab": 0,
            "Rakshasa": 0,
            "Saki Mitama": 0,
            "Sudama": 21
        }
    },
    "Ominous Words": {
        "cost": 500,
        "effect": "Inflict Despair (high odds) to 1 foe.",
        "element": "異常",
        "personas": {
            "Decarabia": 0,
            "Lamia": 27,
            "Suzaku": 21
        },
        "talk": "Pisaca"
    },
    "Zio": {
        "cost": 400,
        "effect": "Deal weak Electric damage to 1 foe.",
        "element": "電擊",
        "fuse": "Agathion",
        "personas": {
            "Agathion": 0,
            "Pixie": 0,
            "Shiisaa": 0
        }
    },
    "Ziodyne": {
        "cost": 1200,
        "effect": "Deal heavy Electric damage to 1 foe.",
        "element": "電擊",
        "fuse": "Raja Naga",
        "personas": {
            "Baphomet": 61,
            "Barong": 0,
            "Emperor's Amulet": 0,
            "Norn": 0,
            "Oberon": 0,
            "Raja Naga": 0,
            "Thor": 0,
            "Yoshitsune": 0
        },
        "talk": "Barong"
    },
    "Zionga": {
        "cost": 800,
        "effect": "Deal medium Electric damage to 1 foe.",
        "element": "電擊",
        "fuse": "Isis",
        "personas": {
            "Hariti": 0,
            "Isis": 29,
            "Izanagi": 0,
            "Izanagi Picaro": 0,
            "Naga": 0,
            "Stone of Scone": 0,
            "Take-Minakata": 0,
            "Zouchouten": 0
        },
        "talk": "Naga"
    }
};
