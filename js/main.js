let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let dis='';
let intro = ["Hello, I am Rodoc", "Hi, I am a Rodoc", "Hello, My name is Rodoc","Hey handsome how are you doing",'Hello gorgeous'];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']
let symptoms=['What exactly are your symptoms?','Are you expering any symptoms?']
let head=['Does your headache suddenly becomes really bad?','Are you feeling dizzy','Do you have blurred or double vision?']
let preventhead=['Drink plenty of fluids like water, juice, clear soup, etc. You should avoid caffeine and alcohol.\nYour body needs rest to get better. Take rest and sleep well\nSoothe the sore throat with salt water gargle. Mix ¼ to ½ Teaspoon salt in a glass of Water and gargle for temporary relief\nYou can also try these medicines to relieve your symptoms']
let body =['Do you have a serious loss of movement with the muscle ache',' Are suffering from severe pain, and the area feels warm or swollen ']
let preventbody=["Use a cold ice pack if you’re in physical pain, if you have swelling, or if the ache is local . Take a hot bath or use a heating pad if the ache is widespread. Also try alternating between hot and cold, each applied for about 10 minutes one after the other."]
let serious =['Its better to book an appointment']
let diseases=['headache','body pain','body ache','Body pain','Body ache']
let typhoid=['Are you suffering from Confusion and delirium','Are you suffering from Hallucinations','Are you suffering from Attention problems','Are you suffering from Agitation']
let preventtyphoid=['You may be suffering from Typhoid. Make sure you rest, drink plenty of fluids and eat regular meals. You may find it easier to eat smaller meals more frequently, rather than 3 larger meals a day.']
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
match = function () {
    var unify = unification.unify;
  
    function match_aux(patterns, value) {
      var i, result;
  
      for (i = 0; i < patterns.length; i += 1) {
        result = unify(patterns[i][0], value);
        if (result) {
          return patterns[i][1](result);
        }
      }
      return undefined;
    }
    return function(patterns, value) {
        return match_aux(patterns, value);
      };
    }
    
    var fact = function (n) {
      return match([
        [0, function() { return 1; }],
        [$('n'), function(result) {
          return result.n * fact(result.n - 1);
         }]
      ], n);
    };
