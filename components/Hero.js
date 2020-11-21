import Link from 'next/link';

const Hero = () => {
  return (
    <div className="Hero">
        <h3 className="Hero__title">안녕하세요, Hello World 👋 🌎!</h3>
        <p className="Hero__description">이곳은 제가 여러 플랫폼에 작성한 글들을 아카이브 해둔 공간입니다.</p>
        <div className="Hero__links">
          <Link href="https://github.com/cjaewon" alt="Cjaewon's Github URL">깃허브</Link>
          <Link href="https://medium.com/cja3won" alt="Cjaewon's Medium URL">미디엄</Link>
        </div>
    </div>
  )
};

export default Hero