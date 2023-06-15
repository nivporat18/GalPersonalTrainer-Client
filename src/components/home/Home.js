import "./Home.css";
import gal from "../images/gal.png"
import logo from "../images/logoremovebgpreview.png"


const Home = () => {
  return (

<section className="flex justify-center overflow-hidden bg-[url(https://res.cloudinary.com/mepelaozen/image/upload/v1686810065/GalWeb/gym_background_t0tg5v.jpg)] bg-cover  bg-no-repeat mt-8">
  <div className="bg-black/25 md:p-12 lg:px-16 lg:py-4">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl flex justify-center"><img src={logo} alt="לוגו" className="w-[200px]"/></h2>

      <p className=" max-w-lg text-white/90  md:block md:text-lg md:leading-relaxed">
    שמי גל פורת, מאמן כושר אישי.<br></br>
אני רוצה להביא מניסיוני לא רק כמאמן, אלה גם מהצד שלכם כמתאמן רב שנים בחדר הכושר ובעולם הכדורגל.
כל אחד ואחת מכם בין אם ספורטאים שרוצים לשפר את היכולות הפיזיות והאתלטיות שלהם ובין אם אתם רוצים לעלות מסת שריר ולהתחטב! 
בנוסף לאימוני כוח אישיים וקבוצתיים, החלטתי מהיותי כדורגלן, לפתח אימונים לילדים מגיל 15 ומעלה העוסקים בטכניקות, התמצאות במרחב והבנת המשחק
.<br></br>אז בשביל זה אני כאן! להתוות לכם את הדרך ואני מאמין שלי כדי להגיע לתוצאות הרצויות בהתאם למטרות שלכם
אז יאללה זה הזמן להצטרף ולעשות את הצד הראשון.

      </p>

      <div className=" flex justify-center">
        <img className="w-[200px]"  src={gal} alt="גל פורת" />
      </div>
    </div>
  </div>
</section>

    
  );
};

export default Home;


