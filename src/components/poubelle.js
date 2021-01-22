{/* Psyren */}
                    {/* <ExplicationManga titreManga={this.state.titre[1]} */}
                    <div className="my-4">
                        {/* Titre */}
                        <TitreManga name={this.state.titre[1]}/>
                        {/* Titre */}

                        {/* Présentation manga */}
                        <div className="row my-2">
                            <div className="col-3">
                                <ImageManga src={this.state.image[1]} />
                            </div>
                            
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-2">
                                        {
                                            this.state.colonneTitre.map((elem)=>{
                                                return(<ExplPart1 titre={elem}/>)
                                            })
                                        }
                                    </div>
                                    <div className="col-10 rounded">
                                        {
                                            this.state.manga[1].Psyren.map((elem)=>{
                                                return(<ExplPart2 content={elem}/>)
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Présentation manga */}
                    </div>
                    {/* Psyren */}

                    {/* SnK */}
                    <div className="my-4">
                        {/* Titre */}
                        <TitreManga name={this.state.titre[2]}/>
                        {/* Titre */}

                        {/* Présentation manga */}
                        <div className="row my-2">
                            <div className="col-3">
                                <ImageManga src={this.state.image[2]} />
                            </div>
                            
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-2">
                                        {
                                            this.state.colonneTitre.map((elem)=>{
                                                return(<ExplPart1 titre={elem}/>)
                                            })
                                        }
                                    </div>
                                    <div className="col-10 rounded">
                                        {
                                            this.state.manga[2].SnK.map((elem)=>{
                                                return(<ExplPart2 content={elem}/>)
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Présentation manga */}
                    </div>
                    {/* SnK */}

                    {/* TODAG */}
                    <div className="my-4">
                        {/* Titre */}
                        <TitreManga name={this.state.titre[3]}/>
                        {/* Titre */}

                        {/* Présentation manga */}
                        <div className="row my-2">
                            <div className="col-3">
                                <ImageManga src={this.state.image[3]} />
                            </div>
                            
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-2">
                                        {
                                            this.state.colonneTitre.map((elem)=>{
                                                return(<ExplPart1 titre={elem}/>)
                                            })
                                        }
                                    </div>
                                    <div className="col-10 rounded">
                                        {
                                            this.state.manga[3].TODAG.map((elem)=>{
                                                return(<ExplPart2 content={elem}/>)
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Présentation manga */}
                    </div>
                    {/* TODAG */}

                    {/* ToG */}
                    <div className="my-4">
                        {/* Titre */}
                        <TitreManga name={this.state.titre[4]}/>
                        {/* Titre */}

                        {/* Présentation manga */}
                        <div className="row my-2">
                            <div className="col-3">
                                <ImageManga src={this.state.image[4]} />
                            </div>
                            
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-2">
                                        {
                                            this.state.colonneTitre.map((elem)=>{
                                                return(<ExplPart1 titre={elem}/>)
                                            })
                                        }
                                    </div>
                                    <div className="col-10 rounded">
                                        {
                                            this.state.manga[4].ToG.map((elem)=>{
                                                return(<ExplPart2 content={elem}/>)
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Présentation manga */}
                    </div>
                    {/* ToG */}
                </section>
                {/* Section manga */}