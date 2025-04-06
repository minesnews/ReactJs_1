import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';
import Message from './components/Message';

function App() {
	return ( <div className = "App" >
				<header className = "App-header" >
					<Message title = "title" text = "text" / >
					<h4> Random title </h4>
					<p> Random text </p>
					<Greeting / >
					<CurrentTime / >
					< EventCard title = "Группа 1"
					date = "22 Октября"
					location = "Москва" / >
				</header>
				<p> Hiden random text </p> 
			</div>
    );
}

export default App;