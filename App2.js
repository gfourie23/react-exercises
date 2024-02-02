const App = () => (
    <div>
        <Tweet 
        name="Sam"
        username="Sam123" 
        date={new Date().toDateString()}
        message="This is the first tweet." 
        />
        <Tweet
        name="Kate" 
        username="katekate"
        date={new Date().toDateString()}
        message="This is the second tweet." 
        />
        <Tweet
        name="Max" 
        username="MinMax"
        date={new Date().toDateString()}
        message="This is the third tweet."
        />
    </div>
)