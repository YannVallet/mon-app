import React, { Component } from "react";

export default class FormInputs extends Component {
  render() {
    return (
      <div>
        <div className="card my-3">
          <div className="card-header">
            Ajouter une personne
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="nom">Nom</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="nom"
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="age"
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="ville">Ville</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="ville"
                  ></input>
                </div>

                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="button">
                    Créez votre fiche !
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
