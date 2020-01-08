function ConsultaQuery(StrQuery,parametros,conexion,callback) 
{
    try {
        conexion.connect( (err) => {
            if(err){
                callback(err);
            }
            parametros.execute(StrQuery, (err, recorset) => {
                if(err){
                    callback(err.originalError, recorset);
                }
                else
                {
                    callback(err,recorset);
                }

                conexion.close();
            });
        });
    } catch (error) {
        callback(error, null);
    }

    return;
}

module.exports.ConsultaQuery = ConsultaQuery;