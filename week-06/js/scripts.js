var ATMOSPHERIC_ENTROPY_INTEGERS = []
var USER_MASH_INTEGERS = []

for (let i = 0; i < 10; i++) {
    var number = getRandomInt(0,100)
    USER_MASH_INTEGERS.push(number)
  }

// gets 10 random numbers from random.org
const fetch_true_random = (quantity=1) => {

    array = []

    const NUMBER_COUNT = quantity
    const MIN_INTEGER = 1
    const MAX_INTEGER = 99

    url = `https://www.random.org/integers/?num=${NUMBER_COUNT}&min=${MIN_INTEGER}&max=${MAX_INTEGER}&col=1&base=10&format=plain&rnd=new`
    fetch(url)

    .then(function(response) {
        //console.log(response)
        return response.text()
    })

    .then (data => {
        // convert to array
        array = data.split("\n");
        array = array.filter( n => n)
        document.getElementById('option-2-log').textContent = "Values loaded successfully ✅"
        ATMOSPHERIC_ENTROPY_INTEGERS = array
        });
    }

fetch_true_random(10)

// generate a number between 0 and 1
// i can replace the source of entropy here
const get_random = () => {

    var number

    entropy_source = document.getElementById('entropy-source').value;
    
    switch (entropy_source) {
        case 'math-random':
            number = Math.random()
            break
        case 'atmospheric':
            one_to_ten = getRandomInt(0,10)
            number = (ATMOSPHERIC_ENTROPY_INTEGERS[one_to_ten] / 100 * Math.random() )
            break
        case 'user':
            one_to_ten = getRandomInt(0,10)
            number = (USER_MASH_INTEGERS[one_to_ten] / 100 * Math.random() )
            break
    }

    console.log(`number generated: ${number}`)
    return number
}

const generate_password = (length=16, lowercase=true, uppercase=true, numbers=true, symbols=true) => {
    
    var list = ''
    const lowercase_list = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers_list = '1234567890'
    const symbols_list = '!#$%&()*+,-./:;<=>?@[]^_`{|}~'

    if (lowercase) {list += lowercase_list}
    if (uppercase) {list += uppercase_list}
    if (numbers) {list += numbers_list}    
    if (symbols) {list += symbols_list}
    
    var password = ''

    for (let i = 0; i < length; i++) {
        var random_char = list[Math.floor(get_random() * list.length)];
        password = password += random_char
    }
    
    return password
}

