import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

export const Card = () => {
  return (
    <>
      <S.CardWrapper>
        <S.BadgesWrapper>
          <S.Badge>156</S.Badge>
          <S.Badge>155</S.Badge>
          <S.Badge>154</S.Badge>
        </S.BadgesWrapper>
        <S.CardImageWrapper>
          <Link
            href="https://mitg-mangas.s3.sa-east-1.amazonaws.com/cover-series.png"
            passHref
          >
            <Image
              src="https://mitg-mangas.s3.sa-east-1.amazonaws.com/cover-series.png"
              blurDataURL="https://mitg-mangas.s3.sa-east-1.amazonaws.com/cover-series.png"
              alt="test"
              placeholder="blur"
              width={312}
              height={435}
              layout="responsive"
            />
          </Link>
        </S.CardImageWrapper>

        <S.CardHeader>
          <Link href="https://mitg-mangas.s3.sa-east-1.amazonaws.com/cover-series.png">
            <S.CardTitle>Solo Leveling</S.CardTitle>
          </Link>
        </S.CardHeader>
      </S.CardWrapper>
    </>
  )
}

export default Card
