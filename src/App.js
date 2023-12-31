import { useState } from "react";
import { userContext } from "./Context";
import Header from "./Header";
import "./App.css";
import { Content } from "./Content";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(150);
  const [product2, setProduct2] = useState(800);
  const [product3, setProduct3] = useState(300);

  return (
    <userContext.Provider value={"กมลรัตน์ สาลีวรรณ"}>
      <div className="App">
        <Header />
        <Content />
        <div>
          <h3>อาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพตามวิถีภูมิปัญญาท้องถิ่นของจังหวัดอุบลราชธานี</h3>
          
        </div>
        <div>
          <img src="ปลาส้มทรงเครื่องสมุนไพร.jpg" alt="menu" width="20%" />
          <br />
          <p>ปลาส้มทรงเครื่องสมุนไพร</p>
          ปลาส้มทรงเครื่องสมุนไพร เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี ที่ได้สืบทอดกันมารุ่นต่อรุ่น มีความโดดเด่นและมีความเป็นเอกลักษณ์ของจังหวัดอุบลราชธานี เป็นต้นตำรับเมนูสมุนไพรโบราณที่มีมาช้านานทั้งในเรื่องของรสชาติที่กลมกล่อม เครื่องปรุงล้วนเป็นสมุนไพรจากธรรมชาติ มีคุณค่าทางสมุนไพรสูง เป็นภูมิปัญญาในการถนอมอาหารด้วยวิธีแปรรูปปลาส้ม เพื่อให้เก็บไว้ได้นานหลายเดือน ใช้ส่วนผสมจากวัตถุดิบธรรมชาติที่มีในท้องถิ่นโดยใช้ส่วนผสมหลัก คือ เนื้อปลา ซึ่งปลาที่นำมาเป็นปลาส้ม จะเลือกใช้ปลาบึกและปลาสวาย ซึ่ง เป็นปลาธรรมชาติจากลุ่มแม่น้ำโขง เนื้อปลามีคุณค่าทางโภชนาการ อุดมไปด้วยโปรตีนสูง ไขมันต่ำ ประกอบกับจังหวัดอุบลราชธานีมีแม่น้ำไหลผ่านถึง 3 สาย ได้แก่ แม่น้ำมูล แม่น้ำชี และแม่น้ำโขง จึงอุดมไปด้วยพันธุ์ปลานานาชนิด จึงได้รับสมญานามยกให้เป็นราชธานีแห่งปลาแซ่บหลาย เมื่อผสมผสานเข้ากับสมุนไพรทอดกรอบที่คลุกเคล้ากับเนื้อปลา ทำให้กลิ่นและรสชาติของปลาส้ม มีเอกลักษณ์ ซึ่งสมุนไพรที่ใช้ทั้งหมด ได้แก่ พริก หอม กระเทียม ขิง ข่า ตะไคร้ ใบมะกรูด ล้วนผ่านการปลูกด้วยวิธีธรรมชาติปลอดสารเคมี มีประโยชน์ของสมุนไพรที่มีสรรพคุณต่อสุขภาพ มีสรรพคุณทางยาทำให้ระบบการเผาผลาญทำงานได้ดี ทำให้ความดันโลหิตต่ำ ลดระดับน้ำตาลในเลือด ลดไขมันในเลือดได้ดี และยังมีส่วนช่วยกระตุ้นระบบการขับถ่ายให้ทำงานอย่างเป็นปกติอีกด้วย
    จึงถือได้ว่า ปลาส้มทรงเครื่องสมุนไพร เป็นอาหารพื้นเมือง ที่มีสรรพคุณต่อสุขภาพ ของจังหวัดอุบลราชธานี มีความโดดเด่นและมีเอกลักษณ์ ของความเป็นไทย ถูกปรุงแต่งและถ่ายทอดสูตรอาหารพื้นเมืองโบราณของจังหวัดอุบลราชธานีมาช้านาน เป็นอาหารแห่งความมีคุณค่าทางโภชนาการ และสรรพคุณทางยาจากพืชผักสมุนไพรพื้นบ้านที่มีประโยชน์นานาชนิด เป็นวัฒนธรรมอาหารที่ควรอนุรักษ์ และยังแสดงออกถึงภูมิปัญญาท้องถิ่น ถือเป็นภูมิปัญญาไทยและมรดกทางวัฒนธรรมอาหารพื้นเมืองที่ต้องรักษาสืบทอดกันต่อไป

        </div>
        <button
          onClick={() => {
            setTotalItems(totalItems + 1);
            setTotalPrice(totalPrice + product1);
          }}
        >
          เรียนรู้เพิ่มเติม 
        </button>
        <button
          onClick={() => {
            if (totalItems > 0) {
              setTotalItems(totalItems - 1);
              setTotalPrice(totalPrice - product1);
            }
          }}
        >
        </button>
        <div>
          <img src="แกงเห็ดเผาะไข่มดแดง.jpg" alt="menu" width="20%" />
          <br />
          <p>แกงเห็ดเผาะไข่มดแดง</p>
          แกงเห็ดเผาะไข่มดแดง เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี ที่ได้สืบทอดกันมารุ่นต่อรุ่น โดยการนำเอาทรัพยากรชีวภาพที่มีอยู่ในท้องถิ่นมาปรุงเป็นอาหารพื้นเมือง ที่มีรสชาติกลมกล่อม เป็นอาหารที่ให้คุณค่าทางโภชนาการ เห็ดเผาะมีโปรตีนและแร่ธาตุต่างๆและสรรพคุณทางยาให้ประโยชน์ช่วยบำรุงร่างกาย ลดอาการร้อนใน เนื่องจากมีฤทธิ์เย็น แก้ช้ำใน แก้ไข้ตัวร้อน ช่วยสมานแผล ลดอาการอักเสบและบวม ช่วยทำให้เลือดแข็งตัวได้เร็วขึ้น บรรเทาอาการคันตามร่างกาย และยังมีส่วนช่วยยับยั้งการเกิดเซลล์มะเร็งอีกด้วย ส่วนไข่มดแดง มีประโยชน์ต่อร่างกายมีคุณค่าทางอาหารสูง โดยเฉพาะโปรตีน ฟอสฟอรัส และแคลเซียม และยังมีสรรพคุณทางยาช่วยระบายท้องและเจริญอาหาร และ ผักหวานเป็น ผักพื้นบ้านสมุนไพร มีคุณค่าทางโภชนาการสูง เป็นแหล่งของโปรตีน วิตามินซี เบต้าแคโรทีนซึ่งช่วยในการมองเห็น บำรุงสายตา และมีสรรพคุณเป็นสารต้านอนุมูลอิสระ ช่วยป้องกันโรคมะเร็ง โรคหัวใจขาดเลือด โรคเบาหวานและ โรคความดันโลหิตสูง มี แคลเซียม และฟอสฟอรัสสูง ช่วยบำรุงกระดูก และฟันให้แข็งแรง และมีเส้นใยอาหารช่วยในการขับถ่ายได้ ซึ่งล้วนแล้วแต่มีประโยชน์ของสมุนไพรที่มีสรรพคุณต่อสุขภาพร่างกายแทบทั้งสิ้น นำเห็ดเผาะ ไข่มดแดง และผักหวานมาแกงผสมผสานเข้ากับน้ำคั้นใบย่านางสีเขียวเข้มที่มีสารต่อต้านอนุมูลอิสระ และมีสรรพคุณ เสริมสร้างภูมิต้านทานโรคในร่างกาย ช่วยขับพิษและลดไข้ ช่วยป้องกันการเกิดโรคหัวใจ ช่วยลดระดับน้ำตาลในเลือด และลดความดันโลหิตสูงได้ ปรุงรสนัวด้วยน้ำปลาร้า เกลือป่น และข้าวคั่วป่นลงไป เติมความเผ็ดด้วยพริกสดสีแดง ที่ช่วยให้ส่วนผสมน้ำแกงรสเผ็ดร้อนเข้มข้นกลมกล่อม กลิ่นหอมจากสมุนไพรสดในเครื่องพริกแกง ได้แก่ ใบแมงลัก ข่า ตะไคร้ ล้วนมีสรรพคุณทางยา มีสารต่อต้านอนุมูลอิสระ ช่วยลดความดันโลหิต ลดไขมันในเลือดได้ดี ยังมีส่วนช่วยกระตุ้นระบบการขับถ่ายให้ทำงานอย่างเป็นปกติอีกด้วย
     จึงถือได้ว่า แกงเห็ดเผาะไข่มดแดง เป็นอาหารพื้นเมือง ที่มีสรรพคุณต่อสุขภาพ ของจังหวัดอุบลราชธานี มีความโดดเด่นและมีเอกลักษณ์ ของความเป็นไทย เป็นอาหารที่ใช้วัตถุดิบธรรมชาติที่มีในท้องถิ่นมาปรุงแต่ง และถ่ายทอดภูมิปัญญาอาหารพื้นเมืองมาช้านาน เป็นอาหารแห่งความมีคุณค่าทางโภชนาการ และสรรพคุณทางยาจากพืชผักสมุนไพรพื้นบ้านที่มีประโยชน์นานาชนิด ที่ช่วยเสริมภูมิต้านทานและป้องกันโรค เป็นวัฒนธรรมอาหารที่ควรอนุรักษ์ และยังแสดงออกถึงภูมิปัญญาท้องถิ่น ถือเป็นภูมิปัญญาไทยและมรดกทางวัฒนธรรมอาหารพื้นเมืองที่ต้องรักษาสืบทอดกันต่อไป

        </div>
        <button
          onClick={() => {
            setTotalItems(totalItems + 1);
            setTotalPrice(totalPrice + product2);
          }}
        >
          เรียนรู้เพิ่มเติม
        </button>
        <button
          onClick={() => {
            if (totalItems > 0) {
              setTotalItems(totalItems - 1);
              setTotalPrice(totalPrice - product2);
            }
          }}
        >
        </button>
        <div>
          <img src="ลาบปลาคัง.jpg" alt="menu" width="20%" />
          <br />
          <p>ลาบปลาคัง</p>
          ลาบปลาคัง เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี ที่ได้สืบทอดกันมารุ่นต่อรุ่น มีความโดดเด่นและมีความเป็นเอกลักษณ์ของจังหวัดอุบลราชธานี เป็นต้นตำรับเมนูสมุนไพรโบราณที่มีมาช้านานทั้งในเรื่องของรสชาติที่กลมกล่อม เครื่องปรุงล้วนเป็นสมุนไพรจากธรรมชาติ มีคุณค่าทางสมุนไพรสูง เป็นอาหารพื้นเมืองที่มีส่วนประกอบหลัก คือ เนื้อปลาคัง ซึ่งเป็นปลาธรรมชาติจากลุ่มแม่น้ำโขง เนื้อปลามีคุณค่าทางโภชนาการ อุดมไปด้วยโปรตีนสูง ไขมันต่ำ และจำเป็นต่อร่างกาย ป้องกันการอุดตันในเส้นเลือด โรคหัวใจ และเส้นเลือดในสมองแตก ช่วยบำรุงเซลล์สมองและเสริมสร้างผนังเซลล์ประสาทในสมองให้แข็งแรง ประกอบกับจังหวัดอุบลราชธานีมีแม่น้ำไหลผ่านถึง 3 สาย ได้แก่ แม่น้ำมูล แม่น้ำชี และแม่น้ำโขง จึงอุดมไปด้วยพันธุ์ปลานานาชนิด จึงได้รับสมญานามยกให้เป็นราชธานีแห่งปลาแซ่บหลาย ดังนั้นลาบปลาคัง จึงเป็นอาหารพื้นเมือง ที่มีเอกลักษณ์เฉพาะ คือ เนื้อปลาคังจะเหนียวแน่น หวานอร่อย มีรสชาติที่ไม่เหมือน ลาบปลาชนิดอื่น เมื่อนำเนื้อปลาคังมาต้ม นำมาสับให้ละเอียด หรือ หั่นเป็นชิ้นเล็กๆบางๆ ปรุงด้วยเครื่องปรุงรสด้วยเกลือ น้ำปลา น้ำปลาร้า มะนาว แล้วโรยด้วยข้าวคั่ว เติมความเผ็ดด้วยพริกป่น กลิ่นหอมจากข้าวคั่วและใบสะระแหน่ ใบมะกรูดซอย ต้นหอม และหอมแดง เป็นความผสมผสานที่ลงตัวระหว่างชนิดของอาหาร และเครื่องปรุง มีรสชาติ เผ็ดกลมกล่อม มีเสน่ห์ของความเป็นไทย รับประทานกับข้าวเหนียวและเครื่องเคียงผักพื้นบ้านนานาชนิด อาทิ แตงกวา ยอดกระถิน ลิ้นฟ้า ยอดมะกอก ยอดมะเฟือง ยอดมะตูม ยอดสะเดา เป็นต้น ซึ่งมีคุณค่าทางสมุนไพรสูง มีใยอาหารสูง มีวิตามิน และเกลือแร่ที่สำคัญ อยู่ในส่วนประกอบของอาหารและในส่วนที่เป็นเครื่องเคียง อุดมด้วยพืชผักสมุนไพรมากมายหลายชนิด ซึ่งมีสรรพคุณทางยาจากสารพฤกษเคมี ช่วยต้านอนุมูลอิสระ ส่งเสริมระบบภูมิคุ้มกันและลดอัตราเสี่ยงต่อการเกิดโรค เช่น โรคไขมันในเลือดสูง โรคหัวใจและหลอดเลือด โรคความดันโลหิตสูง โรคเบาหวาน เป็นต้น
     จึงถือได้ว่า ลาบปลาคัง เป็นอาหารพื้นเมือง ที่มีสรรพคุณต่อสุขภาพ ของจังหวัดอุบลราชธานี มีความโดดเด่นและมีเอกลักษณ์ ของความเป็นไทย ถูกปรุงแต่งและถ่ายทอดสูตรอาหารพื้นเมืองโบราณของจังหวัดอุบลราชธานีมาช้านาน เป็นอาหารแห่งความมีคุณค่าทางโภชนาการ และสรรพคุณทางยาจากพืชผักสมุนไพรพื้นบ้านที่มีประโยชน์นานาชนิด เป็นวัฒนธรรมอาหารที่ควรอนุรักษ์ และยังแสดงออกถึงภูมิปัญญาท้องถิ่น ถือเป็นภูมิปัญญาไทยและมรดกทางวัฒนธรรมอาหารพื้นเมืองที่ต้องรักษาสืบทอดกันต่อไป

        </div>
        <button
          onClick={() => {
            setTotalItems(totalItems + 1);
            setTotalPrice(totalPrice + product3);
          }}
        >
          เรียนรู้เพิ่มเติม
        </button>
        <button
          onClick={() => {
            if (totalItems > 0) {
              setTotalItems(totalItems - 1);
              setTotalPrice(totalPrice - product3);
            }
          }}
        >
        </button>
      </div>
    </userContext.Provider>
  );
}

export default App;