import {Button, Divider, Typography} from "@material-ui/core";
import React from "react";

function PlansCard({classes, plan}) {
    return (
      <div className={classes.card}>
        <div className={classes.card__Sections}>
          <Typography variant="h5" component={"h5"}>
            {plan.title}
          </Typography>
          <Typography variant="subtitle1" component={"p"}>
            {plan.planType}
          </Typography>
        </div>
        <Divider variant="middle" className={classes.divider} />
        <div className={classes.card__Sections}>
          <Typography
            variant="h3"
            component={"h3"}
            style={{ color: "#FF2B51" }}>
            Rs.{plan.price}
          </Typography>
          <Typography variant="subtitle1" component={"p"}>
            {plan.description}
          </Typography>
        </div>
        <Typography
          variant="body1"
          component={"p"}
          style={{ margin: "0 1.3em", fontWeight: "bold" }}>
          Features
        </Typography>
        <ul className={classes.pointers}>
          {plan.features.map((feature, index) => {
            return (
              <li key={index} className={classes.feature}>
                <Typography variant="body2" component={"p"}>
                  {feature}
                </Typography>
              </li>
            );
          })}
        </ul>
        <div className={classes.card__button}>
          <Button fullWidth className={classes.button}>
            Try for Free
          </Button>
        </div>
      </div>
    );
}

export default PlansCard;
