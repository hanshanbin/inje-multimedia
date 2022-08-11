import React from "react";
import "./AboutPeople.scss";

function AboutPeople() {
  return (
    <div class="container">
      <div class="item-top">
        <p>졸업준비위원회</p>
        <div>
          <span>위원장</span>
          <span>박은수</span>
        </div>
      </div>
      <div className="item-middle">
        <div class="item-left">
          <p>디지털콘텐츠</p>
          <div>
            <span>김시은</span>
            <span>지창현</span>
          </div>
        </div>
        <div class="item-center">
          <p>모션미디어</p>
          <div>
            <span>김성혁</span>
            <span>박은수</span>
          </div>
        </div>
        <div class="item-right">
          <p>비주얼인포메이션디자인</p>
          <div>
            <span>노연희</span>
            <span>허유진</span>
          </div>
        </div>
      </div>

      <div className="item-down">
        <div class="item-lt mr">
          <p>전시 웹사이트 디자인</p>
          <div>
            <span>김기성</span>
            <span>김나영</span>
            <span>전주현</span>
            <span>조성래</span>
            <span>지창현</span>
          </div>
        </div>
        <div class="item-rt mr">
          <p>전시 웹사이트 설계</p>
          <div>
            <span>구혜진</span>
            <span>김시은</span>
            <span>서보현</span>
            <span>이영민</span>
            <span>조이현</span>
          </div>
        </div>
      </div>
      <div className="item-down">
        <div class="item-lb mr">
          <p>전시 웹사이트 코딩</p>
          <div>
            <span>남규리</span>
            <span>안도연</span>
            <span>이도현</span>
            <span>이민재</span>
            <span>이한빈</span>
          </div>
        </div>
        <div class="item-rb mr">
          <p>온라인 홍보</p>
          <div>
            <span>김문주</span>
            <span>박민규</span>
            <span>신소현</span>
            <span>장은교</span>
            <span>최재희</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPeople;
