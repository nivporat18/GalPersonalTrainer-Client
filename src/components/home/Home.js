import "./Home.css";
import gal from "../images/gal.jpg"


const Home = () => {
  return (

<section className="flex justify-center overflow-hidden  bg-cover bg-top bg-no-repeat my-16">
  <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-4">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Gal Porat Personal Trainer </h2>

      <p className=" max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
      .שמי גל פורת, מאמן כושר אישי<br></br>
אני רוצה להביא מניסיוני לא רק כמאמן, אלה גם מהצד שלכם כמתאמן רב שנים בחדר הכושר ובעולם הכדורגל.
כל אחד ואחת מכם בין אם ספורטאים שרוצים לשפר את היכולות הפיזיות והאתלטיות שלהם ובין אם אתם רוצים לעלות מסת שריר ולהתחטב! 
בנוסף לאימוני כוח אישיים וקבוצתיים, החלטתי מהיותי כדורגלן, לפתח אימונים לילדים מגיל 15 ומעלה העוסקים בטכניקות, התמצאות במרחב והבנת המשחק
<br></br>אז בשביל זה אני כאן! להתוות לכם את הדרך ואני מאמין שלי כדי להגיע לתוצאות הרצויות בהתאם למטרות שלכם
אז יאללה זה הזמן להצטרף ולעשות את הצד הראשון

      </p>

      <div className="mt-4 sm:mt-8 flex justify-center">
        <img className="w-[200px]"  src={gal} alt="" />
      </div>
    </div>
  </div>
</section>

    
  );
};

export default Home;