const one_thousand_words = [ "a","ability","able","about","above","accept","according","account","across","act","action","activity","actually","add","address","administration","admit","adult","affect","after","again","against","age","agency","agent","ago","agree","agreement","ahead","air","all","allow","almost","alone","along","already","also","although","always","American","among","amount","analysis","and","animal","another","answer","any","anyone","anything","appear","apply","approach","area","argue","arm","around","arrive","art","article","artist","as","ask","assume","at","attack","attention","attorney","audience","author","authority","available","avoid","away","baby","back","bad","bag","ball","bank","bar","base","be","beat","beautiful","because","become","bed","before","begin","behavior","behind","believe","benefit","best","better","between","beyond","big","bill","billion","bit","black","blood","blue","board","body","book","born","both","box","boy","break","bring","brother","budget","build","building","business","but","buy","by","call","camera","campaign","can","cancer","candidate","capital","car","card","care","career","carry","case","catch","cause","cell","center","central","century","certain","certainly","chair","challenge","chance","change","character","charge","check","child","choice","choose","church","citizen","city","civil","claim","class","clear","clearly","close","coach","cold","collection","college","color","come","commercial","common","community","company","compare","computer","concern","condition","conference","Congress","consider","consumer","contain","continue","control","cost","could","country","couple","course","court","cover","create","crime","cultural","culture","cup","current","customer","cut","dark","data","daughter","day","dead","deal","death","debate","decade","decide","decision","deep","defense","degree","Democrat","democratic","describe","design","despite","detail","determine","develop","development","die","difference","different","difficult","dinner","direction","director","discover","discuss","discussion","disease","do","doctor","dog","door","down","draw","dream","drive","drop","drug","during","each","early","east","easy","eat","economic","economy","edge","education","effect","effort","eight","either","election","else","employee","end","energy","enjoy","enough","enter","entire","environment","environmental","especially","establish","even","evening","event","ever","every","everybody","everyone","everything","evidence","exactly","example","executive","exist","expect","experience","expert","explain","eye","face","fact","factor","fail","fall","family","far","fast","father","fear","federal","feel","feeling","few","field","fight","figure","fill","film","final","finally","financial","find","fine","finger","finish","fire","firm","first","fish","five","floor","fly","focus","follow","food","foot","for","force","foreign","forget","form","former","forward","four","free","friend","from","front","full","fund","future","game","garden","gas","general","generation","get","girl","give","glass","go","goal","good","government","great","green","ground","group","grow","growth","guess","gun","guy","hair","half","hand","hang","happen","happy","hard","have","he","head","health","hear","heart","heat","heavy","help","her","here","herself","high","him","himself","his","history","hit","hold","home","hope","hospital","hot","hotel","hour","house","how","however","huge","human","hundred","husband","I","idea","identify","if","image","imagine","impact","important","improve","in","include","including","increase","indeed","indicate","individual","industry","information","inside","instead","institution","interest","interesting","international","interview","into","investment","involve","issue","it","item","its","itself","job","join","just","keep","key","kid","kill","kind","kitchen","know","knowledge","land","language","large","last","late","later","laugh","law","lawyer","lay","lead","leader","learn","least","leave","left","leg","legal","less","let","letter","level","lie","life","light","like","likely","line","list","listen","little","live","local","long","look","lose","loss","lot","love","low","machine","magazine","main","maintain","major","majority","make","man","manage","management","manager","many","market","marriage","material","matter","may","maybe","me","mean","measure","media","medical","meet","meeting","member","memory","mention","message","method","middle","might","military","million","mind","minute","miss","mission","model","modern","moment","money","month","more","morning","most","mother","mouth","move","movement","movie","Mr","Mrs","much","music","must","my","myself","name","nation","national","natural","nature","near","nearly","necessary","need","network","never","new","news","newspaper","next","nice","night","no","none","nor","north","not","note","nothing","notice","now","n't","number","occur","of","off","offer","office","officer","official","often","oh","oil","ok","old","on","once","one","only","onto","open","operation","opportunity","option","or","order","organization","other","others","our","out","outside","over","own","owner","page","pain","painting","paper","parent","part","participant","particular","particularly","partner","party","pass","past","patient","pattern","pay","peace","people","per","perform","performance","perhaps","period","person","personal","phone","physical","pick","picture","piece","place","plan","plant","play","player","PM","point","police","policy","political","politics","poor","popular","population","position","positive","possible","power","practice","prepare","present","president","pressure","pretty","prevent","price","private","probably","problem","process","produce","product","production","professional","professor","program","project","property","protect","prove","provide","public","pull","purpose","push","put","quality","question","quickly","quite","race","radio","raise","range","rate","rather","reach","read","ready","real","reality","realize","really","reason","receive","recent","recently","recognize","record","red","reduce","reflect","region","relate","relationship","religious","remain","remember","remove","report","represent","Republican","require","research","resource","respond","response","responsibility","rest","result","return","reveal","rich","right","rise","risk","road","rock","role","room","rule","run","safe","same","save","say","scene","school","science","scientist","score","sea","season","seat","second","section","security","see","seek","seem","sell","send","senior","sense","series","serious","serve","service","set","seven","several","sex","sexual","shake","share","she","shoot","short","shot","should","shoulder","show","side","sign","significant","similar","simple","simply","since","sing","single","sister","sit","site","situation","six","size","skill","skin","small","smile","so","social","society","soldier","some","somebody","someone","something","sometimes","son","song","soon","sort","sound","source","south","southern","space","speak","special","specific","speech","spend","sport","spring","staff","stage","stand","standard","star","start","state","statement","station","stay","step","still","stock","stop","store","story","strategy","street","strong","structure","student","study","stuff","style","subject","success","successful","such","suddenly","suffer","suggest","summer","support","sure","surface","system","table","take","talk","task","tax","teach","teacher","team","technology","television","tell","ten","tend","term","test","than","thank","that","the","their","them","themselves","then","theory","there","these","they","thing","think","third","this","those","though","thought","thousand","threat","three","through","throughout","throw","thus","time","to","today","together","tonight","too","top","total","tough","toward","town","trade","traditional","training","travel","treat","treatment","tree","trial","trip","trouble","true","truth","try","turn","TV","two","type","under","understand","unit","until","up","upon","us","use","usually","value","various","very","victim","view","violence","visit","voice","vote","wait","walk","wall","want","war","watch","water","way","we","weapon","wear","week","weight","well","west","western","what","whatever","when","where","whether","which","while","white","who","whole","whom","whose","why","wide","wife","will","win","wind","window","wish","with","within","without","woman","wonder","word","work","worker","world","worry","would","write","writer","wrong","yard","yeah","year","yes","yet","you","young","your","yourself"
]