function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry I couldnt recognize your text";
    if(message.includes('Not feeling well')){
        let finalresult = symptoms[Math.floor(Math.random() * symptoms.length)];
        speech.text = finalresult;
    }
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('How are you?' )){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' )){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    if(message.includes('Hello')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    if(message.includes('not well')){
        let finalresult = symptoms[Math.floor(Math.random() * symptoms.length)];
        speech.text = finalresult;
    }
    if(message.includes('unwell')){
        let finalresult = symptoms[Math.floor(Math.random() * symptoms.length)];
        speech.text = finalresult;
    }
    if(message.includes('not feeling well')){
        let finalresult = symptoms[Math.floor(Math.random() * symptoms.length)];
        speech.text = finalresult;
    }
    
    if(message.includes('not feeling good')){
        let finalresult = symptoms[Math.floor(Math.random() * symptoms.length)];
        speech.text = finalresult;
    }
    if(message.includes('Fever')){
        let finalresult = symptoms[Math.floor(Math.random() * symptoms.length)];
        speech.text = finalresult;
    }
    if(message.includes('fever')){
        let finalresult = symptoms[Math.floor(Math.random() * symptoms.length)];
        speech.text = finalresult;
    }
    if(message.includes('headache')){
        let finalresult = head[Math.floor(Math.random() * head.length)];
        speech.text = finalresult;
    }
    if(message.includes('Headache')){
        let finalresult = head[Math.floor(Math.random() * head.length)];
        speech.text = finalresult;
    }


    if(message.includes('body ache')){
        let finalresult = body[Math.floor(Math.random() * body.length)];
        speech.text = finalresult;
    }
    if(message.includes('body pain')){
        let finalresult = body[Math.floor(Math.random() * body.length)];
        speech.text = finalresult;
    }




    if(message.includes('Body ache')){
        let finalresult = body[Math.floor(Math.random() * body.length)];
        speech.text = finalresult;
    }
    if(message.includes('Body pain')){
        let finalresult = body[Math.floor(Math.random() * body.length)];
        speech.text = finalresult;
    }




    if(message.includes('Dry cough')){
        let finalresult = preventtyphoid[Math.floor(Math.random() * preventtyphoid.length)];
        speech.text = finalresult;
    }
    if(message.includes('dry cough')){
        let finalresult = preventtyphoid[Math.floor(Math.random() * preventtyphoid.length)];
        speech.text = finalresult;
    }
    if(message.includes('Sweating')){
        let finalresult = preventtyphoid[Math.floor(Math.random() * preventtyphoid.length)];
        speech.text = finalresult;
    }
    if(message.includes('sweating')){
        let finalresult = preventtyphoid[Math.floor(Math.random() * preventtyphoid.length)];
        speech.text = finalresult;
    }
    if(message.includes('Abdominal pain')){
        let finalresult = preventtyphoid[Math.floor(Math.random() * preventtyphoid.length)];
        speech.text = finalresult;
    }
    if(message.includes('abdominal pain')){
        let finalresult = preventtyphoid[Math.floor(Math.random() * preventtyphoid.length)];
        speech.text = finalresult;
    }









    if(message.includes('Yes')){
        if(confirm("Would you like to book an appointment?")){

            let finalresult = serious[Math.floor(Math.random() * serious.length)];
        speech.text = finalresult;
        window.location = 'http://localhost/hospital/hms/user-login.php';
        }else{
            if( dis.search('headache')||dis.search('Headache')){
                let finalresult = preventhead[Math.floor(Math.random() * preventhead.length)];
            speech.text = finalresult;
            }
            if(dis.search('body pain')||dis.search('body ache')||dis.search('Body pain')||dis.search('Body pain')){
                let finalresult = preventbody[Math.floor(Math.random() * preventbody.length)];
            speech.text = finalresult;
            }
        }
    }

    if(message.includes( 'No')){
        if( dis.search('headache')||dis.search('Headache')){
            let finalresult = preventhead[Math.floor(Math.random() * preventhead.length)];
        speech.text = finalresult;
        }
        if(dis.search('body pain')||dis.search('body ache')||dis.search('Body pain')||dis.search('Body pain')){
            let finalresult = preventbody[Math.floor(Math.random() * preventbody.length)];
        speech.text = finalresult;
        }
        // if(dis.search('Dry cough')||dis.search('dry cough')||dis.search('Sweating')||dis.search('sweating')||dis.search('abdominal pain')||dis.search('Abdominal pain')){
        //     let finalresult = preventtyphoid[Math.floor(Math.random() * preventtyphoid.length)];
        // speech.text = finalresult;
        // }
        
    }

    if(message.includes( 'Hello')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes( 'Hi')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes( 'Hey')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    
    if(message.includes('fever headache')){
        let finalresult = cold[Math.floor(Math.random() * cold.length)];
        speech.text = finalresult;
    }
    if(message.includes('Headaches body aches fever running nose')){
        let finalresult = cold[Math.floor(Math.random() * cold.length)];
        speech.text = finalresult;
    }
    if(message.includes('Headaches body pain fever running nose')){
        let finalresult = cold[Math.floor(Math.random() * cold.length)];
        speech.text = finalresult;
    }
    if(message.includes('body pain headache fever running nose')){
        let finalresult = cold[Math.floor(Math.random() * cold.length)];
        speech.text = finalresult;
    }
    if(message.includes('fever headache running nose')){
        let finalresult = cold[Math.floor(Math.random() * cold.length)];
        speech.text = finalresult;
    }
    if(message.includes('running nose')){
        let finalresult = cold[Math.floor(Math.random() * cold.length)];
        speech.text = finalresult;
    }
    if(message.includes('Running nose')){
        let finalresult = cold[Math.floor(Math.random() * cold.length)];
        speech.text = finalresult;
    }
    // if(message.includes('shortness of breath chest pain cough' || 'breathlessness'||'Breathlessness'||
    // 'chest pain cough'||'cough chest pain' || 'Headaches body pain fever running nose'||
    // 'body pain headache fever running nose'||'fever headache running nose'||'running nose'||'running nose')){
    //     let finalresult = closing[Math.floor(Math.random() * closing.length)];
    //     speech.text = finalresult;
    // }
    if(message.includes('Self assessment' || 'self assessment'))
    {
      
          document.getElementById("myForm").style.display = "block";
        
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    for (i=0;i<diseases.length;i++)
    if(transcript.includes(diseases[i]))
    // if(diseases[i]='headache')
    //     dis=transcript.slice(-8,0);
    // if(diseases[i]=='body ache'||diseases[i]=='body pain')
        dis=transcript;
    console.log(transcript);
 
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
