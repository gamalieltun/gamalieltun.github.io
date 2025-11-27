// data/posts.js
// Simple file-based "CMS" for blog posts

// Each post:
// id, slug, title, date (YYYY-MM-DD), author, tags [array], excerpt, featuredImage (path), content (full HTML string)

const posts = [
    {
      id: 1,
      slug: "Educated |ပညာဆိုတာဒီလိုရှာ",
      title: "Educated |ပညာဆိုတာဒီလိုရှာ",
      date: "2022-05-27",
      author: "Gamaliel Tun",
      tags: ["Article", "Book Review"],
      excerpt:
        "educated စာအုပ်ကိုဖတ်မယ်ဖတ်မယ်နဲ့ မဖတ်မဖြစ်ဘူး။ မူရင်း pdf file ကိုဒေါင်းထားဖြစ်တာကြာပြီဆိုပေမဲ့ တခြားစာအုပ်တွေကို ဖတ်နေရင်း မဖတ်ဖြစ်တာ။\
        ဟိုတစ်လကမှ read and return စာအုပ်ဆိုင်မှာ စာရင်းသွားသွင်းတဲ့အချိန်မှ ဆရာသင့်လူ မြန်မာပြန်ထားတဲ့ Educated ပညာဆိုတာဒီလိုရှာ စာအုပ်ကို ငှားခဲ့ဖြစ်တယ်။",
      featuredImage: "assets/images/educated.jpeg",
      content: `
        <p>
          educated စာအုပ်ကိုဖတ်မယ်ဖတ်မယ်နဲ့ မဖတ်မဖြစ်ဘူး။ မူရင်း pdf file ကိုဒေါင်းထားဖြစ်တာကြာပြီဆိုပေမဲ့ တခြားစာအုပ်တွေကို ဖတ်နေရင်း မဖတ်ဖြစ်တာ။
        </p>
        <p>
          ဟိုတစ်လကမှ read and return စာအုပ်ဆိုင်မှာ စာရင်းသွားသွင်းတဲ့အချိန်မှ ဆရာသင့်လူ မြန်မာပြန်ထားတဲ့ Educated ပညာဆိုတာဒီလိုရှာ စာအုပ်ကို ငှားခဲ့ဖြစ်တယ်။
        </p>
        <p>
          ဒီစာအုပ်ကို စသိတာက လိုင်းပေါ်မှာ Bill Gates ရဲ့ recommendation တွေထဲက တစ်ခုဆိုပြီး…။ သိပ်ကောင်းတယ်လို့လည်း‌ ပြောကြတယ်။ memoir လို့ဆိုပေမဲ့လည်း ဝတ္ထုပုံစံနဲ့ စာရေးသူပေးချင်တဲ့ message တစ်ခုခု၊ self-help book တစ်ခုခု ဘက်ကို ပိုရောက်လိမ့်မယ်လို့ ထင်ထားတာ၊ အမှန်တကယ်တော့ တကယ်ကို အသက်ဝင်တဲ့ ကိုယ်တိုင်ရေး မှတ်တမ်းကောင်းတစ်ခုဖြစ်တယ်ဆိုတာ ဖတ်ရင်းနဲ့ သိလိုက်ရတယ်။ ဒီစာအုပ်က ၂၀၁၈ ခုနှစ်မှာ ထွက်ရှိခဲ့ပြီး best selling စာအုပ်တစ်အုပ်လည်း ဖြစ်ခဲ့ပါတယ်။
        </p>

        <figure class="post-image">
          <img src="assets/images/educated2.jpeg" alt="Bill and Tara" />
          <figcaption>Bill and Tara</figcaption>
        </figure>
        
        <p>ကျွန်တော်တို့ ဖွံ့ဖြိုးနေဆဲနိုင်ငံတွေကသူတွေ သိထား၊ နားလည်ထားတာက အမေရိကန်လို နိုင်ငံတစ်နိုင်ငံက နိုင်ငံသားတွေက အင်မတန်မှ ပြီးပြည့်စုံပြီးသားသူတွေ၊ ပညာရေး ကျန်းမာရေးအဘက်ဘက်က ပြည့်စုံပြီးသားလူတွေ၊ ဒီလိုမျိုး။
        </p>
        <p>ဒီစာအုပ်ဖတ်လိုက်မှ သိလိုက်ရတဲ့အရာက တကယ်ကို အံ့ြသစရာပဲ။ သူတို့နိုင်ငံမှာတောင် ကျောင်းမထားတဲ့၊ အတွေးခေါင်တဲ့၊ တစ်ယူသန် မိဘတွေ၊ မိသားစုတွေရှိနေသေးတယ်။ ကျွန်တော်တို့တွေမထင်ထားတဲ့ အမှောင်ဖက်ခြမ်းတစ်ခုကို တွေ့ရတယ်။
        </p>
        <h3>ဇာတ်လမ်းအကျဥ်းကို နည်းနည်းလောက်ပြောပြချင်ပါတယ်</h3>
        <p>တာရာက ငယ်ငယ်လေးကတည်းက မိဘတွေ၊ မောင်နှမတွေနဲ့ တောတောင်တွေကြားထဲမှာနေတယ်။ အင်မတန်မှ ခေါင်ဖျားတဲ့နေရာလို့ မဆိုနိုင်ပေမဲ့လည်း မြို့တွေလောက်တော့လည်းမစုံဘူးပေါ့၊ နေထိုင်မှုပုံစံတွေကလည်း ကွာတယ်။</p>
        <figure class="post-image">
          <img src="assets/images/educated1.jpeg" alt="Clifton, Idaho| Photo from Internet" />
          <figcaption>Clifton, Idaho| Photo from Internet</figcaption>
        </figure>
        <p>အဖေနဲ့အမေမှာ အဖေကမြန်မာအခေါ် အလုပ်ကြမ်းသမား၊ ကားသင်္ချိုင်းမှာ လုပ်တယ်။ အမေကတော့ နာမည်အတော်အသင့်ရှိတဲ့ သားဖွားဆရာမ၊ ဒါကလည်း သေချာသင်ထားတဲ့ ဆရာမမျိုးမဟုတ်ပဲ အရပ်ထဲက လက်ဆင့်ကမ်းနည်းနဲ့ တတ်ခဲ့တဲ့ပုံစံမျိုးပါ။
        </p>
        <p>မိသားစုတစ်ခုလုံးကို ဖခင်ဖြစ်သူကပဲ ချုပ်ကိုင်လွှမ်းမိုးထားတယ်။ အရာရာက သူ့ရဲ့ call အောက်မှာပဲ။‌ ဘာသာတရားကလည်း အင်မတန်မှ အစွန်းရောက်တယ်။ နောက်တစ်ခုဆိုးတာက တစ်ခါက မိသားစုတစ်ခုကို လုံခြုံရေးအဖွဲ့ရဲ့ ပစ်ခတ်မှုကြောင့် သေဆုံးခဲ့ရတဲ့ ဟိုးလေးတကျော်ဖြစ်သွားခဲ့တဲ့သတင်းကို ကြားပြီးကတည်းက အခြေအနေက ပိုဆိုးလာခဲ့တယ်။</p>
        <p>သူတို့ပြီးရင် ငါတို့မိသားစုအလှည့်ပဲဆိုပြီး အစိုးရကို ဆန့်ကျင်ရေးတွေ ပြင်းထန်လာတယ်၊ (သူတို့အပြော)ဆိုရှယ်လစ်ဝါဒတွေ မိသားစုဝင်တွေကြား ဝင်ရောက်လာမှာဆိုတဲ့အတွေးနဲ့ သားသမီးတွေကို ဘာမှမလုပ်ခိုင်း၊ ကျောင်းထားထားတဲ့သူတွေကို ထုတ်ပစ်၊ မနေရသေးတဲ့သူတွေခင်မျာလည်း ကျောင်းမတက်ရ၊ အိမ်တွင်းစာသင်ရေးစနစ်နဲ့ ပညာအရည်အချင်းအဲ့လောက်မရှိတဲ့ မိခင်ကပဲသင်တယ်။</p>
        <p>ဒီထဲကမိသားစုက ဆိုရမယ်ဆို တကယ်ကို ignorant တွေပါ။ ဒီရဲ့အခြေခံကလည်း စိတ်ကျန်းမာရေးကြောင့်လို့ ဆိုရမယ်။ ဖခင်ကိုယ်တိုင်နဲ့ သားသမီးတွေထဲက တစ်ချို့ကတောင် bipolar လို့ခေါ်တဲ့ ရောဂါကို ခံစားနေတာ သူတို့ကိုယ်တိုင်တောင် မသိကြရှာဘူး။</p>
        <p>မသိရင်မသိသလို ထထဖောက်တယ်၊ တစ်ခုခုဆိုရင်လည်း တစ်ယူသန် တစ်သံစွဲ စဥ◌်းစားခြင်းမရှိ၊ ဥာဏ်မသုံး။ ဒီဒဏ်တွေကို သမီးဖြစ်သူ အငယ်ဆုံးလေး တာရာကပိုပြီး ခံရရှာတယ်။ ဒီလိုခံနေရတဲ့ ခါးသီးတဲ့အတွေ့အကြုံတွေကိုလည်း နောက်ပိုင်း တက္ကသိုလ်တက် ပညာသင်တဲ့အခါမှ ပြန်သုံးသပ်သိရှိသွားခဲ့တာ။</p>
        <p>နောက်ပိုင်းမှာတော့ တာရာဟာ အရာရာကို လက်ခံပြီး ဘဝကို အကောင်းဆုံးရှေ့ဆက်နိုင်ခဲ့တယ်လို့ပဲပြောရမယ်။ အခြေခံပညာကျောင်းတွေကို မတက်ခဲ့ရတဲ့သူတစ်ယောက်က တကယ့်နာမည်ကြီး ကျောင်းတွေဖြစ်တဲ့ ကိန်းဘရစ်ချ်၊ ဟားဗတ်လိုတက္ကသိုလ်တွေကို တက်လမ်းနိုင်ခဲ့တယ်လို့ ဘယ်သူကရောယုံမှာလဲ။
        </p>
        <figure class="post-image">
          <img src="assets/images/educated3.jpeg" alt="Tara Westover" />
          <figcaption>Tara Westover</figcaption>
        </figure>

        <h2>ကျွန်တော့်အတွေး</h2>
        <p>လှောင်ချိုင့်ထဲက ငှက်က လှောင်ချိုင့်ပုံစံကို အပြင်ဘက်ကကြည့်မှ ပိုပြီး မြင်ရတာပေါ့။ ဘယ်လောက်ကျဥ◌်းကျပ်သလဲ၊ ဘယ်လောက်ဆိုးလိုက်သလဲဆိုတာ…။ရုန်းထွက်ဖို့ကတော့ အင်မတန်မှခက်တယ်။ ရုန်းထွက်နိုင်ပြီဆိုရင်လည်း ပြန်မသွားဖြစ်တော့တာကတော့ အသေချာပဲ။ စွန့်လွှတ်သင့်တဲ့အရာကို စွန့်လွှတ်လိုက်ရတယ်။</p>
        <p>တစ်ချို့ကျတော့ သူများဖန်တီးတဲ့ လှောင်ချိုင့်ထဲမှာ ရှိမနေပေမဲ့ ကိုယ်ကိုယ်တိုင် ဖန်တီးထားတဲ့ လှောင်ချိုင့်ထဲမှာ ပိတ်မိနေတတ်တယ်။ ဒါကိုလည်း မသိကြဘူး။ သိအောင်လည်း မကြိုးစားကြဘူး။ (ကြိုးစားဖို့ကိုလည်း ပြောပြရင် မကြိုက်ကြတဲ့သူတွေက ရှိသေးတယ်)
        နောက်ဆုံးတော့လည်း ဘယ်လိုအခြေအနေမျိုးပဲဖြစ်ဖြစ် ကိုယ်ကိုယ်တိုင်ကပဲ အဓိကပါပဲ။ ကိုယ့်ရဲ့ အတွေ့အကြုံ၊ ခံယူချက်၊ ဆုံးဖြတ်ချက်တွေကပဲ ဘဝကို ပုံဖော်ပေးသွားတာပါ။</p>
        

        <h2>ဘယ်သူတွေကို ညွှန်းပေးချင်လဲ?</h2>
        <p>ဘယ်သူတွေအတွက်လည်းဆိုရင် စာကို ဖတ်ရုံတင်မဟုတ်ပဲ ဆက်စပ်ပြီး တွေးချင်တဲ့၊ မတူတဲ့အမြင်ကနေ ကြည့်ရတာ ကြိုက်တဲ့ သူတွေကို ဖတ်ကြည့်စေချင်တယ်။ ဒီစာအုပ်က အများကြီး ဆက်စပ်တွေးလို့ကောင်းတဲ့ထဲမှာ ပါပါတယ်။ ကိုယ့်ကိုယ်ကို သုံးသပ်ဖို့ ဒါမှမဟုတ် အပြောင်းအလဲတစ်ခုခုအတွက် ကြိုးစားနေကြရတဲ့အချိန်မှာ အများကြီး အသုံးဝင်မယ်လို့ထင်တယ်။</p>
        <p>အခုအခြေအနေနဲ့ဆိုရင် ပြောစရာတွေ၊ မတူတဲ့တွေးခေါ်ပုံ base တွေနဲ့ တစ်ယောက်တစ်မျိုးထွက်လာနိုင်တယ်။ဒါပေမဲ့ တကယ့်သင်ခန်းစာတွေကတော့ ကိုယ်ကိုယ်တိုင်ပဲ ရှာရမှာပါ။</p>
        <p>ဖတ်ကြည့်ဖို့ တိုက်တွန်းပါတယ်။</p>
        `,
    },
    {
      id: 2,
      slug: "Make Time| My View on this Book",
      title: "Make Time| My View on this Book",
      date: "2021-11-27",
      author: "Gamaliel Tun",
      tags: ["Article", "Book Review"],
      excerpt:
        "Make Time is sort of a productivity book but it’s not. It’s not about working more done, it’s about working more fun. Since reading this book about a month ago, I start doing some of the tactics, which helps me do my studies and other daily tasks.",
      featuredImage: "assets/images/maketime.jpeg",
      content: `
        <p>Make Time is sort of a productivity book but it’s not. It’s not about working more done, it’s about working more fun. Since reading this book about a month ago, I start doing some of the tactics, which helps me do my studies and other daily tasks.</p>
        <p>Make Time is written by Jake Knapp and John Zeratsky. They are tech guys who worked at Google, designing apps like YouTube, Gmail, and Google Hangout. This book is the outcome of lots of experiments they had done and the experiences they’d encountered.</p>
        <p>Before deep-diving into the system, there’s one important question for us to answer and we need to understand that. It’s “Why are we so busy?“</p>
        <p>The thing is that we have two main things that make us busy all day. The authors mentioned them in this book. They are</p>
        <ul>
        <li>The Busy Bandwagon</li>
        <li>The infinity pools</li>
        </ul>
        <h2>What is a Busy Bandwagon?</h2>
        <p>It means endless tasks in our daily life. We always say we’re so out of control as we have lots and lots of tasks, duties- it is prioritizing others’ work than ours. Because of that, we don’t have our own time, our own time to relax and recreate.</p>
        <h2>What are the infinity pools?</h2>
        <p>Facebook, Instagram, Twitter, etc. are all infinity pools. There are always new posts, videos, and other stuff that are hunting for your attention. They are the things that we used to think of as things we use when we are tired or after daily tasks. In reality, they are endless distractions for life.</p>
        <p>What we use to get out of them is Willpower. But actually, we can’t rely on it. Because habits always win willpower, we can’t deny it.</p>
        
        <p>This is where the system comes in:</p>
        <figure class="post-image">
          <img src="assets/images/maketime1.jpeg" alt="Mind Map" />
        </figure>
        <p>As I mentioned above, it’s about working more fun. This system is friendly and flexible. It all depends on you. If it isn’t for you, don’t do it, just throw it away and try another one.</p>
        
        <h4>1. Highlight</h4>
        <p>It’s an important step for your day. Choose what you want to prioritize in your day. It can be anything, Yes, ANYTHING, “Cleaning your bookshelf, Playing with your kids…..“. The only thing is that it has to be the thing you want to do, the thing that you feel satisfied by doing it.</p>
        <p>Choosing a highlight might be a difficult thing for you at first, but gradually it will become a habit. Okay! So, “When should I choose my highlight?” It depends on you. If you are a night guy, you can choose after doing everything at night or before you sleep. If you are a morning guy, you can choose your highlight before doing anything or before your routine starts. For me, as I’m a morning guy, I choose my highlight in the morning. I write it down on a sticky note and put it beside my table. You can also use digital materials, it’s up to you. More ways are mentioned in the book.</p>

        <h4>2. Laser</h4>
        <p>You’ve chosen your highlight and decided to do it. But some many distractions and tasks are waiting to distract you to focus on your work such as social media, email, breaking news, etc. Yes, the news is also one of the distractions. (My Opinion-but in some parts of the world like Myanmar, people should listen to the news to keep in touch with the current situation. That’s an exception.) The one that works with me -till now- is creating barriers to distractions. For example, as I’m a teenager, I spend most of the time using my phone, using social media, and playing games. So, as soon as I knew this tactic, I start creating barriers to them: log out from Facebook, put my phone across the room or make it power off, turn off all the notifications, and turn on restriction mode on my phone, you can do it by using Google Digital Wellbeing.</p>

        <h4>3. Energize</h4>
        <p>You can’t do anything unless you are strong. Agree? Energy is needed for you to boost your productivity and focus on your work.</p>
        <p>Let’s look back to the age of our ancestors, tens of thousands of years ago, they have to struggle for their survival a lot harder than us. But they could overcome it and that brings the evolution of human beings. Why would this happen if our ancestors didn’t have enough energy? Looking closely at their daily life, they have enough sleep hours and enough physical activity. These small factors can affect our lives enormously. For me, doing exercise boosts my energy. The book says-/p>
        <blockquote class="post-quote">
        “Research shows that the most important cognitive, health, and mood benefits of exercise can be attained in just twenty minutes.”
        </blockquote>
        <p>It is. Since reading this book, I made a time- about twenty minutes or thirty- for walking. After a few weeks, the benefits of it surfaced. It boosts my productivity and focus.</p>
       
        <h4>4. Reflect</h4>
        <p>The Final Step is to reflect your system. You can take notes looking back to your day and decide which tactics you want to continue or stop. I take notes of my day every night and reflect. It shows what I should improve or eliminate.</p>
        <p>Make time explains these steps in more detail and mention a lot of tactics for you. You should apply on yourself and try it. You should keep in mind that you don’t need to stress about perfection. If you can’t do it today, do it tomorrow. You can customize your routine./p>

        `,
    },
    {
      id: 3,
      slug: "အိုဘယ့်အစိမ်းတို့မြေ",
      title: "အိုဘယ့်အစိမ်းတို့မြေ",
      date: "2021-04-22",
      author: "Gamaliel Tun",
      tags: ["Thoughts", "Book Review"],
      excerpt:
        "တကယ်ကို ဖတ်သင့်တဲ့ စာအုပ်တစ်အုပ်၊ မြန်မာနိုင်ငံသားတစ်ယောက်အနေနဲ့ ဖတ်ကို ဖတ်ထားသင့်တဲ့စာအုပ်တစ်အုပ်ပါ။ တိုင်းရင်းသားတွေတွေ့ကြုံခံစားခဲ့ရတဲ့ အရာတွေ၊ ရိုက်ခတ်မှုတွေ၊ ချစ်စရာဓလေ့တွေ ဒါတွေကို ထိထိမိမိ ခံစားနိုင်မှာပါ။",
      featuredImage: "assets/images/thelandofgreenghosts.jpeg",
      content: `
        <p>
          ဒီစာအုပ်ကို လူတော်တော်များများသိကြမယ်ထင်ပါတယ်။ ဒီစာအုပ်မှာတော့စာရေးသူရဲ့ အတ္ထုပတ္တိ ဘ၀ဇာတ်ကြောင်းကတစ်ဆင့် ထိုခေတ်ကာလမြန်မာ့နိုင်ငံရေးအခြေအနေတွေနဲ့ ပဒေါင်လူမျိုးတို့ရဲ့ ချစ်စရာပုံရိပ်တွေကို တွေ့နိုင်ပါတယ်။
        </p>
        <p>
         ပထမဦးဆုံအနေနဲ့ကတော့မူရင်းစာရေးဆရာအကြောင်းကိုအနည်းငယ်ပြောပြချင်ပါတယ်။
        </p>
        <figure class="post-image">
          <img src="assets/images/thelandofgreenghots1.jpeg" alt="Pascal Khoo Thwe" />
          <figcaption>Pascal Khoo Thwe</figcaption>
        </figure>
        <p>စာရေးသူ Pascal Khoo Thwe ဟာ မြန်မာနိုင်ငံမှာမွေးပြီး မြန်မာနိုင်ငံမှာပဲ အထက်တန်းကို အောင်မြင်ခဲ့တဲ့ ပဒေါင်လူမျိုးတစ်ယောက်ဖြစ်ပါတယ်။ တက္ကသိုလ်တက်နေရင်းတန်းလန်းမှာပဲ နိုင်ငံရေးမတည်မငြိမ်ဖြစ်ပြီးတော့ ကျောင်းကို ပြီးအောင်မတက်ခဲ့ရပါဘူး။ ဒီလိုနဲ့ နိုင်ငံလုံးအရေးအခင်းကြီးမှာ ပါ၀င်၊ တော်လှန်ရေးတပ်သားဖြစ်၊ ‌ထိုင်းမြန်မာနယ်စပ်ဘက်ကိုတိမ်းရှောင်ရင်းနဲ့ပဲ ကမ္ဘာမှာ အကောင်းဆုံး၊ အဆင်မှီကျောင်းတွေထဲက တစ်ခုဖြစ်တဲ့ ကိန်းဘရစ်ချ် တက္ကသိုလ်ကိုတက်ခွင့်ရခဲ့တဲ့သူဖြစ်ပါတယ်။</p>
        <p>ဒီစာအုပ်ဟာမြန်မာနိုင်ငံသား၊ တိုင်းရင်းသားတစ်ယောက်က အင်္ဂလိပ်ဘာသာနဲ့ ကြိုးစားရေးသားထားတဲ့စာအုပ်တစ်အုပ်ပါ။ မြန်မာပြန်လဲရှိပါတယ်။ ဘာသာပြန်သူကတော့ သင့်လူဖြစ်ပါတယ်။</p>
        
        <h3>ဘာအကြောင်းတွေရေးထားသလဲ?</h3>
        <p>စာရေးသူဟာ သူ့ရဲ့ အကြောင်းနဲ့အတူ ပဒေါင်လူမျိုးရဲ့ ဓလေ့တွေ၊ ထုံးစံတွေ လှလှပပကို ခြယ်သဖွဲ့ဆိုထားပါတယ်။ ဖွဲ့ဆိုတယ်လို့ ပြောတာ ဘာလို့လဲဆိုတော့ စာရေးသားပုံကတစ်ခါတစ်လေမှာ ကဗျာဆန်လို့ပါ။

        </p>
        <p>အ‌ရေးအသားကြောင့် အကြောင်းအရာတွေဟာ ပိုရုပ်လုံးပေါ်၊ ကြွတက်လာပါတယ်။</p>


        <ul>
          <li>ပဒေါင်လူမျိုးတို့ရဲ့ ဓလေ့ထုံးစံတွေ</li>
          <li>နိုင်ငံရေးအခြေအနေတွေ</li>
          <li>မူရင်းစာရေးသူရဲ့ ဘ၀ ဖြတ်သန်းခဲ့ရ ပုံတွေ</li>
          <li>အတွေးအမြင်တွေ</li>
        </ul>
        <p>
          စတာတွေကိုကဗျာလို တစ်မျိုး၊ သမိုင်းလို တစ်ခါ ကြိုးစားပြီးရေးသားထားတာပါ။ ဖတ်ရတာအင်မတန်ကိုကောင်းပါတယ်။
        </p>
        <h3>ဖတ်သင့်လား?</h3>
        <p>တကယ်ကို ဖတ်သင့်တဲ့ စာအုပ်တစ်အုပ်၊ မြန်မာနိုင်ငံသားတစ်ယောက်အနေနဲ့ ဖတ်ကို ဖတ်ထားသင့်တဲ့စာအုပ်တစ်အုပ်ပါ။ တိုင်းရင်းသားတွေတွေ့ကြုံခံစားခဲ့ရတဲ့ အရာတွေ၊ ရိုက်ခတ်မှုတွေ၊ ချစ်စရာဓလေ့တွေ ဒါတွေကို ထိထိမိမိ ခံစားနိုင်မှာပါ။</p>

        <p>ဒီစာအုပ်ကို ဖတ်တဲ့အတွက် တိုင်းရင်းသားတွေအပေါ်မှာ မြင်တဲ့အမြင်တွေ ပြောင်းလဲလာနိုင်သလို ပိုပြီး နားလည်လာလိမ့်မယ်လို့ ထင်ပါတယ်။ အပျင်းပြေပဲဖြစ်ဖြစ်၊ အကြောင်းအရာကို သိချင်လို့ပဲ ဖြစ်ဖြစ် ဖတ်လို့ရပါတယ်။</p>
      
      
        `,
    },
  ];
  