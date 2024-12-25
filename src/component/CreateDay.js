import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();

    function addDay() {
        // setDay(day + 1);
        let id = days.length > 0 ? Number(days[days.length - 1].id) + 1 : 1;

        fetch(`http://localhost:3001/days`, {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json",
            }, 
            body: JSON.stringify({
                id : String(id),
                day : days.length + 1
            })
        })
        .then(res => {
            if (res.ok) {
                alert("생성이 완료되었습니다.");
                navigate(`/`);
            } else {
                console.error("Failed to update the word:", res.status, res.statusText);
            }
        });
    }

    return (
        <div>
            <h3>현재일수 : {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    )
}