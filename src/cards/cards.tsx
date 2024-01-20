import s from "./cards.module.scss";
import { Price } from "../price/price";
import { Button } from "../button/button";

export const Cards = () => {
  return (
    <div className={s.container}>
      <img
        className={s.img}
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.sigaretnet.by%2Fimages%2Fstories%2Fvirtuemart%2Fproduct%2Fgeekvape-one-black.jpg&tbnid=BqR33u1-7CZxIM&vet=12ahUKEwjDyLmg6OyDAxW-yrsIHZC-BqoQMygBegQIARBf..i&imgrefurl=https%3A%2F%2Fwww.sigaretnet.by%2Fvejp-geekvape-aegis-one-fc.html&docid=ExvsK-QYaLZynM&w=497&h=600&q=geekvape&ved=2ahUKEwjDyLmg6OyDAxW-yrsIHZC-BqoQMygBegQIARBf"
        alt=""
      />
      <div className={s.content}>
        <div className={s.name}>название</div>
        <div className={s.totalDescription}>описание</div>
        <Price price={100} />
      </div>
      <Button className={s.buttonC} variant={"primary"}>
        купить
      </Button>
    </div>
  );
};
