var enemyhealth : int = 50;


function DeductPoints (hitpoints : int) {

    enemyhealth -= hitpoints;
}

    function Update () {
	
        if (enemyhealth <= 0) {
            Destroy(gameObject);
        }
    }


    function coinTest (hitpoints : int) {

        Destroy(gameObject);
    }