const generate_passphrase = (length=4, word_list=one_thousand_words) => {
    
    var passphrase = ""
    
    for (let i = 0; i < length; i++) {
        var random_word = word_list[Math.floor(get_random() * word_list.length)];
        passphrase = passphrase += random_word + ' '
    }

    passphrase = passphrase.trim()
    return passphrase
}

const populate_password = () => {
    var password = generate_password()
    const passwordElement = document.getElementById("password")
    passwordElement.value = password    
}

const populate_passphrase = () => {
    var passphrase = generate_passphrase()
    const passphraseElement = document.getElementById("passphrase")
    passphraseElement.value = passphrase
}

const PasswordButton = document.getElementById("generate-password")
const PassphraseButton = document.getElementById("generate-passphrase")

PasswordButton.onclick = populate_password
PassphraseButton.onclick = populate_passphrase
window.onload = () => {populate_password();populate_passphrase()}

document.addEventListener("keydown", function(event) {
  
    if (event.keyCode == 32) {
        populate_password();
        populate_passphrase()
    }

    else {
        key_mash();
        populate_password();
        populate_passphrase()
    }
    
  });

const show_option_info = () => {

    const select = document.getElementById('entropy-source');
    const div1 = document.getElementById('option-1-info')
    const div2 = document.getElementById('option-2-info')
    const div3 = document.getElementById('option-3-info')

    if (select.value == 'math-random') {
        div1.classList.remove('hidden')
        div2.classList.add('hidden')
        div3.classList.add('hidden')
    }
    else if (select.value == 'atmospheric') {
        div1.classList.add('hidden')
        div2.classList.remove('hidden')
        div3.classList.add('hidden')
    }

    else if (select.value == 'user') {
        div1.classList.add('hidden')
        div2.classList.add('hidden')
        div3.classList.remove('hidden')
    }
}

var USER_SUPPLIED_ENTROPY

const key_mash = () => {
    USER_MASH_INTEGERS.shift() // remove the first element
    var number = getRandomInt(0,100) // generate a new integer
    console.log(`number ${number} added to USER_MASH_INTEGERS`)
    USER_MASH_INTEGERS.push(number) // add it to the array

    // provide visual feedback
    const EntropyElement = document.getElementById("text-entropy")
    r = getRandomInt(0,255)
    g = getRandomInt(0,255)
    b = getRandomInt(0,255)
    EntropyElement.style.color = `rgb(${r}, ${g}, ${b})`
}

function getRandomInt(min=1, max=10) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

document.getElementById('entropy-source').addEventListener('change', show_option_info);