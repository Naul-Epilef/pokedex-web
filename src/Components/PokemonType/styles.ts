import styled from "styled-components";

const Span = styled.span`
  padding: 5px 15px;
  border-radius: 5px;
`;

const WhiteSpan = styled(Span)`
  color: white !important;
`;

const BlackSpan = styled(Span)`
  color: #212121 !important;
`;

const TypeBug = styled(WhiteSpan)`
  background-color: #729f3f;
`;

const TypeDark = styled(WhiteSpan)`
  background-color: #707070;
`;

const TypeDragon = styled(WhiteSpan)`
  background: linear-gradient(
    0deg,
    rgba(241, 110, 87, 1) 50%,
    rgba(83, 164, 207, 1) 50%
  );
`;

const TypeElectric = styled(BlackSpan)`
  background-color: #eed434;
  color: #212121 !important;
`;

const TypeFairy = styled(BlackSpan)`
  background-color: #fdb9e9;
`;

const TypeFighting = styled(WhiteSpan)`
  background-color: #d56723;
`;

const TypeFire = styled(WhiteSpan)`
  background-color: #fd7d24;
`;

const TypeFlying = styled(BlackSpan)`
  background: linear-gradient(
    0deg,
    rgba(189, 185, 184, 1) 50%,
    rgba(61, 199, 239, 1) 50%
  );
`;

const TypeGhost = styled(WhiteSpan)`
  background-color: #7a61a2;
`;

const TypeGrass = styled(BlackSpan)`
  background-color: #9bcc50;
  color: #212121 !important;
`;

const TypeGround = styled(BlackSpan)`
  background: linear-gradient(
    0deg,
    rgba(171, 152, 66, 1) 50%,
    rgba(247, 222, 63, 1) 50%
  );
  color: #212121;
`;

const TypeIce = styled(BlackSpan)`
  background-color: #51c4e7;
  color: #212121;
`;

const TypeNormal = styled(BlackSpan)`
  background-color: #a4acaf;
  color: #212121;
`;

const TypePoison = styled(WhiteSpan)`
  background-color: #b97fc9;
`;

const TypePsychic = styled(WhiteSpan)`
  background-color: #f366b9;
`;

const TypeRock = styled(WhiteSpan)`
  background-color: #a38c21;
`;

const TypeSteel = styled(BlackSpan)`
  background-color: #9eb7b8;
  color: #212121;
`;

const TypeWater = styled(WhiteSpan)`
  background-color: #4592c4;
`;

export {
  TypeBug,
  TypeDark,
  TypeDragon,
  TypeElectric,
  TypeFairy,
  TypeFighting,
  TypeFire,
  TypeFlying,
  TypeGhost,
  TypeGrass,
  TypeGround,
  TypeIce,
  TypeNormal,
  TypePoison,
  TypePsychic,
  TypeRock,
  TypeSteel,
  TypeWater,
};
