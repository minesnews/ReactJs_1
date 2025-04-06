function EventCard(props) {
    const propsBoolean = true;
    return (
        <div className = "eventCard" >
	<h2 style={{color:propsBoolean ? 'green' : 'red'}}><span className="eventCard_title">Группа</span>"{props.title}"</h2>
	<h2><span className="eventCard_date">Дата: </span>{props.date}</h2>
	<h2><span className="eventCard_description">Адрес: </span>{props.location}</h2>
       </div>

    );
}
export default EventCard;