import "./topfive.css"


const topfive = [
    {
    rank: 1,
    title: "Stranger Things",
    img: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQEq9p8KKh4cDljpOPBvnme-VOdV0kO-1mqfBIHlUbqQHGNOpERWh3cjE_J6UitiD-6dryVOoz1HyEp_ab_vT4popBXwkpea8YFU.jpg?r=e8ahttps://images.unsplash.com/photo-1542206395-9feb3edaa68d",
    },
    {
    rank: 2,
    title: "Don't Look UP",
    img: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaa7zSeOtW5ON9mx0Qmpii1K-9xpKKXfNTwcB7AvclDduYgu9lAQDpnVTG7QBY2BteEMa7TOuFtrz5jL6PYv-cOCn4mmsWyylywc.jpg?r=5b6",
  },
  {
    rank: 3,
    title: "Anyone but you",
    img: "https://m.media-amazon.com/images/I/71OweZnYOoL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    rank: 4,
    title: "Ballerina",
    img: "https://m.media-amazon.com/images/M/MV5BOTgxNzA0MDktYzc5ZC00MGY3LWIwYjItMDJhNzE2ZGFjYmE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    rank: 5,
    title: "Narcos",
    img: "https://www.tallengestore.com/cdn/shop/products/Narcos-Escobar-RiseOfTheCartels-NetflixTVShowPosterFanArt_5d6c5f7d-f9e6-4ba5-8598-9085e561a32b.jpg?v=1589271649g",
  }
];

export const Topfive = () => {
  return (
    <section className="top-ten">
      <h2 className="top-ten-title">Top 10 In Your Country Today</h2>

      <div className="top-ten-row">
        {topfive.map((item) => (
          <div key={item.rank} className="rank-card">
            <span className="rank-number">{item.rank}</span>

            <div className="rank-poster">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
