function FloorPlan(props) {
  return (
    <div id="container">
      <div className="bedroom" id="b1">
        <p>{props.bedroom1}</p>
      </div>
      <div id="oven">
        <p>Oven</p>
      </div>
      <div id="sink">
        <p>Sink</p>
      </div>  
      <div id="kitchen">
        <p>{props.kitchen}</p>
      </div>
      <div class="bath" id="full-bath">
        <p>{props.fullBath}</p>
      </div>
      <div className="bedroom" id="b2">
        <p>{props.bedroom2}</p>
      </div>
      <div id="living-room">
        <p>{props.livingRoom}</p>
      </div>
      <div class="bath" id="half-bath">
        <p>{props.halfBath}</p>
      </div>
      <div className="bedroom" id="b3">
        <p>{props.bedroom3}</p>
      </div>
    </div>
  )
}

export default FloorPlan