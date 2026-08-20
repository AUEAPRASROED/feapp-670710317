import ProfileCard from './ProfileCard';
import './App.css';

const members = [
  { id: 670710317, name: 'ชาญชัญญ์ เอื้อประเสริฐ', nickname: 'โจ้',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'ปลากัด'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
  { id: 670710309, name: 'กิตติศักดิ์ แก้วบุรงศ์', nickname: 'เนส',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาชัก', 'บีเวอร์'] },

  { id: 670710310, name: 'กฤษฏา นาคะพงศ์', nickname: 'พรีท',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาใต้หวัน', 'ชูก้าไรท์เดอร์'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;